import Table from '@mui/material/Table/Table';
import { Box } from '@mui/system';
import { useAppSelector } from 'api/hooks';
import { useStock } from 'api/stockQuery/useStock';
import { CardInfoTypes } from 'types/types';
import { number } from 'yup';
import { string } from 'yup/lib/locale';
import { CardItem } from './CardItem';
import { SearchField } from './SearchField';

export const CardList = () => {
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
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <SearchField />
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
