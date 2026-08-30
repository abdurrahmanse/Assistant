import { Link } from 'react-router';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import { Home, LineChart, Users, ClipboardList, Settings, Info, HelpCircle } from 'lucide-react';

const mainListItems = [
  { text: 'Employees', icon: <Users size={20} />, path: '/employees' },
  { text: 'Home', icon: <Home size={20} />, path: '/' },
  { text: 'Analytics', icon: <LineChart size={20} />, path: '/' },
  { text: 'Tasks', icon: <ClipboardList size={20} />, path: '/' },
];

const secondaryListItems = [
  { text: 'Settings', icon: <Settings size={20} /> },
  { text: 'About', icon: <Info size={20} /> },
  { text: 'Feedback', icon: <HelpCircle size={20} /> },
];

export default function MenuContent() {
  return (
    <Stack sx={{ flexGrow: 1, p: 1, justifyContent: 'space-between' }}>
      <List dense>
        {mainListItems.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: 'block' }}>
            <ListItemButton component={Link} to={item.path || '/'} selected={index === 0}>
              <ListItemIcon sx={{ color: 'inherit' }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} primaryTypographyProps={{ fontWeight: 600 }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <List dense>
        {secondaryListItems.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: 'block' }}>
            <ListItemButton component={Link} to='/'>
              <ListItemIcon sx={{ color: 'inherit' }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} primaryTypographyProps={{ fontWeight: 600 }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Stack>
  );
}
