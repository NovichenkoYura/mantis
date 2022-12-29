import { Card, CardMedia, Dialog, DialogActions, DialogContent, Typography } from '@mui/material';

import { Box } from '@mui/system';
import { ButtonLoginEnter } from 'components/common/ButtonLoginEnter';
import { CheckBoxLoginForm } from 'components/common/CheckBoxLoginForm';
import { InputLoginFormLogin } from 'components/common/InputLoginFormLogin';
import { InputLoginFormPassword } from 'components/common/InputLoginFormPassword';
import { CustomTypograthy } from 'style';

export const LoginModule = () => {
  return (
    <Card sx={{ height: '100%' }}>
      <CardMedia
        component="img"
        src="https://my.mantis.com.ua/assets/images/backgrounds/i2.jpg"
        sx={{ height: '100%' }}
      />
      <Dialog open aria-label="login">
        <DialogContent sx={{ width: 320, height: 400 }}>
          <img
            src="https://my.mantis.com.ua/assets/images/logo/shop_logo_big.png"
            alt=""
            className="login__form__img"
          />
          <InputLoginFormLogin />
          <InputLoginFormPassword />

          <Box width="100%" display="flex" justifyContent="space-between" alignItems="center">
            <CheckBoxLoginForm />

            <Typography variant="subtitle1" fontSize={14}>
              Забули пароль?
            </Typography>
          </Box>

          <DialogActions>
            <Box width="100%" display="flex" justifyContent="center" alignItems="center">
              <ButtonLoginEnter>Test</ButtonLoginEnter>
            </Box>
          </DialogActions>
          <CustomTypograthy>Cuatom</CustomTypograthy>
        </DialogContent>
      </Dialog>
    </Card>
  );
};
