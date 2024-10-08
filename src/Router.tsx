import { createBrowserRouter } from 'react-router-dom';
import routes from '@/constants/routes';
import MainLayout from '@/styles/layout/MainLayout';
import Home from '@/pages/Home.page';
import SignIn from '@/pages/auth/SignIn.page';
import SignUp from '@/pages/auth/SignUp.page';

const router = createBrowserRouter([
  {
    path: '',
    element: <MainLayout />,
    children: [
      {
        path: routes.home,
        element: <Home />,
      },
      {
        path: routes.signUp,
        element: <SignUp />,
      },
      {
        path: routes.signIn,
        element: <SignIn />,
      },
    ],
  },
]);

export default router;
