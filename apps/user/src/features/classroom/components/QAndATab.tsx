import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { Button } from '@repo/ui';
import { MessageCircle, Search, ThumbsUp } from 'lucide-react';

export function QAndATab() {
  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={3}>
        <Box>
          <Typography variant="h6" fontWeight={800}>Q&A Discussions</Typography>
          <Typography variant="body2" color="text.secondary">142 questions in this course</Typography>
        </Box>
        <Button variant="primary" startIcon={<MessageCircle size={16} />}>Ask a Question</Button>
      </Stack>
      
      <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
        <TextField 
          fullWidth 
          placeholder="Search for questions..." 
          variant="outlined" 
          size="small"
          sx={{ '& .MuiOutlinedInput-root': { borderRadius: '12px', bgcolor: 'background.default' } }}
        />
        <Button variant="outline" sx={{ px: 3, borderRadius: '12px' }}><Search size={18} /></Button>
      </Box>
      
      <Stack spacing={3}>
        {[
          { name: 'Sarah Jenkins', avatar: 'https://i.pravatar.cc/150?u=sarah', question: 'How do I resolve the "useEffect" infinite loop in this example?', responses: 4, upvotes: 12, time: '2 hours ago' },
          { name: 'Mike Rodriguez', avatar: 'https://i.pravatar.cc/150?u=mike', question: 'Is the source code for this specific module available?', responses: 1, upvotes: 3, time: '1 day ago' },
        ].map((q, i) => (
          <Box key={i} sx={{ p: 3, border: '1px solid', borderColor: 'divider', borderRadius: '16px', bgcolor: 'background.default' }}>
            <Stack direction="row" spacing={2} mb={2}>
              <Avatar src={q.avatar} sx={{ width: 40, height: 40 }} />
              <Box>
                <Typography variant="subtitle2" fontWeight={800}>{q.name}</Typography>
                <Typography variant="caption" color="text.secondary">{q.time}</Typography>
              </Box>
            </Stack>
            <Typography variant="body1" fontWeight={600} mb={2}>{q.question}</Typography>
            
            <Stack direction="row" spacing={3} alignItems="center">
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'text.secondary', cursor: 'pointer', '&:hover': { color: 'primary.main' } }}>
                <ThumbsUp size={16} />
                <Typography variant="body2" fontWeight={700}>{q.upvotes}</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'text.secondary', cursor: 'pointer', '&:hover': { color: 'primary.main' } }}>
                <MessageCircle size={16} />
                <Typography variant="body2" fontWeight={700}>{q.responses} Responses</Typography>
              </Box>
            </Stack>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}

