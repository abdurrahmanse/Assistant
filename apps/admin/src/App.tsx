import { createBrowserRouter, RouterProvider, Navigate } from 'react-router';
import AppTheme from '@repo/ui/shared-theme/AppTheme';
import CssBaseline from '@mui/material/CssBaseline';
import Dashboard from '@/pages/AnalyticsPage';
import SignIn from '@/pages/SignInPage';
import DashboardLayout from '@/layouts/CrudLayout/DashboardLayout';
import AnalyticsDashboardLayout from '@/layouts/AnalyticsDashboardLayout';
import EmployeeList from '@/features/crud/components/EmployeeList';
import EmployeeShow from '@/features/crud/components/EmployeeShow';
import EmployeeCreate from '@/features/crud/components/EmployeeCreate';
import EmployeeEdit from '@/features/crud/components/EmployeeEdit';
import NotificationsProvider from '@/features/crud/hooks/useNotifications/NotificationsProvider';
import DialogsProvider from '@/features/crud/hooks/useDialogs/DialogsProvider';
import {
  dataGridCustomizations,
  datePickersCustomizations,
  sidebarCustomizations,
  formInputCustomizations,
} from '@/theme/crud-theme/customizations';
import {
  chartsCustomizations,
  treeViewCustomizations,
} from '@/theme/dashboard-theme/customizations';

const themeComponents = {
  ...chartsCustomizations,
  ...dataGridCustomizations,
  ...datePickersCustomizations,
  ...sidebarCustomizations,
  ...formInputCustomizations,
  ...treeViewCustomizations,
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <AnalyticsDashboardLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
    ],
  },
  {
    path: '/signin',
    element: <SignIn />,
  },
  {
    Component: DashboardLayout,
    children: [
      {
        path: '/employees',
        Component: EmployeeList,
      },
      {
        path: '/employees/new',
        Component: EmployeeCreate,
      },
      {
        path: '/employees/:employeeId',
        Component: EmployeeShow,
      },
      {
        path: '/employees/:employeeId/edit',
        Component: EmployeeEdit,
      },
      {
        path: '*',
        element: <Navigate to="/employees" replace />,
      },
    ],
  },
]);

export default function App() {
  return (
    <AppTheme themeComponents={themeComponents}>
      <CssBaseline enableColorScheme />
      <NotificationsProvider>
        <DialogsProvider>
          <RouterProvider router={router} />
        </DialogsProvider>
      </NotificationsProvider>
    </AppTheme>
  );
}
