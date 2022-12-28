import {
  Button,
  Card,
  CardMedia,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  TextField,
  Typography
} from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import { Box } from '@mui/system';

import { createTheme } from '@mui/material/styles';

import { purple } from '@mui/material/colors';

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: purple[500]
//     },
//     secondary: {
//       main: '#ff9800'
//     }
//   }
// });

const theme = createTheme({
  palette: {
    success: {
      main: purple[500]
    },
    secondary: {
      main: '#ff9800'
    }
  }
});

export const LoginModule = () => {
  return (
    <Card sx={{ height: '100%' }}>
      <CardMedia
        component="img"
        src="https://my.mantis.com.ua/assets/images/backgrounds/i2.jpg"
        sx={{ height: '100%' }}
      />
      <Dialog open aria-label="login">
        <DialogContent>
          <img
            src="https://my.mantis.com.ua/assets/images/logo/shop_logo_big.png"
            alt=""
            className="login__form__img"
          />
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
          <Box width="100%" display="flex" justifyContent="space-between" alignItems="center">
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    sx={{
                      '& .MuiSvgIcon-root': { fontSize: 28 },
                      '&.Mui-checked': {
                        color: 'rgb(251,140,0)'
                      }
                    }}
                  />
                }
                label="Запам'ятати"
              />
            </FormGroup>
            <Typography variant="subtitle1">Забули пароль?</Typography>
          </Box>

          <DialogActions>
            <Box width="100%" display="flex" justifyContent="center" alignItems="center">
              <Button
                variant="contained"
                color="primary"
                sx={{
                  width: 214,
                  height: 36,
                  color: 'rgba(0,0,0,0.87)',
                  backgroundColor: 'rgb(251,140,0)',
                  '&:hover': {
                    backgroundColor: '#b26a00'
                  }
                }}>
                Увійти
              </Button>
            </Box>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </Card>
  );
};
