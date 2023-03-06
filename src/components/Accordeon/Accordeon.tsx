import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  List,
  ListItem,
  Typography
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import * as React from 'react';

import {
  getFilteredGoods
  // getGoodsFilteredByBrandsArr,
  // getGoodsFilteredByCategoryArr,
  // getGoodsFilteredBySeasonsArr,
  // getGoodsFilteredByActivitiesArr,
  // getGoodsFilteredByGenderArr
} from 'store/goodsSlice';
import { useAppDispatch } from 'api/hooks';

const accordContent = [
  {
    title: 'Brands',
    list: [
      { name: 'Craft', number: 5075 },
      { name: 'X-bionic', number: 6430 },
      { name: 'Oakley', number: 5127 },
      { name: 'Dainese', number: 5120 },
      { name: 'Bolle', number: 5077 }
    ]
  },
  {
    title: 'Сategories',
    list: [
      { name: 'Baselayer', number: 11468 },
      { name: 'Tee', number: 11470 },
      { name: 'Gloves', number: 11489 },
      { name: 'Helmet', number: 9698 },
      { name: 'Masks', number: 11483 }
    ]
  },
  {
    title: 'Season',
    list: [
      { name: 'Winter 22', number: 20483 },
      { name: 'Summer 22', number: 20620 },
      { name: 'Winter 21', number: 20070 },
      { name: 'Summer 21', number: 19928 }
    ]
  },
  {
    title: 'Kind of activity',
    list: [
      { name: 'Bike', number: 455 },
      { name: 'Run', number: 456 },
      { name: 'Winter', number: 459 },
      { name: 'Fitness', number: 461 }
    ]
  },
  {
    title: 'Gender',
    list: [
      { name: 'Man', number: 5035 },
      { name: 'Woman', number: 5036 },
      { name: 'Unisex', number: 5037 },
      { name: 'Kids', number: 5048 }
    ]
  }
];

export const Accordeon = () => {
  const dispatch = useAppDispatch();
  return (
    <div>
      {accordContent.map((item) => (
        <Accordion key={item.title} sx={{ width: '400px' }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{ bgcolor: '#e0e0e0' }}>
            <Typography>{item.title}</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ p: 0 }}>
            <List sx={{ p: 0 }}>
              {item.list.map((i) => (
                <ListItem
                  key={i.number}
                  sx={{ bgcolor: '#e0e0e0' }}
                  className="filter__item"
                  onClick={() => dispatch(getFilteredGoods({ item, i.number }))}>
                  {i.name}
                </ListItem>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};
