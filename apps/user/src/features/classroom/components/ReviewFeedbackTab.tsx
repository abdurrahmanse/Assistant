import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { Button } from '@repo/ui';
import { MessageSquareHeart } from 'lucide-react';

export function ReviewFeedbackTab() {
  return (
    <Box>
      <Typography variant="h6" fontWeight={800} mb={1}>How would you rate this course?</Typography>
      <Typography variant="body2" color="text.secondary" mb={3}>Your feedback helps us improve the learning experience.</Typography>
      
      <Box sx={{ p: 3, border: '1px solid', borderColor: 'divider', borderRadius: '16px', bgcolor: 'background.default' }}>
        <Typography variant="subtitle2" fontWeight={700} mb={1}>Course Rating</Typography>
        <Rating name="course-rating" defaultValue={0} size="large" sx={{ mb: 3 }} />
        
        <Typography variant="subtitle2" fontWeight={700} mb={1}>Written Feedback</Typography>
        <TextField 
          fullWidth 
          multiline 
          rows={4} 
          placeholder="Tell us what you thought about this course. What was great? What could be improved?" 
          variant="outlined" 
          sx={{ mb: 3, '& .MuiOutlinedInput-root': { borderRadius: '12px', bgcolor: 'background.paper' } }}
        />
        
        <Button variant="primary" startIcon={<MessageSquareHeart size={18} />}>
          Submit Feedback
        </Button>
      </Box>
    </Box>
  );
}

