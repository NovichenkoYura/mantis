import { HeaderDashboard } from 'components/HeaderDashboard/HeaderDashboard';
import { SideBar } from 'components/SideBar/SideBar';
import { useState } from 'react';

export const DashBoardPage = () => {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <>
      {/* <HeaderDashboard /> */}

      <SideBar cartOpen={cartOpen} closeCart={() => setCartOpen(false)} />
      {/* <Accordeon /> */}
    </>
  );
};
