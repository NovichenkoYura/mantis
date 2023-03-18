import { useAppSelector } from 'api/hooks';
import { useQuery } from 'react-query';
import { goodsQuerry } from './stockQuery';

export const useStock = () => {
  const {
    ...params
    // goodsFilteredByGenderArr,
    // goodsFilteredByActivitiesArr
  } = useAppSelector((state) => state.goods);
  console.log('hook', params);

  // return useQuery(['stock'], goodsQuerry, {});
  return useQuery(['stock', params], () => goodsQuerry(params));
};
