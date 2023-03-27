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
import { StringParam, useQueryParam } from 'use-query-params';

import {
  getFilteredGoods
  // getGoodsFilteredByBrandsArr,
  // getGoodsFilteredByCategoryArr,
  // getGoodsFilteredBySeasonsArr,
  // getGoodsFilteredByActivitiesArr,
  // getGoodsFilteredByGenderArr
} from 'store/goodsSlice';
import { useAppDispatch, useAppSelector } from 'api/hooks';
import { Box } from '@mui/system';

const accordContent = [
  {
    title: 'Brands',
    list: [
      { name: 'Craft', number: 5075 },
      { name: 'X-bionic', number: 6430 },
      { name: 'Oakley', number: 5120 },
      // { name: 'Dainese', number: 5127 },
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
      { name: 'Winter 22', number: 20843 },
      { name: 'Summer 22', number: 20620 },
      { name: 'Winter 21', number: 20070 },
      { name: 'Summer 21', number: 19928 }
    ]
  },
  {
    title: 'Kind of activity',
    list: [
      { name: 'Bike', number: 11456 },
      { name: 'Run', number: 11455 },
      { name: 'Winter', number: 11459 },
      { name: 'Fitness', number: 11461 }
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
  const [filteringQueryString, setFilteringQueryString] = useQueryParam('eeeeee', StringParam);
  return (
    <Box>
      {accordContent.map((item) => (
        <Accordion key={item.title} sx={{ width: '300px' }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{ bgcolor: '#eeeeee' }}>
            <Typography sx={{ fontSize: '13px', fontWeight: '700', color: '#616161' }}>
              {item.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ p: 0 }}>
            <List sx={{ p: 0 }}>
              {item.list.map((i) => (
                <ListItem
                  key={i.number}
                  sx={{
                    bgcolor: '#eeeeee',
                    height: '24px',
                    fontSize: '11px',
                    fontWeight: '500',
                    color: '#616161',
                    borderTop: '1px solid #e0e0e0',
                    pl: '40px'
                  }}
                  className="filter__item"
                  onClick={() =>
                    dispatch(getFilteredGoods({ title: item.title, number: i.number }))
                  }>
                  {i.name}
                </ListItem>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};
