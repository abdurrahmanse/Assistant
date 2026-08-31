import React, { useState } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { TextInput as TextField } from '@repo/ui';
import { Button } from '@repo/ui';
import Stack from '@mui/material/Stack';
import { MessageCircleQuestion, X, Send } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { toast } from 'sonner';

export function FloatingChat() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    toast.success("Message sent! I'll get back to you soon.");
    setMessage('');
    setOpen(false);
  };

  return (
    <Box sx={{ position: 'fixed', bottom: 24, right: 24, zIndex: 9999 }}>
      <AnimatePresence>
        {open && (
          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            sx={{
              position: 'absolute',
              bottom: 80,
              right: 0,
              width: 320,
              bgcolor: 'rgba(255, 255, 255, 0.8)',
              backdropFilter: 'blur(40px)',
              borderRadius: '24px',
              border: '1px solid',
              borderColor: 'divider',
              boxShadow: '0 24px 48px rgba(0,0,0,0.1)',
              overflow: 'hidden',
              '[data-mui-color-scheme="dark"] &': { 
                bgcolor: 'rgba(20,20,25,0.8)', 
                boxShadow: '0 24px 48px rgba(0,0,0,0.5)',
              }
            }}
          >
            <Box sx={{ p: 2, bgcolor: 'primary.main', color: 'primary.contrastText', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="subtitle2" fontWeight={800}>Got a question?</Typography>
              <IconButton size="small" color="inherit" onClick={() => setOpen(false)}>
                <X size={18} />
              </IconButton>
            </Box>
            <Box component="form" onSubmit={handleSubmit} sx={{ p: 3 }}>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2, lineHeight: 1.5 }}>
                I usually reply within a few hours. What's on your mind?
              </Typography>
              <TextField
                fullWidth
                multiline
                rows={3}
                placeholder="Type your message..."
                variant="outlined"
                value={message}
                onChange={(e: any) => setMessage(e.target.value)}
                sx={{ mb: 2, '& .MuiOutlinedInput-root': { borderRadius: '12px' } }}
              />
              <Button type="submit" variant="primary" fullWidth endIcon={<Send size={16} />} sx={{ fontWeight: 700, borderRadius: '12px' }}>
                Send Message
              </Button>
            </Box>
          </Box>
        )}
      </AnimatePresence>

      <Box
        component={motion.div}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <IconButton
          onClick={() => setOpen(!open)}
          sx={{
            width: 64,
            height: 64,
            bgcolor: 'primary.main',
            color: 'primary.contrastText',
            boxShadow: '0 8px 32px rgba(99,102,241,0.4)',
            '&:hover': {
              bgcolor: 'primary.dark',
            }
          }}
        >
          {open ? <X size={28} /> : <MessageCircleQuestion size={28} />}
        </IconButton>
      </Box>
    </Box>
  );
}
