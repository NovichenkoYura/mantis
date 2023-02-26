import { createSlice } from '@reduxjs/toolkit';

interface Goods {
  goodsFilteredByBrandsArr: number[];
  goodsFilteredByCategoryArr: number[];
  goodsFilteredBySeasonsArr: number[];
  goodsFilteredByActivitiesArr: number[];
  goodsFilteredByGenderArr: number[];
  qtyEanForBasket: [];
}

const initialState: Goods = {
  goodsFilteredByBrandsArr: [],
  goodsFilteredByCategoryArr: [],
  goodsFilteredBySeasonsArr: [],
  goodsFilteredByActivitiesArr: [],
  goodsFilteredByGenderArr: [],
  qtyEanForBasket: []
};

const goodsSlice = createSlice({
  name: 'goods',
  initialState,

  reducers: {
    getGoodsFilteredByBrandsArr(state, action) {
      state.goodsFilteredByBrandsArr.includes(action.payload)
        ? (state.goodsFilteredByBrandsArr = state.goodsFilteredByBrandsArr.filter(
            (item: any) => item !== action.payload
          ))
        : state.goodsFilteredByBrandsArr.push(action.payload);
    },
    getGoodsFilteredByCategoryArr(state, action) {
      state.goodsFilteredByCategoryArr.includes(action.payload)
        ? (state.goodsFilteredByCategoryArr = state.goodsFilteredByCategoryArr.filter(
            (item: any) => item !== action.payload
          ))
        : state.goodsFilteredByCategoryArr.push(action.payload);
    },
    getGoodsFilteredBySeasonsArr(state, action) {
      state.goodsFilteredBySeasonsArr.includes(action.payload)
        ? (state.goodsFilteredBySeasonsArr = state.goodsFilteredBySeasonsArr.filter(
            (item: any) => item !== action.payload
          ))
        : state.goodsFilteredBySeasonsArr.push(action.payload);
    },
    getGoodsFilteredByActivitiesArr(state, action) {
      state.goodsFilteredByActivitiesArr.includes(action.payload)
        ? (state.goodsFilteredByActivitiesArr = state.goodsFilteredByActivitiesArr.filter(
            (item: any) => item !== action.payload
          ))
        : state.goodsFilteredByActivitiesArr.push(action.payload);
    },
    getGoodsFilteredByGenderArr(state, action) {
      state.goodsFilteredByGenderArr.includes(action.payload)
        ? (state.goodsFilteredByGenderArr = state.goodsFilteredByGenderArr.filter(
            (item: any) => item !== action.payload
          ))
        : state.goodsFilteredByGenderArr.push(action.payload);
    },
    getInfoFromOrderForBasket(state, action) {
      console.log(typeof action.payload);
      state.qtyEanForBasket.push(action.payload);
      // state.qtyGoodsInBasket = action.payload.qty;
      // state.eanGoodsInBasket = action.payload.ean;
    }
  }
});

export const {
  getGoodsFilteredByBrandsArr,
  getGoodsFilteredByCategoryArr,
  getGoodsFilteredBySeasonsArr,
  getGoodsFilteredByActivitiesArr,
  getGoodsFilteredByGenderArr,
  getInfoFromOrderForBasket
} = goodsSlice.actions;
export default goodsSlice.reducer;
