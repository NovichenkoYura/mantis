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

export const SideBarItem = () => {
  return (
    <>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <WindowSharpIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Main" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <NewspaperSharpIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="News" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <InfoOutlinedIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Information" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ViewInArSharpIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Goods" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ArticleIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Documments" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <UnarchiveIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Preorders" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <DataObjectRoundedIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="API" />
      </ListItem>
    </>
  );
};
