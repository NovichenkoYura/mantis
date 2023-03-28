import List from '@mui/material/List';
import { Avatar, Box, Divider, ListItemAvatar, ListItemIcon } from '@mui/material';
import Drawer from '@mui/material/Drawer/Drawer';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import ReadMoreSharpIcon from '@mui/icons-material/ReadMoreSharp';
import { useState } from 'react';
import { StyledButtonWrapper } from 'components/common/Button/Button';
import { BasketItem } from './BasketItem';
import { useAppSelector } from 'api/hooks';
import { CardInfoTypes } from 'types/types';
import { BasketProps } from '../components/HeaderDashboard/HeaderDashboard';

export const Basket = (props: any) => {
  const { closeBasket = Function.prototype, basketOpen } = props;
  const { goodsInfoForBasket } = useAppSelector((state) => state.goods);
  console.log(goodsInfoForBasket);
  const qtyForBadgeOfBasket = goodsInfoForBasket.reduce((a, v: BasketProps) => a + v.qty, 0);
  const sumForBadgeOfBasket = goodsInfoForBasket.reduce(
    (a, v: BasketProps) => a + v.qty * Number(v.rrp),
    0
  );

  return (
    <Drawer
      anchor="right"
      open={basketOpen}
      onClose={closeBasket}
      BackdropProps={{ style: { backgroundColor: 'transparent' } }}>
      <Box
        sx={{
          height: '80px',
          borderBottom: '2px solid rgb(251, 140, 0)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        <Typography sx={{ fontSize: '14px', fontWeight: '700' }}>ЗАМОВЛЕННЯ</Typography>
      </Box>
      <Box>
        <Box
          sx={{
            height: '70px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            p: '10px',
            borderBottom: '1px solid #e0e0e0'
          }}>
          <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            In basket: <span>&nbsp;{sumForBadgeOfBasket}€,</span>
            <span>&nbsp;{qtyForBadgeOfBasket}pcs</span>
          </Box>
          <StyledButtonWrapper>Buy</StyledButtonWrapper>
        </Box>
      </Box>

      <List
        sx={{
          width: '640px',
          height: '100%',
          pt: 0.5,
          pb: 0
        }}>
        {goodsInfoForBasket?.map((item: CardInfoTypes) => (
          <BasketItem
            key={item.ean}
            ean={item.ean}
            color={item.color}
            rrp={item.rrp}
            size={item.size}
            qty={item.qty}
            sku={item.sku}
            title={item.title}
            brand={item.brand}
          />
        ))}
      </List>
    </Drawer>
  );
};
