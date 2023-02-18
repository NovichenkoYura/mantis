import { Box } from '@mui/system';
import { useStock } from 'api/stockQuery/stockQuery';
import { CardInfoTypes } from 'types/types';
import { CardItem } from './CardItem';

export const CardList = () => {
  const fetchStock = useStock();
  const fetchStockInfo = fetchStock.data && fetchStock.data.data;
  console.log(fetchStock);

  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        {fetchStockInfo?.map((item: CardInfoTypes) => (
          <CardItem
            key={item.ean}
            sku={item.sku}
            title={item.title}
            brand={item.brand}
            category={item.category}
            activity={item.activity}
            gender={item.gender}
            qty={item.qty}
          />
        ))}
      </Box>
    </>
  );
};
