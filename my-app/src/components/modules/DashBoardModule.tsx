import { HeaderDashboard } from 'components/HeaderDashboard/HeaderDashboard';
import { SideBar } from 'components/SideBar/SideBar';
import { useState } from 'react';

export const DashBoardModule = () => {
  const [isCartOpen, setCartOpen] = useState(false);
  return (
    <>
      <HeaderDashboard />
      <button className="fakebtn" onClick={() => setCartOpen(true)}>
        open
      </button>
      <SideBar cartOpen={isCartOpen} closeCart={() => setCartOpen(false)} />
    </>
  );
};
