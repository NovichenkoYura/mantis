import { Button } from '@mui/material';
import { Box } from '@mui/system';
import { useAppDispatch, useAppSelector } from 'api/hooks';
import { useStock } from 'api/stockQuery/stockQuery';
import {
  getGoodsFilteredByBrandsArr,
  getGoodsFilteredByCategoryArr,
  getGoodsFilteredBySeasonsArr,
  getGoodsFilteredByActivitiesArr,
  getGoodsFilteredByGenderArr
} from 'store/goodsSlice';

export const FilterGoods = () => {
  const dispatch = useAppDispatch();
  // const { goodsArr } = useAppSelector((state) => state.goods);

  // const arrayBrands = [5075, 6430] as any; // click push code

  // const addBrands: any = (id: string) => {
  //   arrayBrands.push(id);
  //   console.log(arrayBrands);
  // };
  // const queryCard = useStock();
  // const queryCardInfo = queryCard.data;
  // console.log(queryCardInfo);
  return (
    <>
      <Box sx={{ width: 280, bgcolor: 'green' }}>
        <Box
          sx={{
            mt: '10px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'left',
            alignItems: 'left',
            textAlign: 'left'
          }}>
          Brands
          <Button
            id="5280"
            onClick={() => dispatch(getGoodsFilteredByBrandsArr(5075))}
            sx={{ p: 0, width: 80 }}>
            Craft
          </Button>
          <Button
            onClick={() => dispatch(getGoodsFilteredByBrandsArr(6430))}
            sx={{ p: 0, width: 80 }}>
            X-Bioni
          </Button>
          <Button
            onClick={() => dispatch(getGoodsFilteredByBrandsArr(5127))}
            sx={{ p: 0, width: 80 }}>
            Oakley
          </Button>
          <Button
            onClick={() => dispatch(getGoodsFilteredByBrandsArr(5120))}
            sx={{ p: 0, width: 80 }}>
            Dainese
          </Button>
          <Button
            onClick={() => dispatch(getGoodsFilteredByBrandsArr(5077))}
            sx={{ p: 0, width: 80 }}>
            Bolle
          </Button>
        </Box>
        <Box
          sx={{
            mt: '20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'left',
            alignItems: 'left',
            textAlign: 'left'
          }}>
          Categories
          <Button
            sx={{ p: 0, width: 80 }}
            onClick={() => dispatch(getGoodsFilteredByCategoryArr(11468))}>
            Baselayer
          </Button>
          <Button
            sx={{ p: 0, width: 80 }}
            onClick={() => dispatch(getGoodsFilteredByCategoryArr(11470))}>
            Tee
          </Button>
          <Button
            sx={{ p: 0, width: 80 }}
            onClick={() => dispatch(getGoodsFilteredByCategoryArr(11489))}>
            Gloves
          </Button>
          <Button
            sx={{ p: 0, width: 80 }}
            onClick={() => dispatch(getGoodsFilteredByCategoryArr(9698))}>
            Helmet
          </Button>
          <Button
            sx={{ p: 0, width: 80 }}
            onClick={() => dispatch(getGoodsFilteredByCategoryArr(11483))}>
            Masks
          </Button>
        </Box>

        <Box
          sx={{
            mt: '20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'left',
            alignItems: 'left',
            textAlign: 'left'
          }}>
          Season
          <Button
            sx={{ p: 0, width: 100 }}
            onClick={() => dispatch(getGoodsFilteredBySeasonsArr(20483))}>
            Winter 22
          </Button>
          <Button
            sx={{ p: 0, width: 100 }}
            onClick={() => dispatch(getGoodsFilteredBySeasonsArr(20620))}>
            Summer 22
          </Button>
          <Button
            sx={{ p: 0, width: 100 }}
            onClick={() => dispatch(getGoodsFilteredBySeasonsArr(20070))}>
            Winter 21
          </Button>
          <Button
            sx={{ p: 0, width: 100 }}
            onClick={() => dispatch(getGoodsFilteredBySeasonsArr(19928))}>
            Summer 21
          </Button>
        </Box>
        <Box
          sx={{
            mt: '20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'left',
            alignItems: 'left',
            textAlign: 'left'
          }}>
          Activity
          <Button sx={{ p: 0, width: 80 }}>Run</Button>
          <Button sx={{ p: 0, width: 80 }}>Bike</Button>
          <Button sx={{ p: 0, width: 80 }}>Winter</Button>
          <Button sx={{ p: 0, width: 80 }}>Fitness</Button>
        </Box>
        <Box
          sx={{
            mt: '20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'left',
            alignItems: 'left',
            textAlign: 'left'
          }}>
          Gender
          <Button sx={{ p: 0, width: 80 }}>Unisex</Button>
          <Button sx={{ p: 0, width: 80 }}>Men</Button>
          <Button sx={{ p: 0, width: 80 }}>Women</Button>
          <Button sx={{ p: 0, width: 80 }}>Kids</Button>
        </Box>
      </Box>
    </>
  );
};
