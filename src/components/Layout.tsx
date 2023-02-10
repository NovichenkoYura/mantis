// @ts-nocheck
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { locations } from 'constans/locations';
import { StartPage } from 'pages/StartPage';

import { useAppSelector } from 'api/hooks';

export const Layout = () => {
  // const { isAuth } = useAppSelector((state) => state.users);
  // console.log(isAuth);

  // const navigate = useNavigate();
  // useEffect(() => {
  //   if (isAuth && isAuth) {
  //     navigate('/dashboard');
  //     console.log('test');
  //   }
  // }, [isAuth]);

  return (
    <>
      <header></header>
      <StartPage />

      <main className="container">
        <Outlet />
      </main>

      <footer className="container"></footer>
    </>
  );
};
