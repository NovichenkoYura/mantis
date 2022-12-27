import { Button, Dialog, DialogActions, DialogContent, TextField, Typography } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';

export const LoginModule = () => {
  return (
    <Dialog open aria-label="login">
      <DialogContent>
        <img src="https://my.mantis.com.ua/assets/images/logo/shop_logo_big.png" alt="" />
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Login"
          type="email"
          fullWidth
          variant="standard"
        />
        <TextField
          autoFocus
          margin="dense"
          id="password"
          label="Password"
          type="password"
          fullWidth
          variant="standard"
        />
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                defaultChecked
                sx={{
                  '& .MuiSvgIcon-root': { fontSize: 28 }
                }}
              />
            }
            label="Запам'ятати"
          />
        </FormGroup>
        <Typography variant="subtitle1">Забули пароль?</Typography>
        <DialogActions>
          <Button variant="contained">Увійти</Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
};
