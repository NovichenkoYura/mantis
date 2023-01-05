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

export const SideBarItem = () => {
  return (
    <>
      <ListItem>
        <ListItemAvatar>
          <Avatar sx={{ bgcolor: 'transparent' }}>
            <WindowSharpIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Main"
          sx={{ color: 'white' }}
          primaryTypographyProps={{ fontSize: '13px' }}
        />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar sx={{ bgcolor: 'transparent' }}>
            <NewspaperSharpIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="News"
          sx={{ color: 'white' }}
          primaryTypographyProps={{ fontSize: '13px' }}
        />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar sx={{ bgcolor: 'transparent' }}>
            <InfoOutlinedIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Information"
          sx={{ color: 'white' }}
          primaryTypographyProps={{ fontSize: '13px' }}
        />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar sx={{ bgcolor: 'transparent' }}>
            <ViewInArSharpIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Goods"
          sx={{ color: 'white' }}
          primaryTypographyProps={{ fontSize: '13px' }}
        />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar sx={{ bgcolor: 'transparent' }}>
            <ArticleIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Documments"
          sx={{ color: 'white' }}
          primaryTypographyProps={{ fontSize: '13px' }}
        />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar sx={{ bgcolor: 'transparent' }}>
            <UnarchiveIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Preorders"
          sx={{ color: 'white' }}
          primaryTypographyProps={{ fontSize: '13px' }}
        />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar sx={{ bgcolor: 'transparent' }}>
            <DataObjectRoundedIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="API"
          sx={{ color: 'white' }}
          primaryTypographyProps={{ fontSize: '13px' }}
        />
      </ListItem>
    </>
  );
};
