import 'lucide-react';
import { SxProps, Theme } from '@mui/material/styles';
declare module 'lucide-react' {
  interface LucideProps {
    sx?: SxProps<Theme> | any;
  }
}
