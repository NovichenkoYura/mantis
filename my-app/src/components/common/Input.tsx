import styled from '@emotion/styled';
import { TextField, TextFieldProps } from '@mui/material';

type InputProps = TextFieldProps;

const StyledInput = styled(TextField)`
autoFocus;
fullWidth;
variant: "standard";
`;

export const StyledInputWrapper: React.FC<InputProps> = (props) => {
  return <TextField {...props} />;
};

// export const InputLoginFormLogin = () => {
//   return (
//     <TextField
//       autoFocus
//       // margin="dense"
//       id="name"
//       label="Login"
//       type="email"
//       fullWidth
//       variant="standard"
//     />
//   );
// };

// <TextField
//   autoFocus
//   // margin="dense"
//   id="password"
//   label="Password"
//   type="password"
//   fullWidth
//   variant="standard"
// />;

// //sample

// interface ButtonProps {
//   children?: React.ReactNode;
// }

// const StyledButton = styled(Button)`
//   variant: 'contained';
//   width: 214px;
//   height: 36px;
//   color: rgba(0, 0, 0, 0.87);
//   background-color: rgb(251, 140, 0);
//   &:hover {
//     background-color: #b26a00;
//   }
// `;

// export const StyledButtonWrapper: React.FC<ButtonProps> = ({ children }) => {
//   return <StyledButton>{children}</StyledButton>;
// };
