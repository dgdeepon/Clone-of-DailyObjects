import * as React from 'react';
import GlobalStyles from '@mui/joy/GlobalStyles';
import Avatar from '@mui/joy/Avatar';
import Divider from '@mui/joy/Divider';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import Sheet from '@mui/joy/Sheet';
import MuiLogo from './MuiLogo';
import { openSidebar } from "../components/Utils"
import SettingsIcon from '@mui/icons-material/Settings';
import PeopleIcon from '@mui/icons-material/People';
import AddHomeIcon from '@mui/icons-material/AddHome';
import SlideshowIcon from '@mui/icons-material/Slideshow';
export default function FirstSidebar() {
  return (
    <Sheet
      className="FirstSidebar"
      variant="soft"
      color="primary"
      invertedColors
      sx={{
        position: {
          xs: 'fixed',
          md: 'sticky',
        },
        transform: {
          xs: 'translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1)))',
          md: 'none',
        },
        transition: 'transform 0.4s',
        zIndex: 10000,
        height: '100dvh',
        width: 'var(--FirstSidebar-width)',
        top: 0,
        p: 1.5,
        py: 3,
        flexShrink: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2,
        borderRight: '1px solid',
        borderColor: 'divider',
      }}
    >
      <GlobalStyles
        styles={{
          ':root': {
            '--FirstSidebar-width': '68px',
          },
        }}
      />
      <MuiLogo />
      <List sx={{ '--ListItem-radius': '8px', '--List-gap': '12px' }}>
      <ListItem>
          <ListItemButton onClick={() => openSidebar()}>
            <SlideshowIcon/>
          </ListItemButton>
        </ListItem>
        <ListItem>
        <a href="/admin/dashboard/overview" target="_self"> <ListItemButton>
            <AddHomeIcon/>
          </ListItemButton></a>
        </ListItem>
      
    
        

        
        <ListItem>
        <a href="/admin/dashboard/admin" target="_self"> <ListItemButton>
            <PeopleIcon/>
          </ListItemButton></a>
        </ListItem>
      </List>
      <List
        sx={{
          mt: 'auto',
          flexGrow: 0,
          '--ListItem-radius': '8px',
          '--List-gap': '8px',
        }}
      >
     
        <ListItem>
        <a href="/admin/dashboard/addproduct" target="_self"> <ListItemButton>
            <SettingsIcon/>
          </ListItemButton></a>
        </ListItem>
      </List>
      <Divider />
      {/* <Avatar variant="outlined" src="/static/images/avatar/3.jpg" /> */}
    </Sheet>
  );
}
