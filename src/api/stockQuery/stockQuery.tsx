import { useQuery } from 'react-query';

export const goodsQuerry = async () => {
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
            24: [5075] //Craft
            // 24: [6430]   X-Bionic
            // 24: [5127]   Oakley
            // 24: [5120]   Dainese
            // 24: [5077]   Bolle
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
  return useQuery(['stock'], goodsQuerry, {});
};

export const Stock = () => {
  const fetchStock = useStock();
  console.log(fetchStock.data && fetchStock.data.data[0]);
  return <div>{fetchStock.data}</div>;
};
