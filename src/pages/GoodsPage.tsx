import { Button, Card } from '@mui/material';
import { Box } from '@mui/system';
import { Accordeon } from 'components/Accordeon/Accordeon';
import { CardList } from 'components/Cards/CardList';
import { HeaderDashboard } from 'components/HeaderDashboard/HeaderDashboard';
import { SideBar } from 'components/SideBar/SideBar';
import { Basket } from 'pages/Basket';
import { useState } from 'react';

export const GoodsPage = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [basketOpen, setBasketOpen] = useState(false);

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
        <HeaderDashboard handleBasket={() => setBasketOpen(true)} />
        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
          <Accordeon />
          {/* <FiltersForGoods /> */}
          <CardList />

          {/* <SideBar cartOpen={cartOpen} closeCart={() => setCartOpen(false)} /> */}
          <Basket basketOpen={basketOpen} closeBasket={() => setBasketOpen(false)} />
        </Box>
        {/* <Stock /> */}
      </Box>
    </>
  );
};

// <>
//       <Box
//         sx={{
//           display: 'flex',
//           flexDirection: 'column',
//           mt: '67px',
//           width: '100%'
//           // bgcolor: 'orange'
//         }}>
//         <HeaderDashboard handleBasket={() => setBasketOpen(true)} />
//         <Box sx={{ display: 'flex', flexDirection: 'row' }}>
//           <FiltersForGoods />
//           <CardList />
//           {/* <Accordeon /> */}
//           {/* <SideBar cartOpen={cartOpen} closeCart={() => setCartOpen(false)} /> */}
//           <Basket basketOpen={basketOpen} closeBasket={() => setBasketOpen(false)} />
//         </Box>
//         {/* <Stock /> */}
//       </Box>
//     </>
