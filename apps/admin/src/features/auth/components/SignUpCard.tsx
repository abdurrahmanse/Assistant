import * as React from 'react';
import { useNavigate, Link as RouterLink } from 'react-router';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import Link from '@mui/material/Link';
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from '@mui/material/IconButton';
import { User, Mail, Lock , Eye, EyeOff , UserPlus} from "lucide-react";
import Typography from '@mui/material/Typography';
import MuiCard from '@mui/material/Card';
import { styled } from '@mui/material/styles';
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
  margin: 'auto',
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

export default function SignUpCard() {
  const { data, isLoading } = useAuthQuery();
  const [showPassword, setShowPassword] = React.useState(false);
  const navigate = useNavigate();
  const [emailError, setEmailError] = React.useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = React.useState('');
  const [passwordError, setPasswordError] = React.useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');
  const [nameError, setNameError] = React.useState(false);
  const [nameErrorMessage, setNameErrorMessage] = React.useState('');

  if (isLoading || !data) {
    return (
      <Card variant="outlined">
        <Skeleton variant="rectangular" width="100%" height={400} />
      </Card>
    );
  }

  const { signUp } = data;

  const validateInputs = () => {
    const email = document.getElementById('email') as HTMLInputElement;
    const password = document.getElementById('password') as HTMLInputElement;
    const name = document.getElementById('name') as HTMLInputElement;

    let isValid = true;

    if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
      setEmailError(true);
      setEmailErrorMessage(signUp.validation.emailInvalid);
      isValid = false;
    } else {
      setEmailError(false);
      setEmailErrorMessage('');
    }

    if (!password.value || password.value.length < 6) {
      setPasswordError(true);
      setPasswordErrorMessage(signUp.validation.passwordLength);
      isValid = false;
    } else {
      setPasswordError(false);
      setPasswordErrorMessage('');
    }

    if (!name.value || name.value.length < 1) {
      setNameError(true);
      setNameErrorMessage(signUp.validation.nameEmpty);
      isValid = false;
    } else {
      setNameError(false);
      setNameErrorMessage('');
    }

    return isValid;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    if (nameError || emailError || passwordError) {
      event.preventDefault();
      return;
    }
    const formData = new FormData(event.currentTarget);
    event.preventDefault();
    navigate('/checkout');
  };

  return (
    <Card variant="outlined">
      <AssistantLogo />
      <Typography
        component="h1"
        variant="h4"
        sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}
      >
        {signUp.title}
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
      >
        <FormControl>
          <FormLabel htmlFor="name">{signUp.nameLabel}</FormLabel>
          <TextField
            autoComplete="name"
            name="name"
            required
            fullWidth
            id="name"
            InputProps={{ startAdornment: <InputAdornment position="start"><User size={18} /></InputAdornment> }}
            placeholder={signUp.namePlaceholder}
            error={nameError}
            helperText={nameErrorMessage}
            color={nameError ? 'error' : 'primary'}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="email">{signUp.emailLabel}</FormLabel>
          <TextField
            required
            fullWidth
            id="email"
            InputProps={{ startAdornment: <InputAdornment position="start"><Mail size={18} /></InputAdornment> }}
            placeholder={signUp.emailPlaceholder}
            name="email"
            autoComplete="email"
            variant="outlined"
            error={emailError}
            helperText={emailErrorMessage}
            color={passwordError ? 'error' : 'primary'}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="password">{signUp.passwordLabel}</FormLabel>
          <TextField
            required
            fullWidth
            name="password"
            placeholder={signUp.passwordPlaceholder}
            type={showPassword ? 'text' : 'password'}
            id="password"
            InputProps={{ startAdornment: <InputAdornment position="start"><Lock size={18} /></InputAdornment>, endAdornment: <InputAdornment position="end"><IconButton onClick={() => setShowPassword(!showPassword)} edge="end">{showPassword ? <EyeOff size={18} /> : <Eye size={18} />}</IconButton></InputAdornment> }}
            autoComplete="new-password"
            variant="outlined"
            error={passwordError}
            helperText={passwordErrorMessage}
            color={passwordError ? 'error' : 'primary'}
          />
        </FormControl>
        <FormControlLabel
          control={<Checkbox value="allowExtraEmails" color="primary" />}
          label={signUp.allowExtraEmails}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          onClick={validateInputs}
          startIcon={<UserPlus size={18} />}>
          {signUp.submitButton}
        </Button>
      </Box>
      <Divider>
        <Typography sx={{ color: 'text.secondary' }}>{signUp.orDivider}</Typography>
      </Divider>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Button
          fullWidth
          variant="outlined"
          onClick={() => alert('Sign up with Google')}
          startIcon={<GoogleIcon />}
        >
          {signUp.googleButton}
        </Button>
        <Button
          fullWidth
          variant="outlined"
          onClick={() => alert('Sign up with Facebook')}
          startIcon={<FacebookIcon />}
        >
          {signUp.facebookButton}
        </Button>
        <Typography sx={{ textAlign: 'center' }}>
          {signUp.alreadyAccountText}{' '}
          <Link
            component={RouterLink} to="/signin"
            variant="body2"
            sx={{ alignSelf: 'center' }}
          >
            {signUp.signInLink}
          </Link>
        </Typography>
      </Box>
    </Card>
  );
}
