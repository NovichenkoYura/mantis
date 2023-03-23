import { title } from 'process';
import { createSlice } from '@reduxjs/toolkit';

interface Goods {
  goodsFilteredByBrandsArr: number[];
  goodsFilteredByCategoryArr: number[];
  goodsFilteredBySeasonsArr: number[];
  goodsFilteredByActivitiesArr: number[];
  goodsFilteredByGenderArr: number[];
  goodsInfoForBasket: [];
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
    // getGoodsFilteredByBrandsArr(state, action) {
    //   state.goodsFilteredByBrandsArr.includes(action.payload)
    //     ? (state.goodsFilteredByBrandsArr = state.goodsFilteredByBrandsArr.filter(
    //         (item: any) => item !== action.payload
    //       ))
    //     : state.goodsFilteredByBrandsArr.push(action.payload);
    // },
    // getGoodsFilteredByCategoryArr(state, action) {
    //   state.goodsFilteredByCategoryArr.includes(action.payload)
    //     ? (state.goodsFilteredByCategoryArr = state.goodsFilteredByCategoryArr.filter(
    //         (item: any) => item !== action.payload
    //       ))
    //     : state.goodsFilteredByCategoryArr.push(action.payload);
    // },
    // getGoodsFilteredBySeasonsArr(state, action) {
    //   state.goodsFilteredBySeasonsArr.includes(action.payload)
    //     ? (state.goodsFilteredBySeasonsArr = state.goodsFilteredBySeasonsArr.filter(
    //         (item: any) => item !== action.payload
    //       ))
    //     : state.goodsFilteredBySeasonsArr.push(action.payload);
    // },
    // getGoodsFilteredByActivitiesArr(state, action) {
    //   state.goodsFilteredByActivitiesArr.includes(action.payload)
    //     ? (state.goodsFilteredByActivitiesArr = state.goodsFilteredByActivitiesArr.filter(
    //         (item: any) => item !== action.payload
    //       ))
    //     : state.goodsFilteredByActivitiesArr.push(action.payload);
    // },
    // getGoodsFilteredByGenderArr(state, action) {
    //   state.goodsFilteredByGenderArr.includes(action.payload)
    //     ? (state.goodsFilteredByGenderArr = state.goodsFilteredByGenderArr.filter(
    //         (item: any) => item !== action.payload
    //       ))
    //     : state.goodsFilteredByGenderArr.push(action.payload);
    // },
    getInfoFromOrderForBasket(state, action) {
      console.log(action.payload);
      state.goodsInfoForBasket.push(action.payload);
    },
    deleteOrderFromBasket(state, action) {
      console.log(action.payload);
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
