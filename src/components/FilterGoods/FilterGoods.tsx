import { Button } from '@mui/material';
import { Box } from '@mui/system';

export const FilterGoods = () => {
  return (
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
        <Button sx={{ p: 0, width: 80 }}>Craft</Button>
        <Button sx={{ p: 0, width: 80 }}>X-Bioni</Button>
        <Button sx={{ p: 0, width: 80 }}>Oakley</Button>
        <Button sx={{ p: 0, width: 80 }}>Dainese</Button>
        <Button sx={{ p: 0, width: 80 }}>Bolle</Button>
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
        <Button sx={{ p: 0, width: 80 }}>Baselayer</Button>
        <Button sx={{ p: 0, width: 80 }}>Tee</Button>
        <Button sx={{ p: 0, width: 80 }}>Gloves</Button>
        <Button sx={{ p: 0, width: 80 }}>Helmet</Button>
        <Button sx={{ p: 0, width: 80 }}>Glasses</Button>
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
        <Button sx={{ p: 0, width: 100 }}>Winter 22</Button>
        <Button sx={{ p: 0, width: 100 }}>Summer 22</Button>
        <Button sx={{ p: 0, width: 100 }}>Winter 21</Button>
        <Button sx={{ p: 0, width: 100 }}>Summer 21</Button>
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
        <Button sx={{ p: 0, width: 80 }}>Winter activity</Button>
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
  );
};
