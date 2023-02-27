import Input from '@mui/material/Input/Input';
import Table from '@mui/material/Table';
import { color } from '@mui/system';
import { useAppDispatch } from 'api/hooks';
import { getInfoFromOrderForBasket } from 'store/goodsSlice';

export const TableWithGoodsInfo = ({
  barcode,
  sku,
  title,
  сolor,
  size,
  season,
  rrp,
  rrp_uah,
  quantity
}) => {
  const dispatch = useAppDispatch();

  return (
    <Table aria-label="basic table" sx={{ bgcolor: '#fafafa' }}>
      <thead>
        <tr>
          <th>Barcode</th>
          <th>Color</th>
          <th>Size</th>
          <th>Season</th>
          <th>Price, €</th>
          <th>Price, ₴</th>
          <th>Quantity</th>
          <th>Add to basket</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{barcode}</td>
          <td>{сolor}</td>
          <td>{size}</td>
          <td>{season}</td>
          <td>{rrp}</td>
          <td>{rrp_uah}</td>
          <td>{quantity}</td>
          <td>
            <Input
              sx={{ bgcolor: 'white', width: '80px', height: '20px' }}
              type="number"
              disableUnderline
              onChange={(e) =>
                dispatch(
                  getInfoFromOrderForBasket({
                    qty: +e.target.value,
                    ean: barcode,
                    сolor: сolor,
                    size: size,
                    rrp: rrp,
                    sku: sku,
                    title: title
                  })
                )
              }
            />
          </td>
        </tr>
      </tbody>
    </Table>
  );
};
