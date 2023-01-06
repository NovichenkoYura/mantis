import { List } from '@mui/icons-material';
import { Avatar, ListItemAvatar } from '@mui/material';
import Divider from '@mui/material/Divider/Divider';
import Drawer from '@mui/material/Drawer/Drawer';
import ListItem from '@mui/material/ListItem/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon/ListItemIcon';
import ListItemText from '@mui/material/ListItemText/ListItemText';
import Typography from '@mui/material/Typography';
import WindowSharpIcon from '@mui/icons-material/WindowSharp';
import NewspaperSharpIcon from '@mui/icons-material/NewspaperSharp';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ViewInArSharpIcon from '@mui/icons-material/ViewInArSharp';
import ArticleIcon from '@mui/icons-material/Article';
import UnarchiveIcon from '@mui/icons-material/Unarchive';
import DataObjectRoundedIcon from '@mui/icons-material/DataObjectRounded';
import ReadMoreSharpIcon from '@mui/icons-material/ReadMoreSharp';
import { StyledListItem } from './listItemStyles';

export const SideBarItem = () => {
  return (
    <>
      <StyledListItem>
        <ListItemAvatar>
          <Avatar sx={{ bgcolor: 'transparent', color: '#e0e0e0' }}>
            <WindowSharpIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Main"
          sx={{ color: '#e0e0e0' }}
          primaryTypographyProps={{ fontSize: '13px' }}
        />
      </StyledListItem>

      <StyledListItem>
        <ListItemAvatar>
          <Avatar sx={{ bgcolor: 'transparent', color: '#e0e0e0' }}>
            <NewspaperSharpIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="News"
          sx={{ color: '#e0e0e0' }}
          primaryTypographyProps={{ fontSize: '13px' }}
        />
      </StyledListItem>
      <StyledListItem>
        <ListItemAvatar>
          <Avatar sx={{ bgcolor: 'transparent', color: '#e0e0e0' }}>
            <InfoOutlinedIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Information"
          sx={{ color: '#e0e0e0' }}
          primaryTypographyProps={{ fontSize: '13px' }}
        />
      </StyledListItem>
      <StyledListItem>
        <ListItemAvatar>
          <Avatar sx={{ bgcolor: 'transparent', color: '#e0e0e0' }}>
            <ViewInArSharpIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Goods"
          sx={{ color: '#e0e0e0' }}
          primaryTypographyProps={{ fontSize: '13px' }}
        />
      </StyledListItem>
      <StyledListItem>
        <ListItemAvatar>
          <Avatar sx={{ bgcolor: 'transparent', color: '#e0e0e0' }}>
            <ArticleIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Documents"
          sx={{ color: '#e0e0e0' }}
          primaryTypographyProps={{ fontSize: '13px' }}
        />
      </StyledListItem>
      <StyledListItem>
        <ListItemAvatar>
          <Avatar sx={{ bgcolor: 'transparent', color: '#e0e0e0' }}>
            <UnarchiveIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Preorders"
          sx={{ color: '#e0e0e0' }}
          primaryTypographyProps={{ fontSize: '13px' }}
        />
      </StyledListItem>
      <StyledListItem>
        <ListItemAvatar>
          <Avatar sx={{ bgcolor: 'transparent', color: '#e0e0e0' }}>
            <DataObjectRoundedIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="API"
          sx={{ color: '#e0e0e0' }}
          primaryTypographyProps={{ fontSize: '13px' }}
        />
      </StyledListItem>
    </>
  );
};
