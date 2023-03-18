import Table from '@mui/material/Table/Table';
import { Box } from '@mui/system';
import { useAppSelector } from 'api/hooks';
import { useStock } from 'api/stockQuery/useStock';
import { CardInfoTypes } from 'types/types';
import { number } from 'yup';
import { CardItem } from './CardItem';

export const CardList = () => {
  // const { goodsFilteredByBrandsArr } = useAppSelector((state) => state.goods);

  // console.log(goodsFilteredByBrandsArr);

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
