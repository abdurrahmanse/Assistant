import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';
import { useColorScheme } from '@mui/material/styles';
import { MutedText } from '@repo/ui/styled';
import {
  LogoCollectionWrapper,
  LogoGridContainer,
  LogoImage,
} from './LogoCollection.styles';
import { useLandingData } from '../hooks/useLandingData';

export default function LogoCollection() {
  const { mode, systemMode } = useColorScheme();
  const { data, isLoading } = useLandingData();

  if (isLoading || !data) {
    return (
      <LogoCollectionWrapper id="logoCollection">
        <Skeleton variant="text" width="200px" sx={{ mx: 'auto', mb: 2 }} />
        <LogoGridContainer container>
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Grid key={i}>
              <Skeleton variant="rectangular" width={100} height={80} sx={{ mx: '32px' }} />
            </Grid>
          ))}
        </LogoGridContainer>
      </LogoCollectionWrapper>
    );
  }

  const { logoCollection } = data;

  return (
    <LogoCollectionWrapper id="logoCollection">
      <MutedText component="p" variant="subtitle2" align="center">
        {logoCollection.title}
      </MutedText>
      <LogoGridContainer container>
        {logoCollection.logos.map((logo, index) => {
          let currentLogo;
          if (mode === 'system') {
            currentLogo = systemMode === 'light' ? logo.light : logo.dark;
          } else if (mode === 'light') {
            currentLogo = logo.light;
          } else {
            currentLogo = logo.dark;
          }

          return (
            <Grid key={index}>
              <LogoImage
                src={currentLogo}
                alt={logo.alt}
              />
            </Grid>
          );
        })}
      </LogoGridContainer>
    </LogoCollectionWrapper>
  );
}
