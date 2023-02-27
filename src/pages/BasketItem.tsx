import { Divider, IconButton } from '@mui/material';
import { Box } from '@mui/system';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { deleteOrderFromBasket } from 'store/goodsSlice';
import { useAppDispatch } from 'api/hooks';

export const BasketItem = ({ ean, color, rrp, size, qty, sku, title }) => {
  // console.log(ean, col, size);
  const dispatch = useAppDispatch();
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'left',
          alignItems: 'center',
          borderBottom: '1px solid #e0e0e0',
          width: '100%'
        }}>
        <Box sx={{ ml: '20px', p: 0 }}>
          <img src="https://img.mantis.com.ua/craft/1903176/1576/0" alt="" height="68px" />
          {/* src="https://img.mantis.com.ua/craft/1903176/1576/0" */}
          {/* src={`https://img.mantis.com.ua/craft/${sku}/${col}/0`} */}
        </Box>
        <Box sx={{ fontWeight: 700, ml: '15px' }}>{sku}</Box>
        <Box sx={{ ml: '10px' }}>{title}</Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          p: '0 20px '
        }}>
        <Box>{ean}</Box>
        <Box>
          {color}, {size}
        </Box>
        <Box>{rrp}</Box>
        <Box>{qty}</Box>
        <Box>sum</Box>
        <IconButton onClick={() => dispatch(deleteOrderFromBasket(ean))}>
          <HighlightOffIcon />
        </IconButton>
      </Box>
    </Box>
  );
};
