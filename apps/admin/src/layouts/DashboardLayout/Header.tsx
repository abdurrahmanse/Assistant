import Stack from '@mui/material/Stack';
import { Bell } from "lucide-react";
import CustomDatePicker from '@/features/analytics/CustomDatePicker';
import NavbarBreadcrumbs from '@/layouts/DashboardLayout/NavbarBreadcrumbs';
import MenuButton from '@/layouts/DashboardLayout/MenuButton';
import ColorModeIconDropdown from '@repo/ui/shared-theme/ColorModeIconDropdown';

import Search from '@/layouts/DashboardLayout/Search';

export default function Header() {
  return (
    <Stack
      direction="row"
      sx={{
        display: { xs: 'none', md: 'flex' },
        width: '100%',
        alignItems: { xs: 'flex-start', md: 'center' },
        justifyContent: 'space-between',
        maxWidth: { sm: '100%', md: '1700px' },
        pt: 1.5,
      }}
      spacing={2}
    >
      <NavbarBreadcrumbs />
      <Stack direction="row" sx={{ gap: 1 }}>
        <Search />
        <CustomDatePicker />
        <MenuButton showBadge aria-label="Open notifications">
          <Bell size={20} />
        </MenuButton>
        <ColorModeIconDropdown />
      </Stack>
    </Stack>
  );
}
