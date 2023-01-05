flux architecture
const { cartOpen, closeCart = Function.prototype } = props;
як пояснити на співбесіді що міц код відрізняєтья від реального проекту

export const SideBar = (props) => {
  const { cartOpen, closeCart = Function.prototype } = props;
  return (
    <Drawer anchor="left" open={cartOpen} onClose={closeCart}>
      <List sx={{ width: '240px', bgcolor: '#aaa' }}>
        <ListItem>
          {/* <img
            src="https://my.mantis.com.ua/assets/images/logo/shop_logo_big.png"
            alt=""
            className="login__form__img"
          /> */}
          {/* <ListItemIcon></ListItemIcon> */}
          <ListItemText primary="Mantis B2B" />
          <Typography>test</Typography>
        </ListItem>
        <SideBarItem />
      </List>
    </Drawer>
  );
};

F12 не виглядає як МУА
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