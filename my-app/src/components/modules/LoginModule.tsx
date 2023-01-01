import { Card, CardMedia, Dialog, DialogActions, DialogContent, Typography } from '@mui/material';

import { Box } from '@mui/system';
import { StyledButtonWrapper } from 'components/common/Button/Button';
import { CheckBoxLoginForm } from 'components/common/CheckBoxLoginForm';
import { StyledInputWrapper } from 'components/common/Input';

export const LoginModule = () => {
  return (
    <Card sx={{ height: '100%' }}>
      <CardMedia
        component="img"
        src="https://my.mantis.com.ua/assets/images/backgrounds/i2.jpg"
        sx={{ height: '100%' }}
      />
      <Dialog open aria-label="login">
        <DialogContent sx={{ width: 320, height: 400, padding: 4 }}>
          <img
            src="https://my.mantis.com.ua/assets/images/logo/shop_logo_big.png"
            alt=""
            className="login__form__img"
          />

          <StyledInputWrapper
            id="name"
            label="Login"
            type="email"
            fullWidth
            variant="standard"
            autoFocus
            error={true}
            // helperText="helper text"
          />
          <StyledInputWrapper
            id="password"
            label="Password"
            type="password"
            fullWidth
            variant="standard"
            autoFocus
            error={true}
            // helperText="helper text"
          />

          <Box
            width="100%"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            sx={{ mt: 1 }}>
            <CheckBoxLoginForm />

            <Typography
              variant="subtitle1"
              fontSize={13}
              sx={{ color: 'rgb(251, 140, 0)' }}
              fontWeight={700}>
              Забули пароль?
            </Typography>
          </Box>

          <DialogActions>
            <Box width="100%" display="flex" justifyContent="center" alignItems="center">
              <StyledButtonWrapper>УВІЙТИ</StyledButtonWrapper>
            </Box>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </Card>
  );
};
