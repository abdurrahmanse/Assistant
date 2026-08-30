import * as React from 'react';
import { LayoutDashboard, Smartphone, MonitorSmartphone } from "lucide-react";

export const items = [
  {
    icon: <LayoutDashboard size={20} />,
    title: 'Dashboard',
    description:
      'This item could provide a snapshot of the most important metrics or data points related to the product.',
    imageLight: `url("${import.meta.env.VITE_TEMPLATE_IMAGE_URL || 'https://mui.com'}/static/images/templates/templates-images/dash-light.png")`,
    imageDark: `url("${import.meta.env.VITE_TEMPLATE_IMAGE_URL || 'https://mui.com'}/static/images/templates/templates-images/dash-dark.png")`,
  },
  {
    icon: <Smartphone size={20} />,
    title: 'Mobile integration',
    description:
      'This item could provide information about the mobile app version of the product.',
    imageLight: `url("${import.meta.env.VITE_TEMPLATE_IMAGE_URL || 'https://mui.com'}/static/images/templates/templates-images/mobile-light.png")`,
    imageDark: `url("${import.meta.env.VITE_TEMPLATE_IMAGE_URL || 'https://mui.com'}/static/images/templates/templates-images/mobile-dark.png")`,
  },
  {
    icon: <MonitorSmartphone size={20} />,
    title: 'Available on all platforms',
    description:
      'This item could let users know the product is available on all platforms, such as web, mobile, and desktop.',
    imageLight: `url("${import.meta.env.VITE_TEMPLATE_IMAGE_URL || 'https://mui.com'}/static/images/templates/templates-images/devices-light.png")`,
    imageDark: `url("${import.meta.env.VITE_TEMPLATE_IMAGE_URL || 'https://mui.com'}/static/images/templates/templates-images/devices-dark.png")`,
  },
];
