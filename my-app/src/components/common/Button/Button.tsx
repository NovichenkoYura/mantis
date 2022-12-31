import styled from '@emotion/styled';
import { Button } from '@mui/material';
import { StyledButton } from './styles';

interface ButtonProps {
  children?: React.ReactNode;
}

export const StyledButtonWrapper: React.FC<ButtonProps> = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};

// export const ButtonCustomComp: React.FC<ButtonProps> = ({ children }) => {
//   return (
//     <Button
//       variant="contained"
//       color="primary"
//       sx={{
//         width: 214,
//         height: 36,
//         color: 'rgba(0,0,0,0.87)',
//         backgroundColor: 'rgb(251,140,0)',
//         '&:hover': {
//           backgroundColor: '#b26a00'
//         }
//       }}>
//       {children}
//     </Button>
//   );
// };
