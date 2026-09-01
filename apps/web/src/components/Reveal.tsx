import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';

interface RevealProps {
  children: React.ReactNode;
  width?: 'fit-content' | '100%';
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
}

export function Reveal({ children, width = '100%', delay = 0, direction = 'up' }: RevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  const initialConfig = { opacity: 0, y: 0, x: 0 };
  
  if (direction === 'up') initialConfig.y = 50;
  if (direction === 'down') initialConfig.y = -50;
  if (direction === 'left') initialConfig.x = -50;
  if (direction === 'right') initialConfig.x = 50;

  return (
    <div ref={ref} style={{ width, position: 'relative' }}>
      <motion.div
        variants={{
          hidden: initialConfig,
          visible: { opacity: 1, y: 0, x: 0 },
        }}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        transition={{ duration: 0.6, delay, ease: [0.17, 0.55, 0.55, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
}
