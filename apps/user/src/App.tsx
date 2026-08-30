import { createBrowserRouter, RouterProvider, Navigate } from 'react-router';
import SignInSide from '@/pages/SignInPage';
import SignUp from '@/pages/SignUpPage';
import Checkout from '@/pages/CheckoutPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/signin" replace />,
  },
  {
    path: '/signin',
    element: <SignInSide />,
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
  {
    path: '/checkout',
    element: <Checkout />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
