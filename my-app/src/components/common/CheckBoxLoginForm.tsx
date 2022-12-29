import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';

export const CheckBoxLoginForm = () => {
  return (
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
        label="Запам'ятати"
      />
    </FormGroup>
  );
};
