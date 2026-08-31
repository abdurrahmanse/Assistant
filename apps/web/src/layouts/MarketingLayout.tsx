import * as React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import AppTheme from '@repo/ui/shared-theme/AppTheme';
import AppAppBar from '@/layouts/AppAppBar';
import Footer from '@/layouts/Footer';
import SEO from '@/components/SEO';
import { FloatingChat } from '@/components/FloatingChat';

interface MarketingLayoutProps {
  children: React.ReactNode;
  disableCustomTheme?: boolean;
}

export default function MarketingLayout({ children, disableCustomTheme }: MarketingLayoutProps) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <AppTheme disableCustomTheme={disableCustomTheme}>
      <motion.div
        style={{
          scaleX,
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          background: 'linear-gradient(90deg, var(--template-palette-primary-main), #EC4899)',
          transformOrigin: '0%',
          zIndex: 9999,
        }}
      />
      <CssBaseline enableColorScheme />
      <SEO />
      <AppAppBar />
      <Box component="main" sx={{ flexGrow: 1 }}>
        {children}
      </Box>
      <Footer />
      <FloatingChat />
    </AppTheme>
  );
}
