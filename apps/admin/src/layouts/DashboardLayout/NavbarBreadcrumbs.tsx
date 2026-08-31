import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Breadcrumbs, { breadcrumbsClasses } from '@mui/material/Breadcrumbs';
import { ChevronRight } from "lucide-react";
import Skeleton from '@mui/material/Skeleton';
import { useLayoutQuery } from '@/features/layout/hooks/queries/useLayoutQuery';

const StyledBreadcrumbs = styled(Breadcrumbs)(({ theme }) => ({
  margin: theme.spacing(1, 0),
  [`& .${breadcrumbsClasses.separator}`]: {
    color: (theme.vars || theme).palette.action.disabled,
    margin: 1,
  },
  [`& .${breadcrumbsClasses.ol}`]: {
    alignItems: 'center',
  },
}));

export default function NavbarBreadcrumbs() {
  const { data, isLoading } = useLayoutQuery();

  if (isLoading || !data) {
    return <Skeleton variant="text" width={100} height={30} />;
  }

  return (
    <StyledBreadcrumbs
      aria-label="breadcrumb"
      separator={<ChevronRight size={16} />}
    >
      <Typography variant="body1">{data.header.title}</Typography>
      <Typography variant="body1" sx={{ color: 'text.primary', fontWeight: 600 }}>
        Home
      </Typography>
    </StyledBreadcrumbs>
  );
}
