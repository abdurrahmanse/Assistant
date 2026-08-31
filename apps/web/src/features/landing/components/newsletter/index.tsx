import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Mail, CheckCircle2 } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { landingService } from '@/features/landing/services/landing.service';

export function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      await landingService.subscribeNewsletter(email);
      setStatus('success');
      setMessage("You're in! Check your inbox.");
      setEmail('');
    } catch (err: any) {
      setStatus('error');
      setMessage(err.message || 'Something went wrong.');
    }
  };

  return (
    <Container maxWidth="md" sx={{ mb: 12 }}>
      <Reveal delay={0.2} direction="up">
        <Box sx={{
          p: { xs: 4, md: 8 },
          borderRadius: '32px',
          bgcolor: 'rgba(255,255,255,0.7)',
          backdropFilter: 'blur(40px)',
          border: '1px solid',
          borderColor: 'rgba(255,255,255,0.8)',
          boxShadow: '0 24px 48px rgba(0,0,0,0.05)',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          '[data-mui-color-scheme="dark"] &': { 
            bgcolor: 'rgba(20,20,25,0.6)', 
            borderColor: 'rgba(255,255,255,0.08)',
            boxShadow: '0 24px 48px rgba(0,0,0,0.4)',
          }
        }}>
          {/* Subtle gradient blob */}
          <Box sx={{
            position: 'absolute', top: '-50%', left: '50%', transform: 'translateX(-50%)',
            width: '100%', aspectRatio: '1', bgcolor: 'primary.main', opacity: 0.1,
            filter: 'blur(100px)', borderRadius: '50%', zIndex: 0, pointerEvents: 'none'
          }} />

          <Box sx={{ position: 'relative', zIndex: 1 }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
              <Box sx={{ p: 2, borderRadius: '50%', bgcolor: 'primary.main', color: 'primary.contrastText' }}>
                <Mail size={32} />
              </Box>
            </Box>
            <Typography variant="h3" sx={{ fontWeight: 900, mb: 2, letterSpacing: '-0.02em' }}>
              Get my free 5-day email course.
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: 500, mx: 'auto', fontSize: '1.1rem' }}>
              Join 20,000+ developers getting weekly insights on React, scalable architecture, and career growth. No spam, unsubscribe anytime.
            </Typography>

            {status === 'success' ? (
              <Stack direction="row" spacing={2} justifyContent="center" alignItems="center" sx={{ color: 'success.main', p: 3, bgcolor: 'success.light', borderRadius: 4, opacity: 0.9 }}>
                <CheckCircle2 size={24} />
                <Typography variant="h6" fontWeight={700}>{message}</Typography>
              </Stack>
            ) : (
              <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, maxWidth: 500, mx: 'auto' }}>
                <TextField 
                  fullWidth 
                  placeholder="Enter your best email" 
                  variant="outlined" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={status === 'loading'}
                  sx={{ 
                    bgcolor: 'background.paper',
                    borderRadius: '12px',
                    '& .MuiOutlinedInput-root': { borderRadius: '12px' }
                  }}
                />
                <Button 
                  type="submit" 
                  variant="contained" 
                  size="large" 
                  disabled={status === 'loading'}
                  sx={{ fontWeight: 800, px: 4, borderRadius: '12px', flexShrink: 0 }}
                >
                  {status === 'loading' ? 'Joining...' : 'Subscribe'}
                </Button>
              </Box>
            )}
            
            {status === 'error' && (
              <Typography color="error.main" variant="caption" sx={{ display: 'block', mt: 2, fontWeight: 600 }}>
                {message}
              </Typography>
            )}
          </Box>
        </Box>
      </Reveal>
    </Container>
  );
}
