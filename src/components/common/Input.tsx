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

// const CssTextField = styled(TextField, {
//   shouldForwardProp: (props) => props !== 'focusColor'
// })((p) => ({
//   // focused color for input with variant='standard'
//   '& .MuiInput-underline:after': {
//     borderBottomColor: p.focusColor
//   }
// }));

// <CssTextField focusColor="red" />;
