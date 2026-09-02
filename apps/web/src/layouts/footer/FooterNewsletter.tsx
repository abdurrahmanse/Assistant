import * as React from 'react';
import Box from '@mui/material/Box';
import { Button } from '@repo/ui';
import InputLabel from '@mui/material/InputLabel';
import Stack from '@mui/material/Stack';
import { TextInput as TextField } from '@repo/ui';
import InputAdornment from '@mui/material/InputAdornment';
import Typography from '@mui/material/Typography';
import { Skeleton } from '@repo/ui';
import Alert from '@mui/material/Alert';
import { Mail, Send } from 'lucide-react';
import AssistantLogo from '@/components/AssistantLogo';
import { VisuallyHidden } from '@repo/ui/styled';
import { useFooterQuery } from '@/features/landing/hooks/queries/useLandingQuery';
import { useNewsletterMutation } from '@/features/landing/hooks/mutations/useLandingMutation';

export function FooterNewsletter() {
  const [email, setEmail] = React.useState('');
  const { data: footer, isLoading } = useFooterQuery();
  const { mutate: subscribe, isPending, isSuccess, isError, error } = useNewsletterMutation();

  const newsletter = footer?.newsletter;

  const handleSubscribe = () => {
    if (email.trim()) subscribe(email.trim());
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, minWidth: { xs: '100%', sm: '60%' } }}>
      <Box sx={{ width: { xs: '100%', sm: '60%' } }}>
        <AssistantLogo />
        {isLoading ? (
          <>
            <Skeleton width={160} height={22} sx={{ mt: 2 }} />
            <Skeleton width={220} height={18} sx={{ mt: 1, mb: 2 }} />
          </>
        ) : (
          <>
            <Typography variant="body2" gutterBottom sx={{ fontWeight: 600, mt: 2 }}>
              {newsletter?.heading}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
              {newsletter?.subheading}
            </Typography>
          </>
        )}
        <InputLabel htmlFor="email-newsletter">
          <VisuallyHidden>Email</VisuallyHidden>
        </InputLabel>
        <Stack direction="row" spacing={1} useFlexGap>
          <TextField
            id="email-newsletter"
            InputProps={{ startAdornment: <InputAdornment position="start"><Mail size={18} /></InputAdornment> }}
            hiddenLabel
            size="small"
            variant="standard"
            fullWidth
            value={email}
            onChange={(e: any) => setEmail(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSubscribe()}
            aria-label={newsletter?.emailPlaceholder ?? 'Email address'}
            placeholder={newsletter?.emailPlaceholder ?? 'Your email address'}
            slotProps={{ htmlInput: { autoComplete: 'off', 'aria-label': newsletter?.emailPlaceholder } }}
            sx={{ width: '250px' }}
          />
          <Button
            variant="primary"
            color="primary"
            size="small"
            sx={{ flexShrink: 0 }}
            startIcon={<Send size={18} />}
            onClick={handleSubscribe}
            disabled={isPending}
          >
            {newsletter?.ctaLabel ?? 'Subscribe'}
          </Button>
        </Stack>
        {isSuccess && <Alert severity="success" sx={{ mt: 1.5, py: 0.5 }}>You're subscribed!</Alert>}
        {isError && <Alert severity="error" sx={{ mt: 1.5, py: 0.5 }}>{(error as Error)?.message}</Alert>}
      </Box>
    </Box>
  );
}
