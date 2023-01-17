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
  // const actualCurrency = currentCurrency && currentCurrency[31].rate.toFixed(2);
  // console.log(currentCurrency && currentCurrency[31].rate.toFixed(2));
  return <div>{currentCurrency}</div>;
};
