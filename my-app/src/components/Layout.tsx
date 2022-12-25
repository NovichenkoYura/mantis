// @ts-nocheck
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { locations } from '../constans/locations';
п;
export const Layout = () => {
  return (
    <>
      <header>
        <NavLink to={locations.dashboard.path}>DashBoard</NavLink>
        <NavLink to={locations.login.path}>Login</NavLink>
      </header>

      <main className="container">
        <Outlet />
      </main>

      <footer className="container"></footer>
    </>
  );
};
