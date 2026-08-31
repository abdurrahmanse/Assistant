import * as React from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Button } from '@repo/ui';
import { useCheckoutQuery } from '../hooks/queries/useCheckoutQuery';
import Skeleton from '@mui/material/Skeleton';

export function OrderSuccess() {
  const { data, isLoading } = useCheckoutQuery();

  if (isLoading || !data) return <Skeleton variant="rectangular" height={300} />;

  const { ui: { orderSuccess } } = data;

  return (
    <Stack spacing={2} useFlexGap>
      <Typography variant="h1">{/* Emoji rendering */}📦</Typography>
      <Typography variant="h5">{orderSuccess.title}</Typography>
      <Typography variant="body1" sx={{ color: 'text.secondary' }}>
        {orderSuccess.message}
      </Typography>
      <Button
        variant="primary"
        sx={{
          alignSelf: 'start',
          width: { xs: '100%', sm: 'auto' },
        }}
      >
        {orderSuccess.buttonText}
      </Button>
    </Stack>
  );
}
