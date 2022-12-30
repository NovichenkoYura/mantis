import styled from '@emotion/styled';
import { Button } from '@mui/material';

interface ButtonProps {
  children?: React.ReactNode;
}

const StyledButton = styled(Button)`
  variant: 'contained';
  width: 214px;
  height: 36px;
  color: rgba(0, 0, 0, 0.87);
  background-color: rgb(251, 140, 0);
  &:hover {
    background-color: #b26a00;
  }
`;

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
