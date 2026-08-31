import { useContactQuery } from '@/features/landing/hooks/queries/useLandingQuery';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { BookOpen, Briefcase, Clock, Mail, MessageCircle, Phone } from 'lucide-react';
import React from 'react';

type ContactData = NonNullable<ReturnType<typeof useContactQuery>['data']>;

const iconMap: Record<string, React.ReactNode> = {
  Mail: <Mail size={22} />,
  Phone: <Phone size={22} />,
  Clock: <Clock size={22} />,
  MessageCircle: <MessageCircle size={20} />,
  BookOpen: <BookOpen size={20} />,
  Briefcase: <Briefcase size={20} />,
};

type ContactInfoProps = {
  contact: ContactData;
};

export default function ContactInfo({ contact }: ContactInfoProps) {
  return (
    <>
      <Stack spacing={4} sx={{ mb: 5 }}>
        {contact.contactInfo.map((item) => (
          <Stack key={item.label} direction="row" spacing={3} alignItems="flex-start">
            <Box sx={{ p: 1.5, borderRadius: '14px', bgcolor: 'primary.main', color: 'primary.contrastText', flexShrink: 0 }}>
              {iconMap[item.icon]}
            </Box>
            <Box>
              <Typography variant="subtitle2" fontWeight={800}>{item.label}</Typography>
              <Typography variant="body2" fontWeight={600}>{item.value}</Typography>
              <Typography variant="caption" color="text.secondary">{item.note}</Typography>
            </Box>
          </Stack>
        ))}
      </Stack>

      <Typography variant="h6" fontWeight={800} sx={{ mb: 3 }}>{contact.reasonsHeading}</Typography>
      <Stack spacing={2}>
        {contact.reasons.map((r) => (
          <Stack key={r.title} direction="row" spacing={2} alignItems="flex-start"
            sx={{ p: 2.5, borderRadius: '14px', bgcolor: 'background.paper', border: '1px solid', borderColor: 'divider' }}>
            <Box sx={{ color: 'primary.main', flexShrink: 0, mt: 0.3 }}>{iconMap[r.icon]}</Box>
            <Box>
              <Typography variant="subtitle2" fontWeight={700}>{r.title}</Typography>
              <Typography variant="caption" color="text.secondary">{r.desc}</Typography>
            </Box>
          </Stack>
        ))}
      </Stack>
    </>
  );
}

