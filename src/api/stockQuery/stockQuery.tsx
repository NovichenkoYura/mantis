export const goodsQuerry = async (
  goodsFilteredByBrandsArr: any,
  goodsFilteredByCategoryArr: any,
  goodsFilteredBySeasonsArr: any,
  goodsFilteredByActivitiesArr: any,
  goodsFilteredByGenderArr: any
) => {
  console.log(
    'request',
    goodsFilteredByBrandsArr,
    goodsFilteredByCategoryArr,
    goodsFilteredBySeasonsArr,
    goodsFilteredByActivitiesArr,
    goodsFilteredByGenderArr
  );

  const filter = {} as any;
  if (goodsFilteredByBrandsArr.length) filter[24] = goodsFilteredByBrandsArr;
  if (goodsFilteredByCategoryArr.length) filter[20] = goodsFilteredByCategoryArr;
  if (goodsFilteredBySeasonsArr.length) filter[27] = goodsFilteredBySeasonsArr;
  if (goodsFilteredByActivitiesArr.length) filter[31] = goodsFilteredByActivitiesArr;
  if (goodsFilteredByGenderArr.length) filter[21] = goodsFilteredByGenderArr;

  // console.log(filter);

  const sendRequest = async () => {
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
              ...filter
              // 24: goodsFilteredByBrandsArr,
              // 20: [11470]
              // 24: goodsFilteredByBrandsArr.length ? goodsFilteredByBrandsArr : [],
              // 20: goodsFilteredByCategoryArr.length ? goodsFilteredByCategoryArr : []
              // 27: goodsFilteredBySeasonsArr.length ? goodsFilteredBySeasonsArr : undefined,
              // 31: goodsFilteredByActivitiesArr.length ? goodsFilteredByActivitiesArr : undefined,
              // 21: goodsFilteredByGenderArr.length ? goodsFilteredByGenderArr : undefined
            },
            show_zero: false,
            limit: 10,
            offset: 50
          })
        })
      ).json();
    } catch (error) {
      return Promise.reject(error);
    }
  };

  return goodsFilteredByBrandsArr.length ||
    goodsFilteredByCategoryArr.length ||
    goodsFilteredBySeasonsArr.length ||
    goodsFilteredByActivitiesArr.length ||
    goodsFilteredByGenderArr.length
    ? sendRequest()
    : null;
};
