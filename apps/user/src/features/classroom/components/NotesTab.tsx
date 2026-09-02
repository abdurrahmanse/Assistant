import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { Button } from '@repo/ui';
import { Clock, MoreVertical, PlayCircle, Plus } from 'lucide-react';
import { useState } from 'react';
import type { Note } from '@/interfaces';

export function NotesTab() {
  const [notes, setNotes] = useState<Note[]>([
    { id: '1', timestamp: '01:24', text: 'This is a really important concept about component lifecycle.', date: 'Today' },
    { id: '2', timestamp: '04:15', text: 'Remember to check the official documentation for this API.', date: 'Today' },
  ]);
  const [newNote, setNewNote] = useState('');

  const handleAddNote = () => {
    if (!newNote.trim()) return;
    
    // In a real app, we would get the actual video timestamp from the player ref
    const mockTimestamp = '05:30'; 
    
    setNotes([
      ...notes, 
      { id: Date.now().toString(), timestamp: mockTimestamp, text: newNote, date: 'Just now' }
    ]);
    setNewNote('');
  };

  return (
    <Box sx={{ p: 1 }}>
      <Typography variant="h6" fontWeight={800} mb={3}>My Notes</Typography>
      
      <Box sx={{ bgcolor: 'background.paper', p: 3, borderRadius: '16px', border: '1px solid', borderColor: 'divider', mb: 4 }}>
        <TextField
          fullWidth
          multiline
          rows={3}
          placeholder="Type your note here... It will automatically attach to the current video timestamp."
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          variant="outlined"
          sx={{
            mb: 2,
            '& .MuiOutlinedInput-root': {
              borderRadius: '12px',
              bgcolor: 'background.default',
            }
          }}
        />
        <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" alignItems="center">
          <Typography variant="caption" color="text.secondary" sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <Clock size={14} /> Video paused at 05:30
          </Typography>
          <Button variant="primary" startIcon={<Plus size={16} />} onClick={handleAddNote}>
            Save Note
          </Button>
        </Stack>
      </Box>

      <Stack spacing={3}>
        {notes.map((note) => (
          <Box key={note.id} sx={{ p: 3, borderRadius: '16px', border: '1px solid', borderColor: 'divider', transition: 'all 0.2s', '&:hover': { borderColor: 'primary.main', bgcolor: 'primary.50' } }}>
            <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" alignItems="flex-start" mb={1}>
              <Box 
                sx={{ 
                  display: 'inline-flex', alignItems: 'center', gap: 1, 
                  bgcolor: 'primary.main', color: 'primary.contrastText', 
                  px: 1.5, py: 0.5, borderRadius: '8px', 
                  cursor: 'pointer', transition: 'opacity 0.2s', '&:hover': { opacity: 0.9 }
                }}
              >
                <PlayCircle size={14} />
                <Typography variant="caption" fontWeight={800}>{note.timestamp}</Typography>
              </Box>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Typography variant="caption" color="text.secondary">{note.date}</Typography>
                <IconButton size="small"><MoreVertical size={16} /></IconButton>
              </Stack>
            </Stack>
            <Typography variant="body1" sx={{ mt: 1.5, color: 'text.primary', lineHeight: 1.6 }}>
              {note.text}
            </Typography>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}

