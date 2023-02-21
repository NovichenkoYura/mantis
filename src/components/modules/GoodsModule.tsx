import { Button, Card } from '@mui/material';
import { Box } from '@mui/system';
import { useStock } from 'api/stockQuery/stockQuery';
// import { useStock } from 'api/stockQuery/stockQuery';
import { Accordeon } from 'components/Accordeon/Accordeon';
import { CardList } from 'components/Cards/CardList';
import { HeaderDashboard } from 'components/HeaderDashboard/HeaderDashboard';
import { SideBar } from 'components/SideBar/SideBar';
// import { useStock } from 'hooks/queries/useStock';
import { useState } from 'react';
import { FilterGoods } from '../FilterGoods/FilterGoods';

export const GoodsModule = () => {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          mt: '67px',
          width: '100%'
          // bgcolor: 'orange'
        }}>
        <HeaderDashboard />
        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
          <FilterGoods />
          <CardList />
          {/* <Accordeon /> */}
          {/* <SideBar cartOpen={cartOpen} closeCart={() => setCartOpen(false)} /> */}
        </Box>
        {/* <Stock /> */}
      </Box>
    </>
  );
};
