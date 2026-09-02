import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button } from '@repo/ui';
import { Award, Download, Share2 } from 'lucide-react';
import React, { useRef, useState } from 'react';
import { brand } from '@repo/ui/shared-theme/themePrimitives';
import { alpha } from '@mui/material/styles';

interface CertificateProps {
  id: string;
  title: string;
  issueDate: string;
  imageUrl: string;
}

export function Certificate3DCard({ cert }: { cert: CertificateProps }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left; 
    const y = e.clientY - rect.top;  
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    
    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => {
    setIsHovering(false);
    setRotation({ x: 0, y: 0 });
  };

  return (
    <Box sx={{ perspective: '1000px', height: '100%' }}>
      <Box 
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        sx={(theme) => ({
          height: '100%', 
          display: 'flex', 
          flexDirection: 'column',
          borderRadius: '16px', 
          border: '1px solid', 
          borderColor: alpha(theme.palette.divider, 0.5),
          bgcolor: 'background.paper',
          ...theme.applyStyles('dark', { borderColor: alpha(theme.palette.divider, 0.2), bgcolor: '#0b0f19' }),
          overflow: 'hidden',
          transition: isHovering ? 'none' : 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transformStyle: 'preserve-3d',
          boxShadow: isHovering 
            ? `${-rotation.y}px ${rotation.x}px 32px ${alpha(brand[500], 0.2)}`
            : `0 4px 20px rgba(0,0,0,0.02)`,
          '&:hover': {
            borderColor: alpha(brand[400], 0.4),
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0, left: 0, right: 0, bottom: 0,
            background: isHovering 
              ? `radial-gradient(circle at ${50 + rotation.y * 2}% ${50 - rotation.x * 2}%, ${alpha(brand[200], 0.1)} 0%, transparent 50%)`
              : 'none',
            pointerEvents: 'none',
            zIndex: 10,
            transition: 'background 0.1s',
          }
        })}
      >
        <Box sx={{ width: '100%', aspectRatio: '4/3', position: 'relative', overflow: 'hidden', transform: 'translateZ(30px)' }}>
          <Box component="img" src={cert.imageUrl} alt={cert.title} sx={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <Box sx={{ position: 'absolute', top: 16, right: 16, p: 1, borderRadius: '8px', bgcolor: alpha(brand[500], 0.9), color: '#fff', transform: 'translateZ(50px)', boxShadow: `0 8px 16px ${alpha(brand[500], 0.4)}` }}>
            <Award size={20} />
          </Box>
        </Box>
        
        <Box sx={{ p: 4, display: 'flex', flexDirection: 'column', flexGrow: 1, transform: 'translateZ(20px)' }}>
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 1, lineHeight: 1.2, letterSpacing: '-0.02em' }}>
            {cert.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" fontWeight={500} sx={{ mb: 3 }}>
            Issued on {cert.issueDate}
          </Typography>
          
          <Box sx={{ mt: 'auto', display: 'flex', gap: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
            <Button variant="primary" fullWidth startIcon={<Download size={16} />}>
              Download Key
            </Button>
            <Button variant="outline" fullWidth startIcon={<Share2 size={16} />} sx={{ borderColor: brand[600], color: brand[600], '&:hover': { bgcolor: alpha(brand[600], 0.1) } }}>
              Verify
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
