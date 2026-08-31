import { Link, useLocation } from 'react-router';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import Skeleton from '@mui/material/Skeleton';
import { Home, LineChart, Users, ClipboardList, Settings, Info, HelpCircle } from 'lucide-react';
import { useLayoutQuery } from '@/features/layout/hooks/queries/useLayoutQuery';

const iconMap: Record<string, React.ReactNode> = {
  Users: <Users size={20} />,
  Home: <Home size={20} />,
  LineChart: <LineChart size={20} />,
  ClipboardList: <ClipboardList size={20} />,
  Settings: <Settings size={20} />,
  Info: <Info size={20} />,
  HelpCircle: <HelpCircle size={20} />
};

export default function MenuContent() {
  const { data, isLoading } = useLayoutQuery();
  const location = useLocation();

  if (isLoading || !data) {
    return (
      <Stack spacing={1} sx={{ p: 2 }}>
        <Skeleton variant="rectangular" height={40} />
        <Skeleton variant="rectangular" height={40} />
        <Skeleton variant="rectangular" height={40} />
      </Stack>
    );
  }

  const { sidebar } = data;

  return (
    <Stack sx={{ flexGrow: 1, p: 1, justifyContent: 'space-between' }}>
      <List dense>
        {sidebar.mainMenu.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: 'block' }}>
            <ListItemButton component={Link} to={item.path || '/'} selected={location.pathname === item.path || (location.pathname === '/' && index === 0)}>
              <ListItemIcon sx={{ color: 'inherit' }}>{iconMap[item.icon]}</ListItemIcon>
              <ListItemText primary={item.text} primaryTypographyProps={{ fontWeight: 600 }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <List dense>
        {sidebar.secondaryMenu.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: 'block' }}>
            <ListItemButton component={Link} to={item.path || '/'}>
              <ListItemIcon sx={{ color: 'inherit' }}>{iconMap[item.icon]}</ListItemIcon>
              <ListItemText primary={item.text} primaryTypographyProps={{ fontWeight: 600 }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Stack>
  );
}
