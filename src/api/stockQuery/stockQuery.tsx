import { useAppSelector } from 'api/hooks';
import { useQuery } from 'react-query';
import { useEffect } from 'react';
import { StringParam, useQueryParam } from 'use-query-params';

// const goodsFilteredByBrandsArr_1 = [5075];
// const goodsFilteredByCategoryArr_1 = [11470];
// const goodsFilteredByGenderArr = [5036];

export const goodsQuerry = async (
  goodsFilteredByBrandsArr: any
  // goodsFilteredByCategoryArr: any,
  // goodsFilteredBySeasonsArr: any,
  // goodsFilteredByActivitiesArr: any,
  // goodsFilteredByGenderArr: any
) => {
  // console.log(
  //   'request',
  //   goodsFilteredByBrandsArr
  //   // goodsFilteredByCategoryArr,
  //   // goodsFilteredBySeasonsArr,
  //   // goodsFilteredByActivitiesArr,
  //   // goodsFilteredByGenderArr
  // );

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
            24: [5075],
            20: [11470]
            // 24: goodsFilteredByBrandsArr.length ? goodsFilteredByBrandsArr : undefined
            // 20: goodsFilteredByCategoryArr.length ? goodsFilteredByCategoryArr : undefined,
            // 27: goodsFilteredBySeasonsArr.length ? goodsFilteredBySeasonsArr : undefined,
            // 31: goodsFilteredByActivitiesArr.length ? goodsFilteredByActivitiesArr : undefined,
            // 21: goodsFilteredByGenderArr.length ? goodsFilteredByGenderArr : undefined
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

// export const goodsQuerry = async (
//   params: any
//   // goodsFilteredByGenderArr: any,
//   // goodsFilteredByActivitiesArr: any
// ) => {
//   console.log(
//     'request',
//     params
//     // goodsFilteredByGenderArr,
//     // goodsFilteredByActivitiesArr
//   );
//   const { goodsFilteredByBrandsArr, goodsFilteredByCategoryArr, goodsFilteredBySeasonsArr } =
//     params;
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
//             24: [5075],
//             20: [11470]
//             // 24: goodsFilteredByBrandsArr.length ? goodsFilteredByBrandsArr : undefined,
//             // 20: goodsFilteredByCategoryArr.length ? goodsFilteredByCategoryArr : undefined,
//             // 27: goodsFilteredBySeasonsArr.length ? goodsFilteredBySeasonsArr : undefined
//             // 27: goodsFilteredBySeasonsArr
//             // 31: goodsFilteredByActivitiesArr,
//             // 21: goodsFilteredByGenderArr
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
