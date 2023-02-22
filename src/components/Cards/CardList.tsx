import { Box } from '@mui/system';
import { useStock } from 'api/stockQuery/stockQuery';
import { CardInfoTypes } from 'types/types';
import { CardItem } from './CardItem';

export const CardList = () => {
  const fetchStock = useStock();
  const fetchStockInfo = fetchStock.data && fetchStock.data.data;
  console.log(fetchStockInfo);

  // const arr1 = fetchStockInfo.reduce((acc: any, value: any) => {
  //   const sku = value.sku;
  //   const uniqSku = acc.find((element: any) => element.sku === sku);

  //   if (uniqSku !== undefined) uniqSku.qty += value.qty;
  //   else acc.push(value);

  //   return acc;
  // }, []);

  // console.log(arr1);

  // const tmpArray: any = [];

  // function itemCheck(item: any) {
  //   if (tmpArray.indexOf(item.sku) === -1) {
  //     tmpArray.push(item.sku);
  //     return true;
  //   }
  //   return false;
  // }

  // console.log(fetchStockInfo.filter((item: any) => itemCheck(item)));

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
