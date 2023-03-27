import { useAppSelector } from 'api/hooks';
import { useQuery } from 'react-query';
import { goodsQuerry } from './stockQuery';

export const useStock = () => {
  // const {
  //   ...params
  //   // goodsFilteredByGenderArr,
  //   // goodsFilteredByActivitiesArr
  // } = useAppSelector((state) => state.goods);
  const {
    goodsFilteredByBrandsArr,
    goodsFilteredByCategoryArr,
    goodsFilteredBySeasonsArr,
    goodsFilteredByActivitiesArr,
    goodsFilteredByGenderArr
  } = useAppSelector((state) => state.goods);

  // console.log('hook', goodsFilteredByBrandsArr);

  // return useQuery(['stock'], goodsQuerry, {});
  return (
    // goodsFilteredByBrandsArr.length &&
    useQuery(
      [
        'stock',
        goodsFilteredByBrandsArr.length,
        goodsFilteredByCategoryArr.length,
        goodsFilteredBySeasonsArr.length,
        goodsFilteredByActivitiesArr.length,
        goodsFilteredByGenderArr.length
      ],
      () =>
        goodsQuerry(
          goodsFilteredByBrandsArr,
          goodsFilteredByCategoryArr,
          goodsFilteredBySeasonsArr,
          goodsFilteredByActivitiesArr,
          goodsFilteredByGenderArr
        )
    )
  );
};
