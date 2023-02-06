import styled from '@emotion/styled';
import { Button } from '@mui/material';

export const StyledButton = styled(Button)`
  variant: 'contained';
  width: 214px;
  height: 36px;
  color: rgba(0, 0, 0, 0.87);
  background-color: rgb(251, 140, 0);
  &:hover {
    background-color: #b26a00;
  }
`;
