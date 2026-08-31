import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MuiCard from '@mui/material/Card';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import { useNavigate } from 'react-router';
import { Link as RouterLink } from 'react-router';
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { Mail, Lock , Eye, EyeOff , LogIn} from "lucide-react";
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import ForgotPassword from './ForgotPassword';
import { GoogleIcon, FacebookIcon } from "./CustomIcons";
import AssistantLogo from "@/components/AssistantLogo";
import Skeleton from '@mui/material/Skeleton';
import { useAuthQuery } from '../hooks/queries/useAuthQuery';

const Card = styled(MuiCard)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  width: '100%',
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  boxShadow:
    'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
  [theme.breakpoints.up('sm')]: {
    width: '450px',
  },
  ...theme.applyStyles('dark', {
    boxShadow:
      'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
  }),
}));

export default function SignInCard() {
  const { data, isLoading } = useAuthQuery();
  const [showPassword, setShowPassword] = React.useState(false);
  const navigate = useNavigate();
  const [emailError, setEmailError] = React.useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = React.useState('');
  const [passwordError, setPasswordError] = React.useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');
  const [open, setOpen] = React.useState(false);

  if (isLoading || !data) {
    return (
      <Card variant="outlined">
        <Skeleton variant="rectangular" width="100%" height={400} />
      </Card>
    );
  }

  const { signIn } = data;

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    if (emailError || passwordError) {
      event.preventDefault();
      return;
    }
    const formData = new FormData(event.currentTarget);
    event.preventDefault();
    navigate('/checkout');
  };

  const validateInputs = () => {
    const email = document.getElementById('email') as HTMLInputElement;
    const password = document.getElementById('password') as HTMLInputElement;

    let isValid = true;

    if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
      setEmailError(true);
      setEmailErrorMessage(signIn.validation.emailInvalid);
      isValid = false;
    } else {
      setEmailError(false);
      setEmailErrorMessage('');
    }

    if (!password.value || password.value.length < 6) {
      setPasswordError(true);
      setPasswordErrorMessage(signIn.validation.passwordLength);
      isValid = false;
    } else {
      setPasswordError(false);
      setPasswordErrorMessage('');
    }

    return isValid;
  };

  return (
    <Card variant="outlined">
      <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
        <AssistantLogo />
      </Box>
      <Typography
        component="h1"
        variant="h4"
        sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}
      >
        {signIn.title}
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        noValidate
        sx={{ display: 'flex', flexDirection: 'column', width: '100%', gap: 2 }}
      >
        <FormControl>
          <FormLabel htmlFor="email">{signIn.emailLabel}</FormLabel>
          <TextField
            error={emailError}
            helperText={emailErrorMessage}
            id="email"
            InputProps={{ startAdornment: <InputAdornment position="start"><Mail size={18} /></InputAdornment> }}
            type="email"
            name="email"
            placeholder={signIn.emailPlaceholder}
            autoComplete="email"
            autoFocus
            required
            fullWidth
            variant="outlined"
            color={emailError ? 'error' : 'primary'}
          />
        </FormControl>
        <FormControl>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <FormLabel htmlFor="password">{signIn.passwordLabel}</FormLabel>
            <Link
              component="button"
              type="button"
              onClick={handleClickOpen}
              variant="body2"
              sx={{ alignSelf: 'baseline' }}
            >
              {signIn.forgotPasswordLink}
            </Link>
          </Box>
          <TextField
            error={passwordError}
            helperText={passwordErrorMessage}
            name="password"
            placeholder={signIn.passwordPlaceholder}
            type={showPassword ? 'text' : 'password'}
            id="password"
            InputProps={{ startAdornment: <InputAdornment position="start"><Lock size={18} /></InputAdornment>, endAdornment: <InputAdornment position="end"><IconButton onClick={() => setShowPassword(!showPassword)} edge="end">{showPassword ? <EyeOff size={18} /> : <Eye size={18} />}</IconButton></InputAdornment> }}
            autoComplete="current-password"
            required
            fullWidth
            variant="outlined"
            color={passwordError ? 'error' : 'primary'}
          />
        </FormControl>
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label={signIn.rememberMe}
        />
        <ForgotPassword open={open} handleClose={handleClose} />
        <Button type="submit" fullWidth variant="contained" onClick={validateInputs} startIcon={<LogIn size={18} />}>
          {signIn.submitButton}
        </Button>
        <Typography sx={{ textAlign: 'center' }}>
          {signIn.noAccountText}{' '}
          <span>
            <Link
              component={RouterLink} to="/signup"
              variant="body2"
              sx={{ alignSelf: 'center' }}
            >
              {signIn.signUpLink}
            </Link>
          </span>
        </Typography>
      </Box>
      <Divider>{signIn.orDivider}</Divider>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Button
          fullWidth
          variant="outlined"
          onClick={() => alert('Sign in with Google')}
          startIcon={<GoogleIcon />}
        >
          {signIn.googleButton}
        </Button>
        <Button
          fullWidth
          variant="outlined"
          onClick={() => alert('Sign in with Facebook')}
          startIcon={<FacebookIcon />}
        >
          {signIn.facebookButton}
        </Button>
      </Box>
    </Card>
  );
}
