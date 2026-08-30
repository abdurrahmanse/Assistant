import os
import re

def get_new_path(old_path):
    rel = old_path.replace('apps/user/src/', '')
    if rel in ['App.tsx', 'main.tsx', 'index.css']: return rel
    
    if rel == 'pages/checkout/Checkout.tsx': return 'pages/CheckoutPage.tsx'
    if rel == 'pages/sign-in/SignInSide.tsx': return 'pages/SignInPage.tsx'
    if rel == 'pages/sign-up/SignUp.tsx': return 'pages/SignUpPage.tsx'
    
    if rel.startswith('pages/checkout/components/'):
        name = rel.split('/')[-1]
        if name == 'SitemarkIcon.tsx': return 'components/SitemarkIcon.tsx'
        return f"features/checkout/components/{name}"
        
    if rel.startswith('pages/sign-in/components/'):
        name = rel.split('/')[-1]
        return f"features/auth/components/{name}"
        
    if rel.startswith('pages/sign-up/components/'):
        name = rel.split('/')[-1]
        # Ignore duplicate CustomIcons.tsx
        if name == 'CustomIcons.tsx': return None
        return f"features/auth/components/{name}"
        
    return rel

path_map = {}
for root, _, files in os.walk('apps/user/src'):
    for file in files:
        if file.endswith(('.tsx', '.ts')):
            path = os.path.join(root, file)
            new_rel = get_new_path(path)
            if new_rel:
                old_no_ext = re.sub(r'\.tsx?$', '', path)
                new_no_ext = re.sub(r'\.tsx?$', '', new_rel)
                path_map[old_no_ext] = new_no_ext

def resolve_import(base_path, import_str):
    base_dir = os.path.dirname(base_path)
    abs_import = os.path.normpath(os.path.join(base_dir, import_str))
    
    # Handle the removed CustomIcons
    if 'pages/sign-up/components/CustomIcons' in abs_import:
        abs_import = abs_import.replace('sign-up', 'sign-in')
        
    if abs_import in path_map:
        return f"@/{path_map[abs_import]}"
    return None

for root, _, files in os.walk('apps/user/src'):
    for file in files:
        if file.endswith(('.tsx', '.ts')):
            path = os.path.join(root, file)
            
            with open(path, 'r') as f:
                content = f.read()
            
            def replacer(match):
                import_stmt = match.group(0)
                import_path = match.group(1)
                resolved = resolve_import(path, import_path)
                if resolved:
                    return import_stmt.replace(import_path, resolved)
                return import_stmt
                
            new_content = re.sub(r"from\s+['\"](\.[^'\"]+)['\"]", replacer, content)
            
            new_rel = get_new_path(path)
            if not new_rel:
                os.remove(path)
                continue
                
            new_abs = os.path.join('apps/user/src', new_rel)
            os.makedirs(os.path.dirname(new_abs), exist_ok=True)
            
            with open(new_abs, 'w') as f:
                f.write(new_content)
                
            if path != new_abs:
                os.remove(path)

os.system('find apps/user/src -type d -empty -delete')
