import { AppBar, Toolbar, Typography } from '@mui/material';
import { locations } from 'constans/locations';
import { NavLink } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
export const HeaderDashboard = () => {
  return (
    <AppBar color="transparent">
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          color="#ffb400"
          sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
          MANTIS UKRAINE
        </Typography>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
          B2B & DISTRIBUTION
        </Typography>

        <div className="header__title__link__wrap">
          <NavLink to={locations.dashboard.path} className="header__title__link">
            DASHBOARD
          </NavLink>
          <NavLink to={locations.login.path} className="header__title__link">
            ENGLISH
          </NavLink>
          <NavLink to={locations.login.path} className="header__title__link">
            ФОРУМ
          </NavLink>
          <NavLink to={locations.login.path} className="header__title__link">
            ВХІД ДЛЯ ДИЛЕРІВ
          </NavLink>
        </div>
      </Toolbar>
    </AppBar>
  );
};
