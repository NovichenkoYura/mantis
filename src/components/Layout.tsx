// @ts-nocheck
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { locations } from 'constans/locations';
import { StartPage } from 'pages/StartPage';

export const Layout = () => {
  return (
    <>
      <header>
        {/* <NavLink to={locations.dashboard.path}>DashBoard</NavLink> */}
        {/* <NavLink to={locations.login.path}>Вхід для дилерів2</NavLink> */}
        {/* <NavLink to={locations.startpage.path}>Cтартова сторінка</NavLink> */}
      </header>
      <StartPage />

      <main className="container">
        <Outlet />
      </main>

      <footer className="container"></footer>
    </>
  );
};
