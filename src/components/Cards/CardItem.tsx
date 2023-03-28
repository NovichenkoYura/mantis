import { Box } from '@mui/system';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import IconButton from '@mui/material/IconButton';
import { CardInfoTypes } from 'types/types';
import { useState } from 'react';
import { TableWithGoodsInfo } from './TableWithGoodsInfo';
import { Table } from '@mui/material';
import { useStock } from 'api/stockQuery/useStock';
export type omittedForItemTable = Omit<CardInfoTypes, 'category' | 'activity' | 'gender'>;

export const CardItem: React.FC<CardInfoTypes> = ({
  sku,
  title,
  brand,
  category,
  activity,
  gender,
  color
}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const fetchStock = useStock();
  const fetchStockInfo = fetchStock.data && fetchStock.data.data;
  const currentFetchStockInfo = fetchStockInfo.filter(
    (item: omittedForItemTable) => item.sku === sku
  );
  const brandname = brand.toLocaleLowerCase().replace(/(\.|-|\/|\\| )/g, '');
  const model = sku.toLocaleLowerCase().replaceAll(' ', '-');
  const colorname = color.toLocaleLowerCase();

  return (
    <>
      <Box
        sx={{
          bgcolor: '#fafafa',
          display: 'flex',
          flexDirection: 'row',
          flex: 1,
          height: '150px',
          borderBottom: `${showDropdown ? '1px solid #e0e0e0' : '2px solid #e0e0e0'}`
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
          <img
            src={`https://img.mantis.com.ua/${brandname}/${model}/${colorname}/0`}
            alt=""
            height="68px"
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'left',
            fontSize: 14,
            ml: '8px',
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
          }}>
          {gender}
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

      {showDropdown && (
        <Table
          aria-label="basic table"
          sx={{ bgcolor: '#fafafa', borderBottom: '2px solid #e0e0e0' }}>
          <thead>
            <tr>
              <th>Barcode</th>
              <th>Color</th>
              <th>Size</th>
              <th>Season</th>
              <th>Price, €</th>
              <th>Price, ₴</th>
              <th>Quantity</th>
              <th>Add to basket</th>
            </tr>
          </thead>
          <tbody>
            {currentFetchStockInfo?.map((item: omittedForItemTable) => (
              <TableWithGoodsInfo
                key={item.ean}
                ean={item.ean}
                sku={item.sku}
                title={item.title}
                color={item.color}
                size={item.size}
                season={item.season}
                rrp={item.rrp}
                rrp_uah={item.rrp_uah}
                qty={item.qty}
                brand={item.brand}
              />
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
};
