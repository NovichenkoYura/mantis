import List from '@mui/material/List';
import { Avatar, Box, Divider, ListItemAvatar, ListItemIcon } from '@mui/material';
import Drawer from '@mui/material/Drawer/Drawer';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import ReadMoreSharpIcon from '@mui/icons-material/ReadMoreSharp';
import { alpha } from '@mui/material';
import { useState } from 'react';
import { StyledButtonWrapper } from 'components/common/Button/Button';

export const Basket = (props: any) => {
  const { closeBasket = Function.prototype, basketOpen } = props;

  return (
    <Drawer
      anchor="right"
      open={true}
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
            bgcolor: 'grey',
            p: '10px'
          }}>
          <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            In basket: <span>46E</span>
            <span>4pcs</span>
          </Box>
          <StyledButtonWrapper>Buy</StyledButtonWrapper>
        </Box>
      </Box>

      <List
        sx={{
          width: '640px',
          height: '100%',
          pt: 0.5,
          pb: 0,
          overflow: 'hidden'
        }}>
        {/* <ListItem sx={{ display: 'flex', height: '60px', pt: 0, pb: 0, pl: 1.62 }}>
          <ListItemIcon sx={{ display: 'block', mt: '0', mb: '0' }}>
            <img
              src="https://my.mantis.com.ua/assets/images/logo/shop_logo_big.png"
              alt=""
              height="48px"
            />
          </ListItemIcon>
          <ListItemText
            primary="Mantis B2B"
            sx={{ color: 'white', ml: 0.55 }}
            primaryTypographyProps={{ fontSize: '14px' }}
          />
          <ListItemAvatar>
            <Avatar sx={{ bgcolor: 'transparent' }}>
              <ReadMoreSharpIcon sx={{ bgcolor: 'transparent' }} />
            </Avatar>
          </ListItemAvatar>
        </ListItem>
        <Divider sx={{ boxShadow: 1 }} /> */}
      </List>
    </Drawer>
  );
};
