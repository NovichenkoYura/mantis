import { Button, Dialog, DialogActions, DialogContent, TextField } from '@mui/material';

export const LoginModule = () => {
  return (
    <Dialog open aria-label="login">
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Email Address"
          type="email"
          fullWidth
          variant="standard"
        />
        <TextField
          autoFocus
          margin="dense"
          id="password"
          label="password"
          type="password"
          fullWidth
          variant="standard"
        />
        <DialogActions>
          <Button variant="contained">Увійти</Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
};
