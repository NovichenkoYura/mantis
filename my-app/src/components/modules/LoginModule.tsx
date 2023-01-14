import { Card, CardMedia, Dialog, DialogActions, DialogContent, Typography } from '@mui/material';

import { Box } from '@mui/system';
import { StyledButtonWrapper } from 'components/common/Button/Button';
import { CheckBoxLoginForm } from 'components/common/CheckBoxLoginForm';
import { StyledInputWrapper } from 'components/common/Input';
import React, { useMemo } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useAppDispatch } from 'api/hooks';
import { loginThunk } from 'store/usersSlice';
// import red from '@mui/material/colors';
// import { createRoot } from 'react-dom/client';
// const container = document.getElementById('root');
// const root = createRoot(container!);

export const LoginModule = () => {
  const dispatch = useAppDispatch();

  const validationSchema = useMemo(() => {
    return Yup.object({
      login: Yup.string().required('Login field is required'),
      password: Yup.string().required('Password field is required')
    });
  }, []);

  const formik = useFormik({
    initialValues: {
      login: '',
      password: ''
    },
    onSubmit: async (values, { resetForm }) => {
      console.log(values);
      dispatch(
        loginThunk({
          login: values.login,
          password: values.password
        })
      );
      resetForm();
    },
    validationSchema
  });
  return (
    <div>
      <Card sx={{ height: '100%' }}>
        <CardMedia
          component="img"
          src="https://my.mantis.com.ua/assets/images/backgrounds/i2.jpg"
          sx={{ height: '100%' }}
        />

        <Dialog open aria-label="login">
          <DialogContent sx={{ width: 320, padding: 4 }}>
            <img
              src="https://my.mantis.com.ua/assets/images/logo/shop_logo_big.png"
              alt=""
              className="login__form__img"
            />
            <form onSubmit={formik.handleSubmit}>
              <StyledInputWrapper
                id="login"
                placeholder="Login"
                type="login"
                fullWidth
                variant="standard"
                autoFocus
                value={formik.values.login}
                onChange={formik.handleChange}
                error={formik.touched.login && Boolean(formik.errors.login)}
                helperText={formik.touched.login && formik.errors.login}
                size="small"
              />
              <Typography sx={{ fontSize: 11, color: '#d50000' }}>{formik.errors.login}</Typography>
              <StyledInputWrapper
                id="password"
                // label="Password"
                placeholder="Password"
                type="password"
                fullWidth
                variant="standard"
                autoFocus
                value={formik.values.password}
                onChange={formik.handleChange}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
                sx={{ mt: 2 }}
              />
              <Typography sx={{ fontSize: 11, color: '#d50000' }}>
                {formik.errors.password}
              </Typography>

              <Box
                component={'div'}
                width="100%"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                sx={{ mt: 1 }}>
                <CheckBoxLoginForm />

                <Typography
                  component={'span'}
                  variant="subtitle1"
                  fontSize={13}
                  sx={{ color: 'rgb(251, 140, 0)' }}
                  fontWeight={700}>
                  Забули пароль?
                </Typography>
              </Box>

              <DialogActions>
                <Box
                  width="100%"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  component={'div'}>
                  <StyledButtonWrapper type="submit">УВІЙТИ</StyledButtonWrapper>
                </Box>
              </DialogActions>
            </form>
          </DialogContent>
        </Dialog>
      </Card>
    </div>
  );
};
// ReactDOM.render(<LoginModule />, document.getElementById('root'));

// root.render(<LoginModule />);
