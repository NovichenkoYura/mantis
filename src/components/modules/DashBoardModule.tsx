import { HeaderDashboard } from 'components/HeaderDashboard/HeaderDashboard';
import { SideBar } from 'components/SideBar/SideBar';
import { SideBarItem } from 'components/SideBar/SideBarItem';
import { useState } from 'react';

export const DashBoardModule = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [isDrawerIconsOpen, setDrawerIconsOpen] = useState(true);
  const [isDraweTextOpen, setDrawerTextOpen] = useState(false);

  return (
    <>
      <HeaderDashboard />

      <SideBar cartOpen={cartOpen} closeCart={() => setCartOpen(false)} />
    </>
  );
};
