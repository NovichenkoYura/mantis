import { TextField } from '@mui/material';

export const InputLoginFormLogin = () => {
  return (
    <TextField
      autoFocus
      // margin="dense"
      id="name"
      label="Login"
      type="email"
      fullWidth
      variant="standard"
    />
  );
};
