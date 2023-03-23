import Table from '@mui/material/Table/Table';
import { useAppSelector } from 'api/hooks';
import { useStock } from 'api/stockQuery/useStock';
import { CardInfoTypes } from 'types/types';
import { number } from 'yup';
import { string } from 'yup/lib/locale';
import { CardItem } from './CardItem';
import { SearchField } from './SearchField';
import { Box, IconButton, Input, Typography } from '@mui/material';
import { SearchOutlined } from '@mui/icons-material';
import { useState } from 'react';
import React from 'react';

export const CardList = () => {
  const [searchedInfo, setSearchedInfo] = useState('');
  console.log(searchedInfo);

  const fetchStock = useStock();
  const fetchStockInfo = fetchStock.data && fetchStock.data.data;
  console.log(fetchStockInfo);

  const filteredByUniqSku: CardInfoTypes[] = [];

  fetchStockInfo?.forEach((item: CardInfoTypes) => {
    const uniqSku = filteredByUniqSku.find((el) => el.sku === item.sku);
    if (uniqSku) {
      uniqSku.qty += item.qty;
    } else {
      filteredByUniqSku.push(item);
    }
  });

  return (
    <>
      <React.Fragment>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <SearchField>
            <Box sx={{ textAlign: 'left', m: '5px 0 5px 50px' }}>
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
            </Box>
          </SearchField>
          {filteredByUniqSku?.map((item: CardInfoTypes) => (
            <CardItem
              key={item.ean}
              sku={item.sku}
              title={item.title}
              brand={item.brand}
              category={item.category}
              activity={item.activity}
              gender={item.gender}
              qty={item.qty}
              color={item.color}
              ean={item.ean}
              size={item.size}
              season={item.season}
              rrp={item.rrp}
              rrp_uah={item.rrp_uah}
            />
          ))}
        </Box>
      </React.Fragment>
    </>
  );
};

// return (
//   <>
//     <Box sx={{ display: 'flex', flexDirection: 'column' }}>
//       {fetchStockInfo?.map((item: CardInfoTypes) => (
//         <CardItem
//           key={item.ean}
//           sku={item.sku}
//           title={item.title}
//           brand={item.brand}
//           category={item.category}
//           activity={item.activity}
//           gender={item.gender}
//           qty={item.qty}
//           color={item.color}
//           ean={item.ean}
//           size={item.size}
//           season={item.season}
//           rrp={item.rrp}
//           rrp_uah={item.rrp_uah}
//         />
//       ))}
//     </Box>
//   </>
// );
// };
