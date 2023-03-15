import { useAppSelector } from 'api/hooks';
import { useQuery } from 'react-query';
import { useEffect } from 'react';
import { StringParam, useQueryParam } from 'use-query-params';

// const goodsFilteredByBrandsArr_1 = [5075];
// const goodsFilteredByCategoryArr_1 = [11470];
// const goodsFilteredByGenderArr = [5036];

export const goodsQuerry = async (goodsFilteredByBrandsArr: any) => {
  console.log(goodsFilteredByBrandsArr);
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
            24: goodsFilteredByBrandsArr
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
  const { goodsFilteredByBrandsArr } = useAppSelector((state) => state.goods);
  console.log(goodsFilteredByBrandsArr);

  return useQuery(['stock'], () => goodsQuerry(goodsFilteredByBrandsArr), {});
};

// export const goodsQuerry = async (goodsFilteredByBrandsArr: any) => {
//   // const [filteringQueryString, setFilteringQueryString] = useQueryParam('eeeeee', StringParam);
//   // console.log(filteringQueryString);
//   // const {
//   //   goodsFilteredByBrandsArr
//   //   // goodsFilteredByCategoryArr
//   //   // goodsFilteredBySeasonsArr,
//   //   // goodsFilteredByGenderArr,

//   //   // goodsFilteredByActivitiesArr
//   // } = useAppSelector((state) => state.goods);
//   // console.log(goodsFilteredByBrandsArr);
//   // const newarr = arr.push(filteringQueryString);
//   console.log(goodsFilteredByBrandsArr);
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
//           filter: {
//             24: goodsFilteredByBrandsArr_1,
//             20: goodsFilteredByCategoryArr_1
//             // 27: goodsFilteredBySeasonsArr,
//             // 31: goodsFilteredByActivitiesArr,
//             // 21: goodsFilteredByGenderArr
//             // 24: [5075] //Craft
//             // 24: [6430] // X-Bionic
//             // 24: [5127]   Oakley
//             // 24: [5120]   Dainese
//             // 24: [5077]   Bolle
//           },
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
//   //   const [filteringQueryString, setFilteringQueryString] = useQueryParam('eeeeee', StringParam);
//   //   console.log(filteringQueryString);
//   //   return useQuery(['stock', filteringQueryString], () => goodsQuerry(filteringQueryString), {});
//   const { goodsFilteredByBrandsArr } = useAppSelector((state) => state.goods);
//   console.log(goodsFilteredByBrandsArr);

//   return useQuery(['stock'], () => goodsQuerry(goodsFilteredByBrandsArr), {});
// };
