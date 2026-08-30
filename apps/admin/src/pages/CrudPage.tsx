import CssBaseline from '@mui/material/CssBaseline';
import { createHashRouter, RouterProvider } from 'react-router';
import DashboardLayout from '@/layouts/CrudLayout/DashboardLayout';
import EmployeeList from '@/features/crud/components/EmployeeList';
import EmployeeShow from '@/features/crud/components/EmployeeShow';
import EmployeeCreate from '@/features/crud/components/EmployeeCreate';
import EmployeeEdit from '@/features/crud/components/EmployeeEdit';
import NotificationsProvider from '@/features/crud/hooks/useNotifications/NotificationsProvider';
import DialogsProvider from '@/features/crud/hooks/useDialogs/DialogsProvider';
import AppTheme from '@repo/ui/shared-theme/AppTheme';
import {
  dataGridCustomizations,
  datePickersCustomizations,
  sidebarCustomizations,
  formInputCustomizations,
} from '@/theme/crud-theme/customizations';

const router = createHashRouter([
  {
    Component: DashboardLayout,
    children: [
      {
        path: '/employees',
        Component: EmployeeList,
      },
      {
        path: '/employees/:employeeId',
        Component: EmployeeShow,
      },
      {
        path: '/employees/new',
        Component: EmployeeCreate,
      },
      {
        path: '/employees/:employeeId/edit',
        Component: EmployeeEdit,
      },
      // Fallback route for the example routes in dashboard sidebar items
      {
        path: '*',
        Component: EmployeeList,
      },
    ],
  },
]);

const themeComponents = {
  ...dataGridCustomizations,
  ...datePickersCustomizations,
  ...sidebarCustomizations,
  ...formInputCustomizations,
};

export default function CrudDashboard(props: { disableCustomTheme?: boolean }) {
  return (
    <AppTheme {...props} themeComponents={themeComponents}>
      <CssBaseline enableColorScheme />
      <NotificationsProvider>
        <DialogsProvider>
          <RouterProvider router={router} />
        </DialogsProvider>
      </NotificationsProvider>
    </AppTheme>
  );
}
