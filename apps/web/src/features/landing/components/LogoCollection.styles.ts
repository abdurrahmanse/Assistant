import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export const LogoCollectionWrapper = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(4),
}));

export const LogoGridContainer = styled(Grid)({
  justifyContent: 'center',
  marginTop: '4px',
  opacity: 0.6,
});

export const LogoImage = styled('img')({
  width: '100px',
  height: '80px',
  margin: '0 32px',
  opacity: 0.7,
});
