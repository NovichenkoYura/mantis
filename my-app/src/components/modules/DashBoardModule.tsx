import { HeaderDashboard } from 'components/HeaderDashboard/HeaderDashboard';
import { SideBar } from 'components/SideBar/SideBar';
import { SideBarItem } from 'components/SideBar/SideBarItem';
import { useState } from 'react';

export const DashBoardModule = () => {
  const [isCartOpen, setCartOpen] = useState(false);
  const [isDrawerIconsOpen, setDrawerIconsOpen] = useState(true);
  const [isDraweTextOpen, setDrawerTextOpen] = useState(false);

  return (
    <>
      <HeaderDashboard />
      <button className="fakebtn" onClick={() => setCartOpen(true)}>
        open
      </button>

      <button className="fakebtn" onClick={() => setDrawerIconsOpen(true)}>
        openIcons
      </button>
      <button className="fakebtn" onClick={() => setDrawerTextOpen(true)}>
        openText
      </button>
      <SideBar cartOpen={isCartOpen} closeCart={() => setCartOpen(false)} />
      <SideBarItem
        iconsOpen={isDrawerIconsOpen}
        closeIcons={() => setDrawerIconsOpen(false)}
        textOpen={isDraweTextOpen}
        closeText={() => setDrawerTextOpen(false)}
      />
    </>
  );
};
