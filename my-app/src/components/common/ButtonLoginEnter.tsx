import { Button } from '@mui/material';

interface ButtonProps {
  children?: React.ReactNode;
}

export const ButtonLoginEnter: React.FC<ButtonProps> = ({ children }) => {
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
      {children}
    </Button>
  );
};
