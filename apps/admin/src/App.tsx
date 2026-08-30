import { createBrowserRouter, RouterProvider, Navigate } from 'react-router';
import AppTheme from '@repo/ui/shared-theme/AppTheme';
import CssBaseline from '@mui/material/CssBaseline';
import Dashboard from './pages/dashboard/Dashboard';
import SignIn from './pages/sign-in/SignIn';
import DashboardLayout from './pages/crud-dashboard/components/DashboardLayout';
import EmployeeList from './pages/crud-dashboard/components/EmployeeList';
import EmployeeShow from './pages/crud-dashboard/components/EmployeeShow';
import EmployeeCreate from './pages/crud-dashboard/components/EmployeeCreate';
import EmployeeEdit from './pages/crud-dashboard/components/EmployeeEdit';
import NotificationsProvider from './pages/crud-dashboard/hooks/useNotifications/NotificationsProvider';
import DialogsProvider from './pages/crud-dashboard/hooks/useDialogs/DialogsProvider';
import {
  dataGridCustomizations,
  datePickersCustomizations,
  sidebarCustomizations,
  formInputCustomizations,
} from './pages/crud-dashboard/theme/customizations';
import {
  chartsCustomizations,
  treeViewCustomizations,
} from './pages/dashboard/theme/customizations';

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
    element: <Dashboard />,
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
