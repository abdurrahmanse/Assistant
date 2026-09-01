import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Button, Card } from '@repo/ui';
import { Upload } from 'lucide-react';
import type { UserProfile } from '@/interfaces';

export function SettingsAvatarCard({ user }: { user: UserProfile }) {
  return (
    <Card sx={{ 
      p: 4, borderRadius: '24px', display: 'flex', alignItems: 'center', gap: 4, 
      boxShadow: '4px 4px 0px rgba(0,0,0,0.1)', border: '2px solid', borderColor: 'divider', 
      '&:hover': { transform: 'translateY(-2px)', boxShadow: '6px 6px 0px rgba(0,0,0,0.1)' }, transition: 'all 0.2s ease' 
    }}>
      <Avatar src={user.avatar} sx={{ width: 100, height: 100 }} />
      <Box>
        <Typography variant="h6" fontWeight={800} mb={1}>Profile Picture</Typography>
        <Typography variant="body2" color="text.secondary" mb={3}>JPG, GIF or PNG. Max size of 2MB.</Typography>
        <Stack direction="row" spacing={2}>
          <Button variant="outline" startIcon={<Upload size={16} />} sx={{ borderRadius: '8px', textTransform: 'none', fontWeight: 600 }}>
            Upload New
          </Button>
          <Button variant="ghost" color="error" sx={{ borderRadius: '8px', textTransform: 'none', fontWeight: 600 }}>
            Remove
          </Button>
        </Stack>
      </Box>
    </Card>
  );
}
