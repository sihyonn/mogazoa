import { createBrowserRouter } from 'react-router-dom';
import routes from '@/constants/routes';
import MainLayout from '@/styles/layout/MainLayout';
import SignUp from '@/pages/auth/SignUp.page';

const router = createBrowserRouter([
  {
    path: '',
    element: <MainLayout />,
    children: [
      {
        path: routes.signUp,
        element: <SignUp />,
      },
    ],
  },
]);

export default router;
