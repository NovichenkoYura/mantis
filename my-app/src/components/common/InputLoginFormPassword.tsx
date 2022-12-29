import { TextField } from '@mui/material';

export const InputLoginFormPassword = () => {
  return (
    <TextField
      autoFocus
      // margin="dense"
      id="password"
      label="Password"
      type="password"
      fullWidth
      variant="standard"
    />
  );
};
