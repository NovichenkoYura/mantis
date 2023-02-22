import { Box } from '@mui/system';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import { CardInfoTypes } from 'types/types';
import { useState } from 'react';
import { TableWithGoodsInfo } from './TableWithGoodsInfo';
import { useStock } from 'api/stockQuery/stockQuery';

// type CardItemTypes = Omit<CardInfoTypes, 'ean'>;

export const CardItem: React.FC<CardInfoTypes> = ({
  sku,
  title,
  brand,
  category,
  activity,
  gender,
  qty,
  color,
  ean,
  size,
  season,
  rrp,
  rrp_uah
}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const fetchStock = useStock();
  const fetchStockInfo = fetchStock.data && fetchStock.data.data;
  const currentFetchStockInfo = fetchStockInfo.filter((item: any) => item.sku === sku);
  console.log(currentFetchStockInfo);
  return (
    <>
      <Box
        sx={{
          bgcolor: '#fafafa',
          display: 'flex',
          flexDirection: 'row',
          flex: 1,
          height: '150px',
          borderBottom: '2px solid #e0e0e0'
        }}>
        <IconButton
          onClick={() => setShowDropdown(!showDropdown)}
          sx={{
            width: 40,
            height: 40,
            p: '8px',
            bgcolor: 'transparent',
            color: '#616161',
            m: 'auto 6px auto 6px'
          }}>
          {showDropdown ? <RemoveCircleOutlineIcon /> : <AddCircleOutlineIcon />}
        </IconButton>
        <Box sx={{ m: 0, p: 0 }}>
          <img src={`https://img.mantis.com.ua/craft/${sku}/${color}/0`} alt="" height="68px" />
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'left',
            fontSize: 14,
            ml: '8px',
            // width: '200px',
            // backgroundColor: 'blue',
            p: 0
          }}>
          <Box sx={{ width: '200px' }}>{sku}</Box>
          <Box sx={{ width: '200px' }}>{title}</Box>
        </Box>
        <Box
          sx={{
            width: '100px',
            fontSize: 12,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'center'
            // backgroundColor: 'greenyellow'
          }}>
          {brand}
        </Box>
        <Box
          sx={{
            width: '150px',
            fontSize: 12,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'center'
            // backgroundColor: 'blue'
          }}>
          {category}
        </Box>
        <Box
          sx={{
            width: '150px',
            fontSize: 12,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'center'
            // backgroundColor: 'greenyellow'
          }}>
          {activity}
        </Box>
        <Box
          sx={{
            width: '100px',
            fontSize: 12,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'center'
            // backgroundColor: 'blue'
          }}>
          {gender}
        </Box>
        <Box
          sx={{
            width: '30px',
            fontSize: 12,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'center'
            // backgroundColor: 'greenyellow'
          }}>
          {qty}
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            flex: 1,
            width: '382px',
            justifyContent: 'right',
            alignItems: 'center'
          }}>
          for other info
        </Box>
      </Box>
      {showDropdown &&
        currentFetchStockInfo?.map((item: CardInfoTypes) => (
          <TableWithGoodsInfo
            key={item.ean}
            barcode={item.ean}
            сolor={item.color}
            size={item.size}
            season={item.season}
            rrp={item.rrp}
            rrp_uah={item.rrp_uah}
            quantity={item.qty}
          />
        ))}
    </>
  );
};
