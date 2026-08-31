import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export interface AboutTeamProps {
  heading: string;
  subheading: string;
  team: {
    name: string;
    avatar: string;
    role: string;
    courses: number;
    students: string;
  }[];
}

export function AboutTeam({ heading, subheading, team }: AboutTeamProps) {
  return (
    <>
      <Typography variant="h3" sx={{ fontWeight: 900, mb: 2, textAlign: 'center' }}>{heading}</Typography>
      <Typography color="text.secondary" sx={{ textAlign: 'center', mb: 6 }}>{subheading}</Typography>
      <Grid container spacing={3}>
        {team.map((member) => (
          <Grid size={{ xs: 12, sm: 6, md: 3 }} key={member.name}>
            <Box sx={{ p: 3, textAlign: 'center', borderRadius: '20px', bgcolor: 'background.paper', border: '1px solid', borderColor: 'divider' }}>
              <Avatar sx={{ width: 72, height: 72, mx: 'auto', mb: 2, bgcolor: 'primary.main', fontSize: '1.5rem', fontWeight: 900 }}>
                {member.avatar}
              </Avatar>
              <Typography variant="subtitle1" fontWeight={800}>{member.name}</Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>{member.role}</Typography>
              <Stack direction="row" justifyContent="center" spacing={3}>
                <Box>
                  <Typography variant="h6" fontWeight={900} color="primary.main">{member.courses}</Typography>
                  <Typography variant="caption" color="text.secondary">Courses</Typography>
                </Box>
                <Box>
                  <Typography variant="h6" fontWeight={900} color="primary.main">{member.students}</Typography>
                  <Typography variant="caption" color="text.secondary">Students</Typography>
                </Box>
              </Stack>
            </Box>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

