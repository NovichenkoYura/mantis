import { Button } from '@mui/material';

export const ButtonLoginEnter = () => {
  return (
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
  );
};
