import { useContactQuery } from '@/features/landing/hooks/queries/useLandingQuery';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Skeleton } from '@repo/ui';
import { Clock, Mail, Phone } from 'lucide-react';
import React from 'react';

type ContactData = NonNullable<ReturnType<typeof useContactQuery>['data']>;

const iconMap: Record<string, React.ReactNode> = {
  Mail: <Mail size={24} strokeWidth={1.5} />,
  Phone: <Phone size={24} strokeWidth={1.5} />,
  Clock: <Clock size={24} strokeWidth={1.5} />,
};

type ContactInfoProps = {
  contact?: ContactData;
  isLoading?: boolean;
};

export default function ContactInfo({ contact, isLoading }: ContactInfoProps) {
  if (isLoading || !contact) {
    return <Skeleton variant="rectangular" height={300} sx={{ borderRadius: 2 }} />;
  }

  // We only take the first 3 primary contact methods to keep it minimal
  return (
    <Stack spacing={6} sx={{ mt: 2 }}>
      {contact.contactInfo.slice(0, 3).map((item) => (
        <Stack key={item.label} direction="row" spacing={3} alignItems="center">
          <Box sx={(theme) => ({ 
            width: 64, height: 64, borderRadius: '16px', 
            bgcolor: 'rgba(255,255,255,0.6)', backdropFilter: 'blur(16px)',
            border: '2px solid', borderColor: 'rgba(0,0,0,0.1)',
            ...theme.applyStyles('dark', { bgcolor: 'rgba(20,20,25,0.6)', borderColor: 'rgba(255,255,255,0.1)' }),
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'primary.main', boxShadow: '4px 4px 0px rgba(99,102,241,1)',
            transform: 'rotate(-2deg)', transition: 'transform 0.2s', '&:hover': { transform: 'rotate(0deg)' }
          })}>
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
