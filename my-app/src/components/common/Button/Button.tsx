import styled from '@emotion/styled';
import { Button } from '@mui/material';
import { StyledButton } from './styles';

interface ButtonProps {
  children?: React.ReactNode;
  type?: 'submit' | 'button';
}

export const StyledButtonWrapper: React.FC<ButtonProps> = ({ children, type }) => {
  return <StyledButton type={type}>{children}</StyledButton>;
};
