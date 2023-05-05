import * as React from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import GlobalStyles from '@mui/joy/GlobalStyles';
import CssBaseline from '@mui/joy/CssBaseline';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Breadcrumbs from '@mui/joy/Breadcrumbs';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
import useScript from './useScript';
import FirstSidebar from './FirstSidebar';
import SecondSidebar from './SecondSidebar';
import Header from './Header';
import ColorSchemeToggle from './ColorSchemeToggle';
import customTheme from "../components/Theme"
import {feather} from "feather-icons"
import HomeIcon from '@mui/icons-material/Home';
import OverviewSlidebar from './OverviewSlidebar';
import { Center,Circle, Heading } from '@chakra-ui/react';
import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'
import SummarizeIcon from '@mui/icons-material/Summarize';
import { useColorScheme } from '@mui/material';
import Alluser from './AllUser';
import { useDispatch,useSelector } from 'react-redux';
import { useEffect } from 'react';
import { userdata } from '../../../redux/AdminReducer/UserReducer/action';
import PeopleIcon from '@mui/icons-material/People';
import { allproduct } from '../../../redux/AdminReducer/Allproduct/action';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AdminSlidebar from './Adminslide';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AdminTable from './AdminTable';
import ProductSlidebar from './Productsslide';
import ProductTable from './ProductTable';
import CategoryIcon from '@mui/icons-material/Category';
const useEnhancedEffect =
  typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect;

export default function Products() {
  const status = useScript(`https://cdn.jsdelivr.net/npm/feather-icons/dist/feather.min.js`);

  useEnhancedEffect(() => {

    if (typeof feather !== 'undefined') {
      // @ts-ignore
      feather.replace();
    }
  }, [status]);
  const dispatch=useDispatch()
    
  useEffect(()=>{
    //  dispatch(all)
   
  },[])
  

// console.log(userdetails.data)
// console.log(data.length)
  return (
    <CssVarsProvider disableTransitionOnChange theme={customTheme} >
      <GlobalStyles
        styles={{
          '[data-feather], .feather': {
            color: 'var(--Icon-color)',
            margin: 'var(--Icon-margin)',
            fontSize: 'var(--Icon-fontSize, 20px)',
            width: '1em',
            height: '1em',
          },
        }}
      />
      <CssBaseline />
      <Box sx={{ display: 'flex', minHeight: '100dvh' }}>
        <Header />
        <FirstSidebar />
  <ProductSlidebar/>
        <Box
          component="main"
          className="MainContent"
          sx={(theme) => ({
            px: {
              xs: 2,
              md: 6,
            },
            pt: {
              xs: `calc(${theme.spacing(2)} + var(--Header-height))`,
              sm: `calc(${theme.spacing(2)} + var(--Header-height))`,
              md: 3,
            },
            pb: {
              xs: 2,
              sm: 2,
              md: 3,
            },
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            minWidth: 0,
            height: '100dvh',
            gap: 1,
          })}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Breadcrumbs
              size="sm"
              aria-label="breadcrumbs"
              separator={<i data-feather="chevron-right" />}
              sx={{
                '--Breadcrumbs-gap': '1rem',
                '--Icon-fontSize': '16px',
                fontWeight: 'lg',
                color: 'neutral.400',
                px: 0,
              }}
            >
              <Link
                underline="none"
                color="neutral"
                fontSize="inherit"
                href="/admin/dashboard/orders"
                aria-label="Home"
              >
                <HomeIcon />
              </Link>
              <Link
                underline="hover"
                color="neutral"
                fontSize="inherit"
                href="/admin/dashboard/overview"
              >
                Overview
              </Link>
             
            </Breadcrumbs>
            <ColorSchemeToggle
              sx={{ ml: 'auto', display: { xs: 'none', md: 'inline-flex' } }}
            />
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              my: 1,
              gap: 1,
              flexWrap: 'wrap',
              '& > *': {
                minWidth: 'clamp(0px, (500px - 100%) * 999, 100%)',
                flexGrow: 1,
              },
            }}
          >
            <Typography level="h1" fontSize="xl4">
             PRODUCTS
            </Typography>
            <Box sx={{ flex: 999 }} />
            <a href="/admin/dashboard/addproduct" target="_self" > <Typography level="h1" fontStyle={"bold"} fontSize={"15px"}>ADD NEW<AddIcon /></Typography></a>
          </Box>
       <ProductTable/>
   
        </Box>
      </Box>
    </CssVarsProvider>
  );
}
