import { Avatar, ListItemAvatar } from '@mui/material';
import ListItemText from '@mui/material/ListItemText/ListItemText';
import WindowSharpIcon from '@mui/icons-material/WindowSharp';
import NewspaperSharpIcon from '@mui/icons-material/NewspaperSharp';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ViewInArSharpIcon from '@mui/icons-material/ViewInArSharp';
import ArticleIcon from '@mui/icons-material/Article';
import UnarchiveIcon from '@mui/icons-material/Unarchive';
import DataObjectRoundedIcon from '@mui/icons-material/DataObjectRounded';
import { StyledListItem } from './listItemStyles';
import { NavLink } from 'react-router-dom';
import { locations } from 'constans/locations';
const linksSidebar = [
  { text: 'Main', icon: WindowSharpIcon },
  { text: 'News', icon: NewspaperSharpIcon },
  { text: 'Information', icon: InfoOutlinedIcon },
  { text: 'Goods', icon: ViewInArSharpIcon },
  { text: 'Documents', icon: ArticleIcon },
  { text: 'Preorders', icon: UnarchiveIcon },
  { text: 'API', icon: DataObjectRoundedIcon }
];

export const SideBarItem = () => {
  const onSideBarItemClick = () => {
    console.log('1');
  };

  return (
    <>
      {linksSidebar.map(({ text, icon: Icon }) => (
        <StyledListItem key={text} onClick={() => onSideBarItemClick()}>
          <ListItemAvatar sx={{ pl: 0 }}>
            <Avatar sx={{ bgcolor: 'transparent', color: '#e0e0e0' }}>
              <Icon />
            </Avatar>
          </ListItemAvatar>

          <ListItemText
            primary={text}
            sx={{ color: '#e0e0e0' }}
            primaryTypographyProps={{ fontSize: '13px' }}
          />
        </StyledListItem>
      ))}
    </>
  );
};
