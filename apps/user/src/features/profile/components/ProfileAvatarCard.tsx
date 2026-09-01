import type { UserProfile } from '@/interfaces';

import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import { Button, Card, CardContent, Heading, Text } from '@repo/ui';
import { Camera, CheckCircle2 } from 'lucide-react';
import { styles } from '../../../pages/ProfilePage.styles';

export function ProfileAvatarCard({ user }: { user: UserProfile }) {
  return (
    <Card glass hoverable sx={{ overflow: 'hidden' }}>
      <Box sx={styles.banner} />
      <CardContent sx={styles.cardContent}>
        <Box sx={styles.avatarWrapper}>
          <Avatar src={user.avatar} sx={styles.avatar} />
          <Box sx={styles.cameraButton}>
            <Camera size={14} />
          </Box>
        </Box>
        
        <Heading level={4} sx={{ mb: 0.5 }}>{user.name}</Heading>
        <Text muted sx={{ mb: 2 }}>Student</Text>
        
        <Box sx={styles.verifiedBadge}>
          <CheckCircle2 size={16} />
          <Text variant="caption" bold sx={{ color: 'inherit' }}>Verified Account</Text>
        </Box>
        
        <Button variant="outline" fullWidth>View Public Profile</Button>
      </CardContent>
    </Card>
  );
}
