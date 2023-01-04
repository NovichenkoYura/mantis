import { List } from '@mui/icons-material';
import Divider from '@mui/material/Divider/Divider';
import Drawer from '@mui/material/Drawer/Drawer';
import ListItem from '@mui/material/ListItem/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon/ListItemIcon';
import ListItemText from '@mui/material/ListItemText/ListItemText';
import Typography from '@mui/material/Typography';

export const SideBar = (props) => {
  const { cartOpen, closeCart = Function.prototype } = props;
  return (
    <Drawer anchor="left" open={cartOpen} onClose={closeCart}>
      <List sx={{ width: '240px' }}>
        <ListItem>
          <img
            src="https://my.mantis.com.ua/assets/images/logo/shop_logo_big.png"
            alt=""
            className="login__form__img"
          />
          {/* <ListItemIcon></ListItemIcon> */}
          <ListItemText primary="Mantis B2B" />
        </ListItem>
      </List>
    </Drawer>
  );
};
