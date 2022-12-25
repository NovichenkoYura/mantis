// @ts-nocheck
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { locations } from '../constans/locations';

const Layout = () => {
  return (
    <>
      <header>
        <NavLink to={locations.dashboard.path} className={setActive}>
          DashBoard
        </NavLink>
        <NavLink to={locations.login.path} className={setActive}>
          Login
        </NavLink>
      </header>

      <main className="container">
        <Outlet />
      </main>

      <footer className="container"></footer>
    </>
  );
};

export { Layout };
