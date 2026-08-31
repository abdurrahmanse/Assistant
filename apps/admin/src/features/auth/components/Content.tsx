import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Settings, Wrench, ThumbsUp, Wand2 } from 'lucide-react';
import Skeleton from '@mui/material/Skeleton';
import AssistantLogo from '@/components/AssistantLogo';
import { useAuthQuery } from '../hooks/queries/useAuthQuery';

const iconMap: Record<string, React.ReactNode> = {
  Settings: <Settings size={20} color="gray" />,
  Construction: <Wrench size={20} color="gray" />,
  ThumbUpAlt: <ThumbsUp size={20} color="gray" />,
  AutoFixHigh: <Wand2 size={20} color="gray" />,
};

export default function Content() {
  const { data, isLoading } = useAuthQuery();

  if (isLoading || !data) {
    return (
      <Stack sx={{ flexDirection: 'column', alignSelf: 'center', gap: 4, maxWidth: 450 }}>
        <Skeleton variant="rectangular" width="100%" height={300} />
      </Stack>
    );
  }

  return (
    <Stack
      sx={{ flexDirection: 'column', alignSelf: 'center', gap: 4, maxWidth: 450 }}
    >
      <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
        <AssistantLogo />
      </Box>
      {data.content.items.map((item, index) => (
        <Stack key={index} direction="row" sx={{ gap: 2 }}>
          {iconMap[item.icon] || <Settings size={20} color="gray" />}
          <div>
            <Typography gutterBottom sx={{ fontWeight: 600 }}>
              {item.title}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {item.description}
            </Typography>
          </div>
        </Stack>
      ))}
    </Stack>
  );
}
