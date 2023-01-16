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
          <img
            src="https://mantis.com.ua/assets/mantis/img/logo-5.png"
            alt=""
            className="startpageLogo__img"
          />
          <Box>OUR BRANDS SELL THEMSELVES</Box>
          <Box>wholesale of sport goods</Box>
        </Box>
      </Box>
    </>
  );
};
