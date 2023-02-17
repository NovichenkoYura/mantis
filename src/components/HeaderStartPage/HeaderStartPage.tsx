import { AppBar, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useAppSelector } from 'api/hooks';
import { locations } from 'constans/locations';
import { NavLink } from 'react-router-dom';

export const HeaderStartPage = () => {
  return (
    <>
      <AppBar position="fixed" sx={{ bgcolor: '#424242', opacity: 0.6 }}>
        <Toolbar>
          <Box className="startPage__wrapper">
            <Box sx={{ display: 'flex', ml: 20 }}>
              <Typography
                variant="h6"
                component="div"
                color="#ffb400"
                sx={{
                  flexGrow: 1,
                  fontFamily: 'Open sans',
                  fontWeight: '700',
                  fontSize: '17px',
                  zIndex: 1
                }}>
                MANTIS UKRAINE
              </Typography>
              <Typography
                variant="h6"
                component="div"
                sx={{
                  flexGrow: 1,
                  fontFamily: 'Open sans',
                  fontWeight: '700',
                  fontSize: '17px',
                  zIndex: 1,
                  ml: 1.2
                }}>
                B2B & DISTRIBUTION
              </Typography>
            </Box>

            <Box className="header__title__link__wrap" sx={{ display: 'flex', ml: 60 }}>
              <NavLink to={locations.goods.path} className="header__title__link">
                GOODS
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
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};
