import { useExample } from '../hooks/queries/useExample';

export const Example = () => {
  const fetchExampleQ = useExample();
  console.log(fetchExampleQ.data);
  return <div>Example</div>;
};
