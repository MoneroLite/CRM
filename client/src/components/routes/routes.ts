import Authorization from '@/pages/authorization';
import HomePage from '@/pages/home';
import {
  LOGIN_ROUTE,
  MAIN_ROUTE,
  REGISTRATION_ROUTE
} from '@/utils/consts.routes';

export const authRoutes = [
  // {
  //   path: ADMIN_MAIN_ROUTE,
  //   Component: Main,
  // },
];
export const publicRoutes = [
  {
    path: MAIN_ROUTE,
    Component: HomePage
  },
  {
    path: LOGIN_ROUTE,
    Component: Authorization
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Authorization
  }
];
