import os
import re

filepath = 'apps/admin/src/App.tsx'
with open(filepath, 'r') as f:
    content = f.read()

content = content.replace("from './pages/crud-dashboard/theme/customizations'", "from '@/theme/crud-theme/customizations'")
content = content.replace("from './pages/dashboard/theme/customizations'", "from '@/theme/dashboard-theme/customizations'")

with open(filepath, 'w') as f:
    f.write(content)

# We also need to check other files that might have imported `customizations` without `/index`
def fix_dir_imports(root_dir):
    for root, _, files in os.walk(root_dir):
        for file in files:
            if file.endswith(('.tsx', '.ts')):
                path = os.path.join(root, file)
                with open(path, 'r') as f:
                    content = f.read()
                
                new_content = content.replace("from './customizations'", "from '@/theme/dashboard-theme/customizations'")
                # crud theme customizations were internal
                
                if new_content != content:
                    with open(path, 'w') as f:
                        f.write(new_content)

fix_dir_imports('apps/admin/src')
