import * as React from 'react';
import { toast } from 'sonner';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { CheckCircle2 } from 'lucide-react';

const mockEvents = [
  { name: 'Michael', action: 'just enrolled in', item: 'Full-Stack Mastery' },
  { name: 'Sarah', action: 'completed', item: 'Advanced React Patterns' },
  { name: 'David', action: 'just enrolled in', item: 'System Design Interview' },
  { name: 'Emma', action: 'left a 5-star review on', item: 'Node.js Backend Architecture' },
  { name: 'James', action: 'just enrolled in', item: 'Mastering TypeScript' },
];

export function SocialProof() {
  React.useEffect(() => {
    // Initial delay of 5 seconds, then every 45 seconds
    const timeout = setTimeout(() => {
      showRandomProof();
      
      const interval = setInterval(() => {
        showRandomProof();
      }, 45000);

      return () => clearInterval(interval);
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  const showRandomProof = () => {
    const event = mockEvents[Math.floor(Math.random() * mockEvents.length)];
    
    toast.custom((t) => (
      <Box sx={{ 
        display: 'flex', alignItems: 'center', gap: 2, 
        bgcolor: 'background.paper', p: 2, borderRadius: '16px',
        border: '1px solid', borderColor: 'divider',
        boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
      }}>
        <Box sx={{ bgcolor: 'success.main', color: 'success.contrastText', p: 1, borderRadius: '50%', display: 'flex' }}>
          <CheckCircle2 size={16} />
        </Box>
        <Box>
          <Typography variant="body2" sx={{ fontWeight: 600 }}>
            {event.name} <Box component="span" sx={{ color: 'text.secondary', fontWeight: 400 }}>{event.action}</Box>
          </Typography>
          <Typography variant="subtitle2" sx={{ color: 'primary.main', fontWeight: 700 }}>
            {event.item}
          </Typography>
        </Box>
      </Box>
    ), { duration: 5000, position: 'bottom-left' });
  };

  return null;
}
