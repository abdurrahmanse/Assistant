import { useState, useEffect, useMemo } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import InputBase from '@mui/material/InputBase';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { Search, Settings, CreditCard, BookOpen, User, PlayCircle } from 'lucide-react';
import { useNavigate } from 'react-router';

const ACTIONS = [
  { id: 'courses', label: 'Browse Courses', icon: <BookOpen size={18} />, path: '/courses' },
  { id: 'learning', label: 'My Learning', icon: <PlayCircle size={18} />, path: '/home' },
  { id: 'billing', label: 'Billing & Membership', icon: <CreditCard size={18} />, path: '/billing' },
  { id: 'settings', label: 'Account Settings', icon: <Settings size={18} />, path: '/settings' },
  { id: 'profile', label: 'My Profile', icon: <User size={18} />, path: '/profile' }
];

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
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
    setSearch('');
    navigate(path);
  };

  const filteredActions = useMemo(() => {
    if (!search.trim()) return ACTIONS;
    const lowerSearch = search.toLowerCase();
    return ACTIONS.filter(action => action.label.toLowerCase().includes(lowerSearch));
  }, [search]);

  return (
    <Modal open={open} onClose={() => { setOpen(false); setSearch(''); }} sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center', pt: '10vh' }}>
      <Box 
        role="dialog" 
        aria-modal="true" 
        aria-labelledby="command-palette-title"
        sx={{ 
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
            inputProps={{ "aria-label": "Search command palette", "aria-controls": "command-palette-listbox" }} 
            placeholder="Search or jump to..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            sx={{ ml: 2, flex: 1, fontSize: '1.1rem' }} 
          />
          <Typography variant="caption" sx={{ bgcolor: 'action.hover', px: 1, py: 0.5, borderRadius: '4px' }}>ESC</Typography>
        </Box>
        
        <Box sx={{ p: 2, maxHeight: 400, overflow: 'auto' }}>
          <Typography variant="caption" fontWeight={700} color="text.secondary" sx={{ mb: 1, display: 'block', px: 1 }}>
            <span id="command-palette-title">{search.trim() ? 'SEARCH RESULTS' : 'SUGGESTIONS'}</span>
          </Typography>
          
          {filteredActions.length > 0 ? (
            <Stack spacing={0.5} role="listbox">
              {filteredActions.map(action => (
                <PaletteItem 
                  key={action.id} 
                  icon={action.icon} 
                  label={action.label} 
                  onClick={() => handleNavigate(action.path)} 
                />
              ))}
            </Stack>
          ) : (
            <Box sx={{ py: 4, textAlign: 'center' }}>
              <Typography variant="body2" color="text.secondary">No results found for "{search}"</Typography>
            </Box>
          )}
        </Box>
      </Box>
    </Modal>
  );
}

function PaletteItem({ icon, label, onClick }: { icon: React.ReactNode; label: string; onClick: () => void }) {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick();
    }
  };
  return (
    <Box 
      role="option"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={handleKeyDown}
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
