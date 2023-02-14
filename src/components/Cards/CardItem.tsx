import { Box } from '@mui/system';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';

export const CardItem = () => {
  return (
    <Box
      sx={{
        bgcolor: '#fafafa',
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
        height: '150px',
        borderBottom: '2px solid #e0e0e0'
      }}>
      <IconButton sx={{ width: 76, height: 64, p: 0, bgcolor: 'transparent', color: '#616161' }}>
        <AddCircleOutlineIcon />
      </IconButton>
      <img src="https://img.mantis.com.ua/craft/1903176/1576/0" alt="" height="68px" />
      <Box>sku</Box>
      <Box>title</Box>
      <Box>brand</Box>
      <Box>category</Box>
      <Box>activity</Box>
      <Box>gender</Box>
      <Box>qty</Box>
      <Box>container</Box>
    </Box>
  );
};
