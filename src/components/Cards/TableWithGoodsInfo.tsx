import Table from '@mui/material/Table';

export const TableWithGoodsInfo = () => {
  return (
    <Table aria-label="basic table">
      <thead>
        <tr>
          <th>Barcode</th>
          <th>Color</th>
          <th>Size</th>
          <th>Season</th>
          <th>Cost, €</th>
          <th>Cost, ₴</th>
          <th>Quantity</th>
          <th>Add to basket</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Frozen yoghurt</td>
          <td>159</td>
          <td>6</td>
          <td>24</td>
          <td>4</td>
        </tr>
      </tbody>
    </Table>
  );
};
