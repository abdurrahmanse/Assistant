import { useContactQuery } from '@/features/landing/hooks/queries/useLandingQuery';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { Send, User, AtSign, MessageSquareText } from 'lucide-react';
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

  const { fields, submitLabel } = contact.form;

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Stack spacing={4}>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField label={fields.firstName} variant="standard" fullWidth value={form.firstName} onChange={onChange('firstName')} required slotProps={{ input: { startAdornment: <InputAdornment position="start"><User size={20} color="var(--template-palette-text-secondary)" /></InputAdornment> } }} />
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField label={fields.lastName} variant="standard" fullWidth value={form.lastName} onChange={onChange('lastName')} required slotProps={{ input: { startAdornment: <InputAdornment position="start"><User size={20} color="var(--template-palette-text-secondary)" /></InputAdornment> } }} />
          </Grid>
        </Grid>
        
        <TextField label={fields.email} type="email" variant="standard" fullWidth value={form.email} onChange={onChange('email')} required slotProps={{ input: { startAdornment: <InputAdornment position="start"><AtSign size={20} color="var(--template-palette-text-secondary)" /></InputAdornment> } }} />
        <TextField label={fields.message} variant="standard" multiline rows={4} fullWidth value={form.message} onChange={onChange('message')} required slotProps={{ input: { startAdornment: <InputAdornment position="start" sx={{ alignSelf: 'flex-start', mt: 1 }}><MessageSquareText size={20} color="var(--template-palette-text-secondary)" /></InputAdornment> } }} />

        {isSuccess && <Alert severity="success" sx={{ borderRadius: 2 }}>Message sent successfully.</Alert>}
        {isError && <Alert severity="error" sx={{ borderRadius: 2 }}>{(error as Error)?.message ?? 'Failed to send.'}</Alert>}

        <Box sx={{ pt: 2 }}>
          <Button
            type="submit"
            variant="contained"
            size="large"
            endIcon={<Send size={18} />}
            disabled={isPending}
            sx={{ fontWeight: 700, px: 6, py: 1.5, borderRadius: '30px', textTransform: 'none' }}
          >
            {isPending ? 'Sending...' : submitLabel}
          </Button>
        </Box>
      </Stack>
    </Box>
  );
}
