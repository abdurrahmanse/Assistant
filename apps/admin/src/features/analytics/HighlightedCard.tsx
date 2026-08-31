import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ChevronRight } from "lucide-react";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useAnalyticsQuery } from './hooks/queries/useAnalyticsQuery';
import Skeleton from '@mui/material/Skeleton';

export default function HighlightedCard() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const { data, isLoading } = useAnalyticsQuery();

  if (isLoading || !data) {
    return <Skeleton variant="rectangular" width="100%" height={200} />;
  }

  const { highlightedCard } = data;

  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Typography
          component="h2"
          variant="subtitle2"
          gutterBottom
          sx={{ fontWeight: '600' }}
        >
          {highlightedCard.title}
        </Typography>
        <Typography sx={{ color: 'text.secondary', mb: '8px' }}>
          {highlightedCard.description}
        </Typography>
        <Button
          variant="contained"
          size="small"
          color="primary"
          endIcon={<ChevronRight size={18} />}
          fullWidth={isSmallScreen}
        >
          {highlightedCard.buttonText}
        </Button>
      </CardContent>
    </Card>
  );
}
