import { title } from 'process';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CardInfoTypes, TypesForBasket } from 'types/types';

interface Goods {
  goodsFilteredByBrandsArr: number[];
  goodsFilteredByCategoryArr: number[];
  goodsFilteredBySeasonsArr: number[];
  goodsFilteredByActivitiesArr: number[];
  goodsFilteredByGenderArr: number[];
  goodsInfoForBasket: TypesForBasket[];
}

const initialState: Goods = {
  goodsFilteredByBrandsArr: [],
  goodsFilteredByCategoryArr: [],
  goodsFilteredBySeasonsArr: [],
  goodsFilteredByActivitiesArr: [],
  goodsFilteredByGenderArr: [],
  goodsInfoForBasket: []
};

const goodsSlice = createSlice({
  name: 'goods',
  initialState,

  reducers: {
    getFilteredGoods(state, action) {
      switch (action.payload.title) {
        case 'Brands':
          state.goodsFilteredByBrandsArr.includes(action.payload.number)
            ? (state.goodsFilteredByBrandsArr = state.goodsFilteredByBrandsArr.filter(
                (item: any) => item !== action.payload.number
              ))
            : state.goodsFilteredByBrandsArr.push(action.payload.number);
          break;
        case 'Сategories':
          state.goodsFilteredByCategoryArr.includes(action.payload.number)
            ? (state.goodsFilteredByCategoryArr = state.goodsFilteredByCategoryArr.filter(
                (item: any) => item !== action.payload.number
              ))
            : state.goodsFilteredByCategoryArr.push(action.payload.number);
          break;
        case 'Season':
          state.goodsFilteredBySeasonsArr.includes(action.payload.number)
            ? (state.goodsFilteredBySeasonsArr = state.goodsFilteredBySeasonsArr.filter(
                (item: any) => item !== action.payload.number
              ))
            : state.goodsFilteredBySeasonsArr.push(action.payload.number);
          break;
        case 'Kind of activity':
          state.goodsFilteredByActivitiesArr.includes(action.payload.number)
            ? (state.goodsFilteredByActivitiesArr = state.goodsFilteredByActivitiesArr.filter(
                (item: any) => item !== action.payload.number
              ))
            : state.goodsFilteredByActivitiesArr.push(action.payload.number);
          break;
        case 'Gender':
          state.goodsFilteredByGenderArr.includes(action.payload.number)
            ? (state.goodsFilteredByGenderArr = state.goodsFilteredByGenderArr.filter(
                (item: any) => item !== action.payload.number
              ))
            : state.goodsFilteredByGenderArr.push(action.payload.number);
          break;

        default:
          break;
      }
    },

    getInfoFromOrderForBasket(state, action: PayloadAction<TypesForBasket>) {
      state.goodsInfoForBasket.push(action.payload);
    },
    deleteOrderFromBasket(state, action) {
      state.goodsInfoForBasket = state.goodsInfoForBasket.filter(
        (item: any) => item.ean !== action.payload
      );
    }
  }
});

export const {
  // getGoodsFilteredByBrandsArr,
  // getGoodsFilteredByCategoryArr,
  // getGoodsFilteredBySeasonsArr,
  // getGoodsFilteredByActivitiesArr,
  // getGoodsFilteredByGenderArr,
  getInfoFromOrderForBasket,
  deleteOrderFromBasket,
  getFilteredGoods
} = goodsSlice.actions;
export default goodsSlice.reducer;
