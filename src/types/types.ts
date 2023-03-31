export interface CardInfoTypes {
  key: string;
  sku: string;
  title: string;
  brand: string;
  category: string;
  activity: string;
  gender: string;
  qty: number;
  ean: string;
  color: string;
  size: string;
  season: string;
  rrp: string;
  rrp_uah: string;
}

export interface TypesForBasket {
  sku: string;
  title: string;
  brand: string;
  qty: number;
  ean: string;
  color: string;
  size: string;
  rrp: string;
}

export interface HeaderDashboardProps {
  handleBasket: () => void;
  a: number;
  qty: number;
  rrp: string;
}

export interface BasketProps extends HeaderDashboardProps {
  closeBasket: () => void;
  basketOpen: () => void;
}
