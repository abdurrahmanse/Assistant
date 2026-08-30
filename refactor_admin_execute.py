import os
import re
import shutil

def get_new_path(old_path):
    rel = old_path.replace('apps/admin/src/', '')
    if rel == 'App.tsx' or rel == 'main.tsx': return rel
    
    if rel == 'pages/dashboard/Dashboard.tsx': return 'pages/AnalyticsPage.tsx'
    if rel == 'pages/crud-dashboard/CrudDashboard.tsx': return 'pages/CrudPage.tsx'
    if rel == 'pages/sign-in/SignIn.tsx': return 'pages/SignInPage.tsx'
    
    if rel.startswith('pages/dashboard/components/'):
        name = rel.split('/')[-1]
        layouts = ['AppNavbar.tsx', 'Header.tsx', 'MenuButton.tsx', 'MenuContent.tsx', 'SideMenu.tsx', 'SideMenuMobile.tsx', 'NavbarBreadcrumbs.tsx', 'Search.tsx', 'OptionsMenu.tsx']
        if name in layouts: return f"layouts/DashboardLayout/{name}"
        return f"features/analytics/{name}"
    
    if rel.startswith('pages/dashboard/internals/'):
        return rel.replace('pages/dashboard/internals/', 'features/analytics/internals/')
        
    if rel.startswith('pages/crud-dashboard/components/'):
        name = rel.split('/')[-1]
        if name.startswith('Dashboard') or name in ['PageContainer.tsx', 'ThemeSwitcher.tsx', 'SitemarkIcon.tsx']:
            if name == 'SitemarkIcon.tsx': return 'components/SitemarkIcon.tsx'
            return f"layouts/CrudLayout/{name}"
        if name.startswith('Employee'):
            return f"features/crud/components/{name}"
            
    if rel.startswith('pages/crud-dashboard/hooks/'):
        return rel.replace('pages/crud-dashboard/', 'features/crud/')
    if rel.startswith('pages/crud-dashboard/data/'):
        return rel.replace('pages/crud-dashboard/', 'features/crud/')
    if rel.startswith('pages/crud-dashboard/context/'):
        return rel.replace('pages/crud-dashboard/', 'layouts/CrudLayout/')
        
    if rel == 'pages/crud-dashboard/constants.ts': return 'features/crud/constants.ts'
    if rel == 'pages/crud-dashboard/mixins.ts': return 'features/crud/mixins.ts'
    
    if rel.startswith('pages/sign-in/components/'):
        name = rel.split('/')[-1]
        return f"features/auth/components/{name}"
        
    if 'theme/' in rel:
        return rel.replace('pages/dashboard/theme/', 'theme/dashboard-theme/').replace('pages/crud-dashboard/theme/', 'theme/crud-theme/')
        
    return rel

# Build map
path_map = {}
for root, _, files in os.walk('apps/admin/src'):
    for file in files:
        if file.endswith(('.tsx', '.ts')):
            path = os.path.join(root, file)
            new_rel = get_new_path(path)
            # Remove extensions for import matching
            old_no_ext = re.sub(r'\.tsx?$', '', path)
            new_no_ext = re.sub(r'\.tsx?$', '', new_rel)
            path_map[old_no_ext] = new_no_ext

def resolve_import(base_path, import_str):
    # E.g. base_path = 'apps/admin/src/pages/dashboard/Dashboard.tsx'
    # import_str = './components/Header'
    base_dir = os.path.dirname(base_path)
    abs_import = os.path.normpath(os.path.join(base_dir, import_str))
    
    if abs_import in path_map:
        return f"@/{path_map[abs_import]}"
    return None

for root, _, files in os.walk('apps/admin/src'):
    for file in files:
        if file.endswith(('.tsx', '.ts')):
            path = os.path.join(root, file)
            
            with open(path, 'r') as f:
                content = f.read()
            
            # Find all local imports: import X from './...' or '../...'
            def replacer(match):
                import_stmt = match.group(0)
                import_path = match.group(1)
                resolved = resolve_import(path, import_path)
                if resolved:
                    return import_stmt.replace(import_path, resolved)
                return import_stmt
                
            new_content = re.sub(r"from\s+['\"](\.[^'\"]+)['\"]", replacer, content)
            
            new_rel = get_new_path(path)
            new_abs = os.path.join('apps/admin/src', new_rel)
            
            os.makedirs(os.path.dirname(new_abs), exist_ok=True)
            with open(new_abs, 'w') as f:
                f.write(new_content)
                
            if path != new_abs:
                os.remove(path)

# Update App.tsx routing imports since they were updated too!
# Also remove empty directories
os.system('find apps/admin/src -type d -empty -delete')
