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
  const currentCurrency =
    fetchExampleCurrency.data && fetchExampleCurrency.data[31].rate.toFixed(2);
  return <div>{currentCurrency}</div>;
};

// export const goodsQuerry = async () => {
//   try {
//     return await (
//       await fetch('https://api.mantis.com.ua/report/stock', {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//           'mantis-api-key': '6ea32a8a2373eb3b46dc8884f5c83bfd799caec1'
//         }
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
//   console.log(fetchStock.data);
//   return <div>{fetchStock.data}</div>;
// };
