import Login from '@/components/screens/authorization/Login';
import Registration from '@/components/screens/authorization/Registration';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '@/utils/consts.routes';
import React from 'react';
import { useLocation } from 'react-router-dom';

const Authorization = () => {
  const location = useLocation().pathname;
  console.log(location);

  if (location === LOGIN_ROUTE) {
    return <Login />;
  } else if (location === REGISTRATION_ROUTE) {
    return <Registration />;
  }
};

export default Authorization;
