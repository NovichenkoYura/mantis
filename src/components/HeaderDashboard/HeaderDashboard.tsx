import { AppBar, Badge, ListItem, ListItemText, Toolbar, Typography } from '@mui/material';
import { locations } from 'constans/locations';
import { NavLink } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';
import PersonIcon from '@mui/icons-material/Person';
import AttachFileSharpIcon from '@mui/icons-material/AttachFileSharp';
import Divider from '@mui/material/Divider';
import { StyledListItem } from 'components/SideBar/listItemStyles';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import PhoneSharpIcon from '@mui/icons-material/PhoneSharp';
import { StyledToolbar } from './HeaderDachBoardStyled';
import { Box } from '@mui/system';
import { useState } from 'react';
import { ExampleСurrency } from '../../api/currencyQuerry/currencyQuerry';
import { useAppSelector } from 'api/hooks';
import { CardInfoTypes } from 'types/types';

export interface BasketProps {
  handleBasket: () => void;
  a: number;
  qty: number;
  rrp: string;
}

export const HeaderDashboard: React.FC<BasketProps> = ({ handleBasket }) => {
  const { goodsInfoForBasket } = useAppSelector((state) => state.goods);
  console.log(goodsInfoForBasket);

  const qtyForBadgeOfBasket = goodsInfoForBasket.reduce((a, v: BasketProps) => a + v.qty, 0);
  const sumForBadgeOfBasket = goodsInfoForBasket.reduce(
    (a, v: BasketProps) => a + v.qty * Number(v.rrp),
    0
  );

  return (
    <Box sx={{ display: 'flex', flex: 1 }}>
      <AppBar color="transparent" sx={{ boxShadow: 1 }}>
        <StyledToolbar>
          <Divider orientation="vertical" flexItem sx={{ ml: 'auto' }} />

          <ListItem
            sx={{ width: '208px', display: 'flex', flexDirection: 'row', textAlign: 'right' }}>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: 'transparent', color: '#616161', textAlign: 'right' }}>
                <PhoneSharpIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="066-655-22-33"
              sx={{ color: 'rgb(251, 140, 0)', bgcolor: 'transparent' }}
              primaryTypographyProps={{ fontSize: '17px' }}
            />
          </ListItem>
          <Divider orientation="vertical" flexItem />
          <Box
            sx={{
              width: '208px',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between'
            }}>
            <Typography component="div" sx={{ pl: 3 }}>
              {<ExampleСurrency />}€
            </Typography>
            <Typography component="div" sx={{ pr: 3 }} id="curencyRate">
              RRC: 40.00
            </Typography>
          </Box>

          <Divider orientation="vertical" flexItem />

          <IconButton
            sx={{ width: 52, height: 64, p: 0, bgcolor: 'transparent', color: '#616161' }}>
            <AttachFileSharpIcon />
          </IconButton>
          <Divider orientation="vertical" flexItem />
          <IconButton
            sx={{ width: 52, height: 64, p: 0, bgcolor: 'transparent', color: '#616161' }}>
            <PersonIcon />
          </IconButton>
          <IconButton
            onClick={handleBasket}
            sx={{ width: 76, height: 64, p: 0, bgcolor: 'transparent', color: '#616161' }}>
            <Badge badgeContent={qtyForBadgeOfBasket}>
              <ShoppingCartIcon />
              {qtyForBadgeOfBasket !== 0 && (
                <Box sx={{ fontSize: '14px' }}> {sumForBadgeOfBasket} €</Box>
              )}
            </Badge>
          </IconButton>
        </StyledToolbar>
      </AppBar>
    </Box>
  );
};
