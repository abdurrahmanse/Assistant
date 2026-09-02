import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button } from '@repo/ui';
import { Award, Download, Share2 } from 'lucide-react';
import React, { useRef, useState } from 'react';

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
    const x = e.clientX - rect.left; // x position within the element.
    const y = e.clientY - rect.top;  // y position within the element.
    
    // Calculate rotation based on mouse position (max rotation 15 degrees)
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -15;
    const rotateY = ((x - centerX) / centerX) * 15;
    
    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setRotation({ x: 0, y: 0 }); // Reset rotation
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
          borderRadius: '24px', 
          border: '2px solid', 
          borderColor: 'rgba(0,0,0,0.1)',
          bgcolor: 'rgba(255,255,255,0.8)',
          ...theme.applyStyles('dark', { borderColor: 'rgba(255,255,255,0.1)', bgcolor: 'rgba(20,20,25,0.8)' }),
          backdropFilter: 'blur(24px)',
          overflow: 'hidden',
          transition: isHovering ? 'none' : 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transformStyle: 'preserve-3d',
          boxShadow: isHovering 
            ? `${-rotation.y}px ${rotation.x}px 30px rgba(236,72,153,0.3)`
            : '8px 8px 0px rgba(0,0,0,0.05)',
          '&:hover': {
            borderColor: '#8b5cf6',
          },
          // Holographic glare effect
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: isHovering 
              ? `radial-gradient(circle at ${50 + rotation.y * 2}% ${50 - rotation.x * 2}%, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 50%)`
              : 'none',
            pointerEvents: 'none',
            zIndex: 10,
            transition: 'background 0.1s',
          }
        })}
      >
        <Box sx={{ width: '100%', aspectRatio: '4/3', position: 'relative', overflow: 'hidden', transform: 'translateZ(30px)' }}>
          <Box component="img" src={cert.imageUrl} alt={cert.title} sx={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <Box sx={{ position: 'absolute', top: 16, right: 16, p: 1, borderRadius: '12px', bgcolor: '#8b5cf6', color: '#fff', transform: 'translateZ(50px)', boxShadow: '0 10px 20px rgba(0,0,0,0.2)' }}>
            <Award size={20} />
          </Box>
        </Box>
        
        <Box sx={{ p: 4, display: 'flex', flexDirection: 'column', flexGrow: 1, transform: 'translateZ(20px)' }}>
          <Typography variant="h5" sx={{ fontWeight: 900, mb: 1, lineHeight: 1.2, letterSpacing: '-0.02em' }}>
            {cert.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" fontWeight={600} sx={{ mb: 3 }}>
            Issued on {cert.issueDate}
          </Typography>
          
          <Box sx={{ mt: 'auto', display: 'flex', gap: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
            <Button variant="primary" fullWidth startIcon={<Download size={16} />}>
              Download PDF
            </Button>
            <Button variant="outline" fullWidth startIcon={<Share2 size={16} />} sx={{ borderColor: '#0077b5', color: '#0077b5', '&:hover': { bgcolor: '#0077b5', color: '#fff' } }}>
              Share
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
