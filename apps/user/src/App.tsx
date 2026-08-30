import { createBrowserRouter, RouterProvider, Navigate } from 'react-router';
import SignInSide from './pages/sign-in/SignInSide';
import SignUp from './pages/sign-up/SignUp';
import Checkout from './pages/checkout/Checkout';

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
