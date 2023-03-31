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

// import { Dialog as MuiDialog, DialogProps as MuiDialogProps } from '@mui/material';

type CloseReason = 'backdropClick' | 'escapeKeyDown' | 'closeButtonClick';

// interface DialogProps extends MuiDialogProps {
//   onClose: (reason: CloseReason) => void;
// }

// export interface BasketProps extends HeaderDashboardProps {
//   closeBasket: () => void;
//   onClose: () => void;
//   basketOpen: boolean;
// }

export interface TypesForGoodsPage {
  closeBasket: () => void;
  onClose: () => void;
  basketOpen: boolean;
}

export interface BasketProps extends HeaderDashboardProps, TypesForGoodsPage {}
