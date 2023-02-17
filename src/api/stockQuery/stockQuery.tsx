import { useAppSelector } from 'api/hooks';
import { useQuery } from 'react-query';

// const { goodsArr } = useAppSelector((state) => state.goods);
// console.log(goodsArr);

const arrGoodsByBrands = [5075];
const arrGoodsByCategories = [11470];
const arrGoodsBySeasons = [20070];

export const goodsQuerry = async () => {
  try {
    return await (
      await fetch('https://api.mantis.com.ua/report/stock', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          accept: 'application/json',
          'mantis-api-key': '6ea32a8a2373eb3b46dc8884f5c83bfd799caec1'
        },
        body: JSON.stringify({
          filter: {
            24: arrGoodsByBrands,
            20: arrGoodsByCategories,
            27: arrGoodsBySeasons
            //24: [5075]  //Craft
            // 24: [6430] // X-Bionic
            // 24: [5127]   Oakley
            // 24: [5120]   Dainese
            // 24: [5077]   Bolle
          },
          // sku: ['1905319']
          // query: 'Resolve',
          show_zero: false
        })
      })
    ).json();
  } catch (error) {
    return Promise.reject(error);
  }
};

export const useStock = () => {
  return useQuery(['stock'], goodsQuerry, {});
};

export const Stock = () => {
  const fetchStock = useStock();
  console.log(fetchStock.data && fetchStock.data.data);
  return <div>1</div>;
};

// const { goodsArr } = useAppSelector((state) => state.goods);

// const arrayBrands = [5075, 6430] as any; // click push code

// const filterObj = {
//   24: arrayBrands //Craft
//   // 24: [6430] // X-Bionic
//   // 24: [5127]   Oakley
//   // 24: [5120]   Dainese
//   // 24: [5077]   Bolle
//   // 43: arrayCategogy
// };
// export const goodsQuerry = async (arrayBrands: any, filterObj: any) => {
//   try {
//     return await (
//       await fetch('https://api.mantis.com.ua/report/stock', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           accept: 'application/json',
//           'mantis-api-key': '6ea32a8a2373eb3b46dc8884f5c83bfd799caec1'
//         },
//         body: JSON.stringify({
//           filter: filterObj,
//           // sku: ['1905319']
//           // query: 'Resolve',
//           show_zero: false
//         })
//       })
//     ).json();
//   } catch (error) {
//     return Promise.reject(error);
//   }
// };

// export const useStock = () => {
//   return useQuery(['stock'], goodsQuerry, {});
// };

// export const Stock = () => {
//   const fetchStock = useStock();
//   console.log(fetchStock.data && fetchStock.data);
//   return <div>1</div>;
// };
