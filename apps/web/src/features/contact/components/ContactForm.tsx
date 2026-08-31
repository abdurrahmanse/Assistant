import { useContactQuery } from '@/features/landing/hooks/queries/useLandingQuery';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { Send } from 'lucide-react';
import React, { useState } from 'react';

type ContactData = NonNullable<ReturnType<typeof useContactQuery>['data']>;

type ContactFormProps = {
  contact: ContactData;
  submit: (form: { firstName: string; lastName: string; email: string; subject: string; message: string }) => void;
  isPending: boolean;
  isSuccess: boolean;
  isError: boolean;
  error: unknown;
};

export default function ContactForm({
  contact,
  submit,
  isPending,
  isSuccess,
  isError,
  error,
}: ContactFormProps) {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', subject: '', message: '' });

  const onChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submit(form);
  };

  const { fields, heading, submitLabel, privacy } = contact.form;

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        p: { xs: 3, sm: 5 },
        borderRadius: '24px',
        bgcolor: 'background.paper',
        border: '1px solid',
        borderColor: 'divider',
        boxShadow: (theme) =>
          theme.palette.mode === 'dark'
            ? '0 20px 60px rgba(0,0,0,0.5)'
            : '0 20px 60px rgba(0,0,0,0.06)',
      }}
    >
      <Typography variant="h5" fontWeight={800} sx={{ mb: 4 }}>{heading}</Typography>
      <Stack spacing={3}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField label={fields.firstName} variant="outlined" fullWidth value={form.firstName} onChange={onChange('firstName')} required />
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField label={fields.lastName} variant="outlined" fullWidth value={form.lastName} onChange={onChange('lastName')} required />
          </Grid>
        </Grid>
        <TextField label={fields.email} type="email" variant="outlined" fullWidth value={form.email} onChange={onChange('email')} required />
        <TextField label={fields.subject} variant="outlined" fullWidth value={form.subject} onChange={onChange('subject')} placeholder={fields.subjectPlaceholder} />
        <TextField label={fields.message} variant="outlined" multiline rows={5} fullWidth value={form.message} onChange={onChange('message')} required />

        {isSuccess && <Alert severity="success">Message sent! We'll be in touch within 24 hours.</Alert>}
        {isError && <Alert severity="error">{(error as Error)?.message ?? 'Something went wrong. Please try again.'}</Alert>}

        <Button
          type="submit"
          variant="contained"
          size="large"
          endIcon={<Send size={18} />}
          disabled={isPending}
          sx={{ fontWeight: 800, py: 1.75, borderRadius: '12px', textTransform: 'none' }}
        >
          {isPending ? 'Sending…' : submitLabel}
        </Button>
        <Typography variant="caption" color="text.secondary" textAlign="center">
          {privacy}
        </Typography>
      </Stack>
    </Box>
  );
}

