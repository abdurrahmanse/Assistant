import { useContactQuery } from '@/features/landing/hooks/queries/useLandingQuery';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Clock, Mail, Phone } from 'lucide-react';
import React from 'react';

type ContactData = NonNullable<ReturnType<typeof useContactQuery>['data']>;

const iconMap: Record<string, React.ReactNode> = {
  Mail: <Mail size={24} strokeWidth={1.5} />,
  Phone: <Phone size={24} strokeWidth={1.5} />,
  Clock: <Clock size={24} strokeWidth={1.5} />,
};

type ContactInfoProps = {
  contact: ContactData;
};

export default function ContactInfo({ contact }: ContactInfoProps) {
  // We only take the first 3 primary contact methods to keep it minimal
  return (
    <Stack spacing={6} sx={{ mt: 2 }}>
      {contact.contactInfo.slice(0, 3).map((item) => (
        <Stack key={item.label} direction="row" spacing={3} alignItems="center">
          <Box sx={{ 
            width: 56, height: 56, borderRadius: '50%', 
            bgcolor: 'background.paper', border: '1px solid', borderColor: 'divider',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'text.secondary'
          }}>
            {iconMap[item.icon] || <Mail size={24} strokeWidth={1.5} />}
          </Box>
          <Box>
            <Typography variant="subtitle1" fontWeight={700} color="text.primary">{item.label}</Typography>
            <Typography variant="body1" color="text.secondary">{item.value}</Typography>
          </Box>
        </Stack>
      ))}
    </Stack>
  );
}
