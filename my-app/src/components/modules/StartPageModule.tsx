import { AppBar, Card, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { HeaderStartPage } from 'components/HeaderStartPage/HeaderStartPage';
import { locations } from 'constans/locations';
import { NavLink } from 'react-router-dom';
export const StartPageModule = () => {
  return (
    <>
      <Box component={'div'}>
        <HeaderStartPage />
        <Box className="startpage__bg" sx={{ height: '100vh' }}>
          <Box sx={{ pt: 25 }}>
            <img
              src="https://mantis.com.ua/assets/mantis/img/logo-5.png"
              alt=""
              className="startpageLogo__img"
            />
            <Box sx={{ fontSize: '48px', color: 'white', fontWeight: '700' }}>
              OUR BRANDS SELL THEMSELVES
            </Box>
            <Box sx={{ fontSize: '22px', color: 'white', fontWeight: '700' }}>
              wholesale of sports goods
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
