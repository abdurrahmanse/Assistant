import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { Card, CardContent, Heading, Text } from '@repo/ui';
import { styles } from '../../../pages/ProfilePage.styles';

export function ProfileStatsCard() {
  return (
    <Card glass hoverable>
      <CardContent>
        <Heading level={5} sx={{ mb: 3 }}>Completion Stats</Heading>
        <Stack spacing={2}>
          <Box sx={styles.statsRow}>
            <Text muted>Courses Enrolled</Text>
            <Heading level={6}>4</Heading>
          </Box>
          <Box sx={styles.statsRow}>
            <Text muted>Courses Completed</Text>
            <Heading level={6}>1</Heading>
          </Box>
          <Box sx={styles.statsRow}>
            <Text muted>Certificates Earned</Text>
            <Heading level={6}>1</Heading>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
}
