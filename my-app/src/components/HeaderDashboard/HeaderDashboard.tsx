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

export const HeaderDashboard = () => {
  axios.get('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json').then((res) => {
    const currencyRate = res.data[31].rate.toFixed(2);
    console.log(currencyRate);
    return currencyRate;
  });

  return (
    <AppBar color="transparent" sx={{ boxShadow: 1 }}>
      <StyledToolbar>
        <Divider orientation="vertical" flexItem />

        <StyledListItem sx={{ width: 1, height: 1 }}>
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
        <Box
          sx={{
            width: '280px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}>
          <Typography component="div" sx={{ pl: 3 }}>
            € 42.51
          </Typography>
          <Typography component="div" sx={{ pr: 3 }} id="curencyRate">
            RRC: 40.00
          </Typography>
        </Box>

        <Divider orientation="vertical" flexItem />

        <IconButton sx={{ width: 52, height: 64, p: 0 }}>
          <AttachFileSharpIcon />
        </IconButton>
        <Divider orientation="vertical" flexItem />
        <IconButton sx={{ width: 52, height: 64, p: 0 }}>
          <PersonIcon />
        </IconButton>
        <IconButton sx={{ width: 76, height: 64, p: 0 }}>
          <ShoppingCartIcon />
        </IconButton>
      </StyledToolbar>
    </AppBar>
  );
};
