import { mockRankings } from '@/data/mock';
import StudentLayout from '@/layouts/StudentLayout';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Network, Activity } from 'lucide-react';
import { brand } from '@repo/ui/shared-theme/themePrimitives';
import { alpha } from '@mui/material/styles';

export default function RankingsPage() {
  return (
    <StudentLayout>
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
        <Box sx={{ mb: 6, display: 'flex', alignItems: 'center', gap: 2 }}>
          <Box sx={{ 
            p: 2, bgcolor: alpha(brand[500], 0.1), color: brand[500], 
            borderRadius: '16px', border: `1px solid ${alpha(brand[500], 0.2)}`,
            boxShadow: `0 8px 24px ${alpha(brand[500], 0.15)}` 
          }}>
            <Network size={32} />
          </Box>
          <Box>
            <Typography variant="h3" fontWeight={700} sx={{ letterSpacing: '-0.02em', mb: 0.5 }}>
              Global Peer Distribution
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Benchmark your execution metrics against the top cohort models.
            </Typography>
          </Box>
        </Box>
        <Box sx={(theme) => ({
          borderRadius: '16px', 
          border: '1px solid', borderColor: alpha(theme.palette.divider, 0.5),
          bgcolor: 'background.paper',
          ...theme.applyStyles('dark', { borderColor: alpha(theme.palette.divider, 0.2), bgcolor: '#0b0f19' }),
          overflow: 'hidden',
          boxShadow: `0 4px 20px rgba(0,0,0,0.02)`
        })}>
          {mockRankings.map((student, index) => (
            <Box key={student.rank} sx={{ 
              display: 'flex', alignItems: 'center', p: 3, 
              borderBottom: index < mockRankings.length - 1 ? '1px solid' : 'none', 
              borderColor: 'divider',
              bgcolor: student.isCurrentUser ? alpha(brand[500], 0.08) : 'transparent',
              transition: 'background-color 0.2s',
              '&:hover': { bgcolor: student.isCurrentUser ? alpha(brand[500], 0.12) : alpha(brand[500], 0.04) }
            }}>
              <Box sx={{ width: 48, display: 'flex', justifyContent: 'center' }}>
                {student.rank === 1 ? <Activity size={28} color={brand[400]} style={{ filter: `drop-shadow(0 0 8px ${brand[500]})` }} /> :
                 student.rank === 2 ? <Activity size={24} color={brand[600]} /> :
                 student.rank === 3 ? <Activity size={20} color={brand[800]} /> :
                 <Typography variant="h6" fontWeight={700} color="text.secondary">#{student.rank}</Typography>
                }
              </Box>
              
              <Avatar src={student.avatar} sx={{ width: 48, height: 48, mx: 3, border: student.isCurrentUser ? `2px solid ${brand[500]}` : 'none' }} />
              
              <Box sx={{ flexGrow: 1 }}>
                <Typography variant="subtitle1" fontWeight={student.isCurrentUser ? 700 : 600} color={student.isCurrentUser ? brand[500] : 'text.primary'}>
                  {student.name} {student.isCurrentUser && '(Active Node)'}
                </Typography>
              </Box>
              
              <Typography variant="h6" fontWeight={700} color={brand[500]}>
                {student.points} <Box component="span" sx={{ fontSize: '0.75rem', color: 'text.secondary', fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1 }}>units</Box>
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </StudentLayout>
  );
}
