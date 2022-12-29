import { useQuery } from 'react-query';

import { fetchExamples } from 'api/example.ts/example';

export const useExample = () => {
  return useQuery(['example'], fetchExamples, {});
};
