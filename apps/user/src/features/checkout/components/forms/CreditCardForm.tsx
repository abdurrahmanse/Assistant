import * as React from 'react';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { CreditCard, Cpu, Lock, User, Calendar } from "lucide-react";

const PaymentContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  width: '100%',
  height: 375,
  padding: theme.spacing(3),
  borderRadius: `calc(${theme.shape.borderRadius}px + 4px)`,
  border: '1px solid ',
  borderColor: (theme.vars || theme).palette.divider,
  background:
    'linear-gradient(to bottom right, hsla(220, 35%, 97%, 0.3) 25%, hsla(220, 20%, 88%, 0.3) 100%)',
  boxShadow: '0px 4px 8px hsla(210, 0%, 0%, 0.05)',
  [theme.breakpoints.up('xs')]: {
    height: 300,
  },
  [theme.breakpoints.up('sm')]: {
    height: 350,
  },
  ...theme.applyStyles('dark', {
    background:
      'linear-gradient(to right bottom, hsla(220, 30%, 6%, 0.2) 25%, hsla(220, 20%, 25%, 0.2) 100%)',
    boxShadow: '0px 4px 8px hsl(220, 35%, 0%)',
  }),
}));

const FormGrid = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
}));

export function CreditCardForm() {
  const [cardNumber, setCardNumber] = React.useState('');
  const [cvv, setCvv] = React.useState('');
  const [expirationDate, setExpirationDate] = React.useState('');

  const handleCardNumberChange = (event: { target: { value: string } }) => {
    const value = event.target.value.replace(/\D/g, '');
    const formattedValue = value.replace(/(\d{4})(?=\d)/g, '$1 ');
    if (value.length <= 16) {
      setCardNumber(formattedValue);
    }
  };

  const handleCvvChange = (event: { target: { value: string } }) => {
    const value = event.target.value.replace(/\D/g, '');
    if (value.length <= 3) {
      setCvv(value);
    }
  };

  const handleExpirationDateChange = (event: { target: { value: string } }) => {
    const value = event.target.value.replace(/\D/g, '');
    const formattedValue = value.replace(/(\d{2})(?=\d{2})/, '$1/');
    if (value.length <= 4) {
      setExpirationDate(formattedValue);
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <PaymentContainer>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="subtitle2">Credit card</Typography>
          <CreditCard size={20} sx={{ color: 'text.secondary' }} />
        </Box>
        <Cpu size={20}
          sx={{
            fontSize: { xs: 48, sm: 56 },
            transform: 'rotate(90deg)',
            color: 'text.secondary',
          }}
        />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            gap: 2,
          }}
        >
          <FormGrid sx={{ flexGrow: 1 }}>
            <FormLabel htmlFor="card-number" required>
              Card number
            </FormLabel>
            <OutlinedInput
              id="card-number"
              startAdornment={<InputAdornment position="start"><CreditCard size={18} /></InputAdornment>}
              autoComplete="card-number"
              placeholder="0000 0000 0000 0000"
              required
              size="small"
              value={cardNumber}
              onChange={handleCardNumberChange}
            />
          </FormGrid>
          <FormGrid sx={{ maxWidth: '20%' }}>
            <FormLabel htmlFor="cvv" required>
              CVV
            </FormLabel>
            <OutlinedInput
              id="cvv"
              startAdornment={<InputAdornment position="start"><Lock size={18} /></InputAdornment>}
              autoComplete="CVV"
              placeholder="123"
              required
              size="small"
              value={cvv}
              onChange={handleCvvChange}
            />
          </FormGrid>
        </Box>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <FormGrid sx={{ flexGrow: 1 }}>
            <FormLabel htmlFor="card-name" required>
              Name
            </FormLabel>
            <OutlinedInput
              id="card-name"
              startAdornment={<InputAdornment position="start"><User size={18} /></InputAdornment>}
              autoComplete="card-name"
              placeholder="John Smith"
              required
              size="small"
            />
          </FormGrid>
          <FormGrid sx={{ flexGrow: 1 }}>
            <FormLabel htmlFor="card-expiration" required>
              Expiration date
            </FormLabel>
            <OutlinedInput
              id="card-expiration"
              startAdornment={<InputAdornment position="start"><Calendar size={18} /></InputAdornment>}
              autoComplete="card-expiration"
              placeholder="MM/YY"
              required
              size="small"
              value={expirationDate}
              onChange={handleExpirationDateChange}
            />
          </FormGrid>
        </Box>
      </PaymentContainer>
      <FormControlLabel
        control={<Checkbox name="saveCard" />}
        label="Remember credit card details for next time"
      />
    </Box>
  );
}
