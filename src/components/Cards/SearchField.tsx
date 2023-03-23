import { SearchOutlined } from '@mui/icons-material';
import { Box, IconButton, Input, Typography } from '@mui/material';
import { useAppDispatch } from 'api/hooks';
import { setSearchValue } from '../../store/searhSlice';
import { useState } from 'react';

export interface SearchProps {
  children: any;
}

export const SearchField: React.FC<SearchProps> = ({ children }) => {
  // const dispatch = useAppDispatch();
  // const [searchedInfo, setSearchedInfo] = useState('');
  // console.log(searchedInfo);

  return (
    <>
      <div>{children}</div>
    </>
  );
};

// import { SearchOutlined } from '@mui/icons-material';
// import { Box, IconButton, Input, Typography } from '@mui/material';
// import { useAppDispatch } from 'api/hooks';
// import { setSearchValue } from '../../store/searhSlice';
// import { useState } from 'react';

// export const SearchField = () => {
//   const dispatch = useAppDispatch();
//   const [searchedInfo, setSearchedInfo] = useState('');
//   console.log(searchedInfo);
{
  /* <Box sx={{ textAlign: 'left', m: '5px 0 5px 50px' }}>
      <Input
        sx={{
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
        // onChange={(e: any) => {
        //   dispatch(setSearchValue(e.target.value));
        // }}
        onChange={(e) => setSearchedInfo(e.target.value)}
      />
    </Box> */
}
