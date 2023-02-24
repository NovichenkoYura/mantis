import { AppBar, ListItem, ListItemText, Toolbar, Typography } from '@mui/material';
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
import axios from 'axios';
import { useState } from 'react';
import { ExampleСurrency } from '../../api/currencyQuerry/currencyQuerry';

interface BasketProps {
  handleBasket: () => void;
}

export const HeaderDashboard: React.FC<BasketProps> = ({ handleBasket }) => {
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
              € {<ExampleСurrency />}
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
            <ShoppingCartIcon />
          </IconButton>
        </StyledToolbar>
      </AppBar>
    </Box>
  );
};
