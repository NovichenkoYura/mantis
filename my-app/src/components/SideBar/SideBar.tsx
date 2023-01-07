import List from '@mui/material/List';
import { Avatar, Box, Divider, ListItemAvatar, ListItemIcon } from '@mui/material';
import Drawer from '@mui/material/Drawer/Drawer';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { SideBarItem } from './SideBarItem';
import ReadMoreSharpIcon from '@mui/icons-material/ReadMoreSharp';
import { alpha } from '@mui/material';

export const SideBar = (props) => {
  const { cartOpen, closeCart = Function.prototype } = props;
  return (
    <Drawer
      anchor="left"
      open={cartOpen}
      onClose={closeCart}
      BackdropProps={{ style: { backgroundColor: 'transparent' } }}>
      <List sx={{ width: '240px', height: '100%', bgcolor: 'rgb(45,50,62)', pt: 0.5, pb: 0 }}>
        <ListItem sx={{ display: 'flex', height: '60px', pt: 0, pb: 0 }}>
          <ListItemIcon sx={{ display: 'block', mt: '0', mb: '0' }}>
            <img
              src="https://my.mantis.com.ua/assets/images/logo/shop_logo_big.png"
              alt=""
              height="48px"
            />
          </ListItemIcon>
          <ListItemText
            primary="Mantis B2B"
            sx={{ color: 'white' }}
            primaryTypographyProps={{ fontSize: '14px' }}
          />
          <ListItemAvatar>
            <Avatar sx={{ bgcolor: 'transparent' }}>
              <ReadMoreSharpIcon sx={{ bgcolor: 'transparent' }} />
            </Avatar>
          </ListItemAvatar>
        </ListItem>
        <Divider sx={{ boxShadow: 1 }} />

        <SideBarItem />
      </List>
    </Drawer>
  );
};
