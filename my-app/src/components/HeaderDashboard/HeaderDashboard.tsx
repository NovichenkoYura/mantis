import { AppBar, ListItemText, Toolbar, Typography } from '@mui/material';
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

export const HeaderDashboard = () => {
  return (
    <AppBar color="transparent" sx={{ boxShadow: 1 }}>
      <Toolbar>
        <Divider orientation="vertical" flexItem />

        <StyledListItem>
          <ListItemAvatar>
            <Avatar sx={{ bgcolor: 'transparent', color: '#e0e0e0' }}>
              <PhoneSharpIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary="066-655-22-33"
            sx={{ color: '#e0e0e0' }}
            primaryTypographyProps={{ fontSize: '13px' }}
          />
        </StyledListItem>
        <Divider orientation="vertical" flexItem />
        <Typography>€ 42.51</Typography>
        <Typography>RRC: 40.00</Typography>
        <Divider orientation="vertical" flexItem />

        <IconButton>
          <AttachFileSharpIcon />
        </IconButton>
        <Divider orientation="vertical" flexItem />
        <IconButton>
          <PersonIcon />
        </IconButton>
        <IconButton>
          <ShoppingCartIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
