import { useContactQuery } from '@/features/landing/hooks/queries/useLandingQuery';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import InputAdornment from '@mui/material/InputAdornment';
import Stack from '@mui/material/Stack';
import { Button, Skeleton, TextInput as TextField } from '@repo/ui';
import { AtSign, MessageSquareText, Send, User } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { toast } from 'sonner';

type ContactData = NonNullable<ReturnType<typeof useContactQuery>['data']>;

type ContactFormProps = {
  contact: ContactData;
  submit: (form: { firstName: string; lastName: string; email: string; subject: string; message: string }) => void;
  isPending: boolean;
  isSuccess: boolean;
  isError: boolean;
  error: unknown;
  isLoading?: boolean;
};

export default function ContactForm({
  contact,
  submit,
  isPending,
  isSuccess,
  isError,
  error,
  isLoading,
}: ContactFormProps) {
  if (isLoading || !contact) {
    return (
      <Stack spacing={4}>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, sm: 6 }}><Skeleton variant="rectangular" height={56} sx={{ borderRadius: 1 }} /></Grid>
          <Grid size={{ xs: 12, sm: 6 }}><Skeleton variant="rectangular" height={56} sx={{ borderRadius: 1 }} /></Grid>
        </Grid>
        <Skeleton variant="rectangular" height={56} sx={{ borderRadius: 1 }} />
        <Skeleton variant="rectangular" height={130} sx={{ borderRadius: 1 }} />
        <Box sx={{ pt: 2 }}><Skeleton variant="rectangular" width={160} height={48} sx={{ borderRadius: '30px' }} /></Box>
      </Stack>
    );
  }

  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', subject: '', message: '' });

  const onChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submit(form);
  };

  const { fields, submitLabel } = contact.form;

  useEffect(() => {
    if (isSuccess) {
      toast.success('Message sent successfully.');
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setForm({ firstName: '', lastName: '', email: '', subject: '', message: '' });
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      toast.error((error as Error)?.message ?? 'Failed to send.');
    }
  }, [isError, error]);

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

        

        <Box sx={{ pt: 2 }}>
          <Button
            type="submit"
            variant="primary"
            size="small"
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
