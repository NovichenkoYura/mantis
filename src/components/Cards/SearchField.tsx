import { SearchOutlined } from '@mui/icons-material';
import { Box, IconButton, Input, Typography } from '@mui/material';
import { useAppDispatch } from 'api/hooks';
import { setSearchValue } from '../../store/searhSlice';

export const SearchField = () => {
  const dispatch = useAppDispatch();

  return (
    <Box sx={{ textAlign: 'left', m: '5px 0 5px 50px' }}>
      <Input
        sx={{
          // m: '5px 0',
          width: '400px',
          height: '40px',
          backgroundColor: '#fff',
          borderBottom: '2px solid #EAEAEA'
        }}
        disableUnderline
        fullWidth
        startAdornment={
          <IconButton>
            <SearchOutlined />
          </IconButton>
        }
        onChange={(e: any) => {
          dispatch(setSearchValue(e.target.value));
        }}
      />
    </Box>
  );
};
