import * as React from 'react';
import { Link } from '@chakra-ui/react';
import Box from '@mui/joy/Box';
import Chip from '@mui/joy/Chip';
import List from '@mui/joy/List';
import ListSubheader from '@mui/joy/ListSubheader';
import ListItem from '@mui/joy/ListItem';
import ListItemContent from '@mui/joy/ListItemContent';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import ListItemButton from '@mui/joy/ListItemButton';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import { closeSidebar } from "./Utils"
import LogoutIcon from '@mui/icons-material/Logout';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import { useNavigate } from 'react-router-dom';
import OrderTable from './OrderTable';
export default function OrderSlide() {
  const navigate=useNavigate()
    const logout=()=>{
        localStorage.removeItem("token");
        navigate("/admin/login")
    }
  return (
    <React.Fragment>
      <Box
        className="SecondSidebar-overlay"
        sx={{
          position: 'fixed',
          zIndex: 9998,
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          bgcolor: 'background.body',
          opacity: 'calc(var(--SideNavigation-slideIn, 0) - 0.2)',
          transition: 'opacity 0.4s',
          transform: {
            xs: 'translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1) + var(--SideNavigation-slideIn, 0) * var(--FirstSidebar-width, 0px)))',
            lg: 'translateX(-100%)',
          },
        }}
        onClick={() => closeSidebar()}
      />
      <Sheet
        className="SecondSidebar"
        sx={{
          position: {
            xs: 'fixed',
            lg: 'sticky',
          },
          transform: {
            xs: 'translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1) + var(--SideNavigation-slideIn, 0) * var(--FirstSidebar-width, 0px)))',
            lg: 'none',
          },
          borderRight: '1px solid',
          borderColor: 'divider',
          transition: 'transform 0.4s',
          zIndex: 9999,
          height: '100dvh',
          top: 0,
          p: 2,
          py: 3,
          flexShrink: 0,
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
      >
        <List
          sx={{
            '--ListItem-radius': '8px',
            '--ListItem-minHeight': '32px',
            '--List-gap': '4px',
          }}
        >
          <ListSubheader onClick={() => closeSidebar()} role="presentation" sx={{ color: 'text.primary' }}>
            Dashboard
          </ListSubheader>
          <ListItem>
          <a href="/admin/dashboard/overview" target="_self">  <ListItemButton >
              <ListItemDecorator>
                <i data-feather="activity" />
              </ListItemDecorator>
           <ListItemContent >Overview</ListItemContent>
            </ListItemButton></a>
          </ListItem>
          <ListItem>
          <a href="/admin/dashboard/admin" target="_self"> <ListItemButton >
              <ListItemDecorator>
                <i data-feather="bell" />
              </ListItemDecorator>
           <ListItemContent>ADMIN</ListItemContent>
           
            </ListItemButton></a>
          </ListItem>
          <ListItem>
          <a href="/admin/dashboard/orders" target="_self"> <ListItemButton selected variant="soft">
              <ListItemDecorator>
                <i data-feather="bar-chart" />
              </ListItemDecorator>
              <ListItemContent>ORDERS</ListItemContent>
            </ListItemButton></a>
          </ListItem>
          <ListItem>
          <a href="/admin/dashboard/products" target="_self"> <ListItemButton >
              <ListItemDecorator>
                <i data-feather="shopping-cart" />
              </ListItemDecorator>
               <ListItemContent>PRODUCTS </ListItemContent>
            </ListItemButton></a>
          </ListItem>
          <ListItem>
          <a href="/admin/dashboard/addproduct" target="_self"> <ListItemButton >
              <ListItemDecorator>
                <i data-feather="star" />
              </ListItemDecorator>
              <ListItemContent>ADD+</ListItemContent>
            </ListItemButton></a>
          </ListItem>
         
         
          <ListItem>
            <ListItemButton disabled>
              <ListItemDecorator>
                <i data-feather="settings" />
              </ListItemDecorator>
              <a href="/admin/dashboard/edit" target="_self" > <ListItemContent>Edit</ListItemContent></a>
            </ListItemButton>
          </ListItem>
        </List>
        <Box sx={{ pl: 1, mt: 'auto', display: 'flex', alignItems: 'center' }}>
          <div>
            <Typography fontWeight="lg" level="body2">
           @Regstuff
            </Typography>
            <Typography level="body2">REGSTUFF.com</Typography>
          </div>
          <IconButton onClick={logout} variant="plain" sx={{ ml: 'auto' }}>
            <LogoutIcon />
          </IconButton>
        </Box>
      </Sheet>
    </React.Fragment>
  );
}
