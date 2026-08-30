import os
import re

def rewrite_imports(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    # Generic replace for AssistantLogo
    content = re.sub(r"from '.*?AssistantLogo'", "from '@/components/AssistantLogo'", content)
    content = re.sub(r"from '.*?SEO'", "from '@/components/SEO'", content)
    content = re.sub(r"from '.*?AppAppBar'", "from '@/layouts/AppAppBar'", content)
    content = re.sub(r"from '.*?Footer'", "from '@/layouts/Footer'", content)
    
    # Marketing specific
    features = ['Hero', 'LogoCollection', 'Highlights', 'Pricing', 'Features', 'Testimonials', 'FAQ']
    for feat in features:
        content = re.sub(rf"from '.*?{feat}'", f"from '@/features/landing/components/{feat}'", content)
    
    with open(filepath, 'w') as f:
        f.write(content)

for root, dirs, files in os.walk('apps/web/src'):
    for file in files:
        if file.endswith(('.tsx', '.ts')):
            rewrite_imports(os.path.join(root, file))

