import { mockRankings } from '@/data/mock';
import StudentLayout from '@/layouts/StudentLayout';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Trophy } from 'lucide-react';

export default function RankingsPage() {
  return (
    <StudentLayout>
      <Box sx={{ bgcolor: 'background.paper', borderBottom: '1px solid', borderColor: 'divider', pt: 8, pb: 6 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" fontWeight={900} sx={{ letterSpacing: '-0.02em', mb: 2 }}>
            Rankings
          </Typography>
          <Typography variant="h6" color="text.secondary" fontWeight={500}>
            Global leaderboard for top performing students.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box sx={(theme) => ({
          borderRadius: '24px', 
          border: '2px solid', borderColor: 'rgba(0,0,0,0.1)',
          bgcolor: 'rgba(255,255,255,0.6)',
          ...theme.applyStyles('dark', { borderColor: 'rgba(255,255,255,0.1)', bgcolor: 'rgba(20,20,25,0.6)' }),
          backdropFilter: 'blur(24px)',
          overflow: 'hidden'
        })}>
          {mockRankings.map((student, index) => (
            <Box key={student.rank} sx={{ 
              display: 'flex', alignItems: 'center', p: 3, 
              borderBottom: index < mockRankings.length - 1 ? '1px solid' : 'none', 
              borderColor: 'divider',
              bgcolor: student.isCurrentUser ? 'rgba(99,102,241,0.1)' : 'transparent',
              transition: 'background-color 0.2s',
              '&:hover': { bgcolor: 'rgba(99,102,241,0.05)' }
            }}>
              <Box sx={{ width: 48, display: 'flex', justifyContent: 'center' }}>
                {student.rank === 1 ? <Trophy size={28} style={{ color: '#f59e0b' }} /> :
                 student.rank === 2 ? <Trophy size={24} style={{ color: '#94a3b8' }} /> :
                 student.rank === 3 ? <Trophy size={20} style={{ color: '#b45309' }} /> :
                 <Typography variant="h6" fontWeight={900} color="text.secondary">#{student.rank}</Typography>
                }
              </Box>
              
              <Avatar src={student.avatar} sx={{ width: 48, height: 48, mx: 3 }} />
              
              <Box sx={{ flexGrow: 1 }}>
                <Typography variant="subtitle1" fontWeight={800} color={student.isCurrentUser ? 'primary.main' : 'text.primary'}>
                  {student.name} {student.isCurrentUser && '(You)'}
                </Typography>
              </Box>
              
              <Typography variant="h6" fontWeight={900} color="primary.main">
                {student.points} <Box component="span" sx={{ fontSize: '0.75rem', color: 'text.secondary', fontWeight: 600 }}>pts</Box>
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </StudentLayout>
  );
}

