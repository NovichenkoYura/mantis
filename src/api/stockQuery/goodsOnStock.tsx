import { useStock } from 'api/stockQuery/useStock';

const fetchStock = useStock();
export const fetchStockInfo = fetchStock.data && fetchStock.data.data;
