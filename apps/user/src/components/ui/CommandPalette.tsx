import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import InputBase from '@mui/material/InputBase';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { Search, Settings, CreditCard, BookOpen, User, PlayCircle } from 'lucide-react';
import { useNavigate } from 'react-router';

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleNavigate = (path: string) => {
    setOpen(false);
    navigate(path);
  };

  return (
    <Modal open={open} onClose={() => setOpen(false)} sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center', pt: '10vh' }}>
      <Box sx={{ 
        width: '100%', 
        maxWidth: 600, 
        bgcolor: 'background.paper', 
        borderRadius: '16px', 
        boxShadow: '0 24px 48px rgba(0,0,0,0.2), 0 0 0 1px rgba(255,255,255,0.1)',
        overflow: 'hidden',
        outline: 'none',
        mx: 2
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center', px: 3, py: 2, borderBottom: '1px solid', borderColor: 'divider' }}>
          <Search size={20} color="gray" />
          <InputBase 
            autoFocus 
            placeholder="Search or jump to..." 
            sx={{ ml: 2, flex: 1, fontSize: '1.1rem' }} 
          />
          <Typography variant="caption" sx={{ bgcolor: 'action.hover', px: 1, py: 0.5, borderRadius: '4px' }}>ESC</Typography>
        </Box>
        
        <Box sx={{ p: 2, maxHeight: 400, overflow: 'auto' }}>
          <Typography variant="caption" fontWeight={700} color="text.secondary" sx={{ mb: 1, display: 'block', px: 1 }}>SUGGESTIONS</Typography>
          <Stack spacing={0.5}>
            <PaletteItem icon={<BookOpen size={18} />} label="Browse Courses" onClick={() => handleNavigate('/courses')} />
            <PaletteItem icon={<PlayCircle size={18} />} label="My Learning" onClick={() => handleNavigate('/home')} />
            <PaletteItem icon={<CreditCard size={18} />} label="Billing & Membership" onClick={() => handleNavigate('/billing')} />
            <PaletteItem icon={<Settings size={18} />} label="Account Settings" onClick={() => handleNavigate('/settings')} />
            <PaletteItem icon={<User size={18} />} label="My Profile" onClick={() => handleNavigate('/profile')} />
          </Stack>
        </Box>
      </Box>
    </Modal>
  );
}

function PaletteItem({ icon, label, onClick }: { icon: React.ReactNode; label: string; onClick: () => void }) {
  return (
    <Box 
      onClick={onClick}
      sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        p: 1.5, 
        borderRadius: '8px',
        cursor: 'pointer',
        transition: 'all 0.2s',
        '&:hover': { bgcolor: 'action.hover' }
      }}
    >
      <Box sx={{ color: 'text.secondary', mr: 2, display: 'flex' }}>{icon}</Box>
      <Typography variant="body2" fontWeight={500}>{label}</Typography>
    </Box>
  );
}
