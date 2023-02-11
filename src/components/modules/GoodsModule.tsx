import { Box } from '@mui/system';
import { useAppSelector } from 'api/hooks';
import { Accordeon } from 'components/Accordeon/Accordeon';
import { HeaderDashboard } from 'components/HeaderDashboard/HeaderDashboard';
import { SideBar } from 'components/SideBar/SideBar';
import { SideBarItem } from 'components/SideBar/SideBarItem';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const accordContent = [
  { title: 'Brands', items: 'Craft' },
  { title: 'Сategories', items: 'Baselayer' },
  { title: 'Function', items: 'Bike' },
  { title: 'Gender', items: 'Man' }
];

export const GoodsModule = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [isDrawerIconsOpen, setDrawerIconsOpen] = useState(true);
  const [isDraweTextOpen, setDrawerTextOpen] = useState(false);

  return (
    <>
      <Accordeon />
      <HeaderDashboard />

      {/* <SideBar cartOpen={cartOpen} closeCart={() => setCartOpen(false)} /> */}
    </>
  );
};
