import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import { CustomTypograthy } from 'style';

export const CheckBoxLoginForm = () => {
  return (
    <CustomTypograthy>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              defaultChecked
              sx={{
                '& .MuiSvgIcon-root': { fontSize: 28 },
                '&.Mui-checked': {
                  color: 'rgb(251,140,0)'
                }
              }}
            />
          }
          label={<CustomTypograthy> Remember</CustomTypograthy>}
        />
      </FormGroup>
    </CustomTypograthy>
  );
};
