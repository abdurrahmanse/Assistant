import { type Theme } from '@mui/material/styles';

// Safely check reduced motion preference without relying on theme.motion
// (which is not part of the standard MUI Theme type)
function getReducedMotionStyles(_theme: Theme, transition: string) {
  return {
    transition,
    '@media (prefers-reduced-motion: reduce)': {
      transition: 'none',
    },
  };
}

export default function mixins(isExpanded: boolean, property: string) {
  return (theme: Theme) =>
    getReducedMotionStyles(
      theme,
      theme.transitions.create(property, {
        easing: theme.transitions.easing.sharp,
        duration: isExpanded
          ? theme.transitions.duration.enteringScreen
          : theme.transitions.duration.leavingScreen,
      }),
    );
}
