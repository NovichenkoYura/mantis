import styled from '@emotion/styled';
import { Button } from '@mui/material';
import { StyledButton } from './styles';

interface ButtonProps {
  children?: React.ReactNode;
}

export const StyledButtonWrapper: React.FC<ButtonProps> = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};
