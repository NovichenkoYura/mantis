import { useQuery } from 'react-query';

export const currencyQuerry = async () => {
  try {
    return await (
      await fetch(`https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json`)
    ).json();
  } catch (error) {
    return Promise.reject(error);
  }
};

export const useCurrencyRate = () => {
  return useQuery(['currency'], currencyQuerry, {});
};

export const ExampleСurrency = () => {
  const fetchExampleCurrency = useCurrencyRate();
  const currentCurrency = fetchExampleCurrency.data;
  console.log(currentCurrency && currentCurrency[31].rate.toFixed(2));
  return <div>ExampleCurrency</div>;
};

// export const fetchExamples = async () => {
//   try {
//     return await (await fetch(`https://jsonplaceholder.typicode.com/todos/`)).json();
//   } catch (error) {
//     return Promise.reject(error);
//   }
// };

// export const HeaderDashboard = () => {
//     const [cur, setCur] = useState(null);
//     axios.get('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json').then((res) => {
//       const currencyRate = res.data[31].rate.toFixed(2);
//       setCur(currencyRate);
//     });

//     function Example() {
//         const { isLoading, error, data } = useQuery('repoData', () =>
//           fetch('https://api.github.com/repos/tannerlinsley/react-query').then(res =>
//             res.json()
//           )
//         )
