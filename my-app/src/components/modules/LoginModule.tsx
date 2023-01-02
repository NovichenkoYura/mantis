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

export const LoginModule = () => {
  const dispatch = useAppDispatch();

  const validationSchema = useMemo(() => {
    return Yup.object({
      email: Yup.string().email().required('Required'),
      password: Yup.string().min(5).max(500).required('Required')
    });
  }, []);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: (values, { resetForm }) => {
      dispatch(
        loginThunk({
          email: values.email,
          password: values.password
        })
      );
      resetForm();
    },
    validationSchema
  });
  return (
    <form onSubmit={formik.handleSubmit} className="registrationForm__container logIn">
      <div className="formik-form">
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
                component={'div'}
                width="100%"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                sx={{ mt: 1 }}>
                <CheckBoxLoginForm />

                <Typography
                  component={'div'}
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
                  <StyledButtonWrapper>УВІЙТИ</StyledButtonWrapper>
                </Box>
              </DialogActions>
            </DialogContent>
          </Dialog>
        </Card>

        {/* <input
          id="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          className="formik-input"
          placeholder="Your email..."
        />
        <p className="formik-errors-message">{formik.errors.email}</p>

        <input
          id="name"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          className="formik-input"
          placeholder="Your password..."
        />
        <p className="formik-errors-message">{formik.errors.password}</p>

        <button type="submit" className="main__button">
          Log in
        </button> */}
      </div>
    </form>
  );
};
