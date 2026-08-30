import os
import re

file_map = {}

# We define rules to map old paths to new paths
def get_new_path(old_path):
    # E.g. apps/admin/src/pages/dashboard/components/AppNavbar.tsx
    rel = old_path.replace('apps/admin/src/', '')
    
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
        # Just merge them into src/theme/
        return rel.replace('pages/dashboard/theme/', 'theme/dashboard-theme/').replace('pages/crud-dashboard/theme/', 'theme/crud-theme/')
        
    return rel

# Collect all files
all_files = []
for root, _, files in os.walk('apps/admin/src'):
    for file in files:
        if file.endswith(('.tsx', '.ts')):
            path = os.path.join(root, file)
            new_rel = get_new_path(path)
            all_files.append((path, f"apps/admin/src/{new_rel}"))
            
print(f"Mapped {len(all_files)} files")
