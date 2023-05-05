import * as React from 'react';
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import GlobalStyles from '@mui/joy/GlobalStyles';
import CssBaseline from '@mui/joy/CssBaseline';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Checkbox from '@mui/joy/Checkbox';
import {Image,Avatar} from "@chakra-ui/react"
import FormControl from '@mui/joy/FormControl';
import FormLabel, { formLabelClasses } from '@mui/joy/FormLabel';
import IconButton, { IconButtonProps } from '@mui/joy/IconButton';
import Link from '@mui/joy/Link';
import Input from '@mui/joy/Input';
import Typography from '@mui/joy/Typography';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import customTheme from "./Theme"
import GoogleIcon from './GoogleIcon';
import regstuffimage from "./Images/RegStuff.png"
import regstuffimage2 from "./Images/RegStuff2.png"
import logo from "./Images/logo.png"
import LoginIcon from '@mui/icons-material/Login';
import { Link as NavLink, useNavigate } from 'react-router-dom';
import { adminregister } from '../redux/AdminReducer/Register/Action';
import { useToast } from '@chakra-ui/react'
import {useDispatch,useSelector} from 'react-redux'
function ColorSchemeToggle({ onClick, ...props }) {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return <IconButton size="sm" variant="plain" color="neutral" disabled />;
  }
  return (
    <IconButton
      id="toggle-mode"
      size="sm"
      variant="plain"
      color="neutral"
      {...props}
      onClick={(event) => {
        if (mode === 'light') {
          setMode('dark');
        } else {
          setMode('light');
        }
        onClick?.(event);
      }}
    >
      {mode === 'light' ? <DarkModeRoundedIcon /> : <LightModeRoundedIcon />}
    </IconButton>
  );
}

/**
 * This template uses [`Inter`](https://fonts.google.com/specimen/Inter?query=inter) font.
 */
const initialdata={
  "name":"",
  "email":"",
  "password":"",
  "department":""
}
export default function Register() {
  const [registerdata,setRegisterdata]=React.useState(initialdata)

  const handlechange=(e)=>{
const {name,value}=e.target
setRegisterdata({...registerdata,[name]:value})
}
  const dispatch=useDispatch()
  const toast=useToast()
  const navigate=useNavigate()
  const data=useSelector((state)=>state.adminregister)
  const handlesubmit=(e)=>{
    e.preventDefault()
    const token=JSON.parse(localStorage.getItem("token"))
    if(token){

    
    dispatch(adminregister(registerdata)).then((res)=>{
      toast({ description: `${res.data.success}`,position:"top "})
      navigate("/admin/dashboard/admin ")
    }).catch((err)=>{
      console.log(err)
      toast({ description: `${err.response.data.failed}`,position:"top "})
    
    })}else{
      alert("!!You Are Not Authorised To Do This Operation")
  }
    
  }
  return (
    <CssVarsProvider
      defaultMode="dark"
      disableTransitionOnChange
      theme={customTheme}
    >
      <CssBaseline />
      <GlobalStyles
        styles={{
          ':root': {
            '--Collapsed-breakpoint': '769px', // form will stretch when viewport is below `769px`
            '--Cover-width': '40vw', // must be `vw` only
            '--Form-maxWidth': '700px',
            '--Transition-duration': '0.4s', // set to `none` to disable transition
          },
        }}
      />
      <Box
        sx={(theme) => ({
          width:
            'clamp(100vw - var(--Cover-width), (var(--Collapsed-breakpoint) - 100vw) * 999, 100vw)',
          transition: 'width var(--Transition-duration)',
          transitionDelay: 'calc(var(--Transition-duration) + 0.1s)',
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          justifyContent: 'flex-end',
          backdropFilter: 'blur(4px)',
          backgroundColor: 'rgba(255 255 255 / 0.6)',
          [theme.getColorSchemeSelector('dark')]: {
            backgroundColor: 'rgba(19 19 24 / 0.4)',
          },
        })}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100dvh',
            width:
              'clamp(var(--Form-maxWidth), (var(--Collapsed-breakpoint) - 100vw) * 999, 100%)',
            maxWidth: '100%',
            px: 2,
          }}
        >
          <Box
            component="header"
            sx={{
              py: 3,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
     
           

               <Box width="100px" borderRadius={"50%"}><Image src={logo}/></Box>
               
             
              
            
          
      
            <ColorSchemeToggle />
          </Box>
          <Box
            component="main"
            sx={{
              my: 'auto',
              py: 2,
              pb: 5,
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              width: 400,
              maxWidth: '100%',
              mx: 'auto',
              borderRadius: 'sm',
              '& form': {
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
              },
              [`& .${formLabelClasses.asterisk}`]: {
                visibility: 'hidden',
              },
            }}
          >
            <div>
              <Typography component="h2" fontSize="xl2" fontWeight="lg">
                Welcome back
              </Typography>
              <Typography level="body2" sx={{ my: 1, mb: 3 }}>
                Let&apos;s get started! Please enter your details.
              </Typography>
            </div>
            <form
              onSubmit={handlesubmit}
            >
              <FormControl required>
                <FormLabel>name</FormLabel>
                <Input  onChange={handlechange} placeholder="Enter your name" type="text" name="name" />
              </FormControl>
              <FormControl required>
                <FormLabel>Department</FormLabel>
                <Input onChange={handlechange} placeholder="Enter your Department" type="text" name="department" />
              </FormControl>
              <FormControl required>
                <FormLabel>Email</FormLabel>
                <Input  onChange={handlechange}placeholder="Enter your email" type="email" name="email" />
              </FormControl>
              <FormControl required>
                <FormLabel>Password</FormLabel>
                <Input  onChange={handlechange}placeholder="•••••••" type="password" name="password" />
              </FormControl>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
              
              </Box>
              <Button type="submit" fullWidth>
               Register
              </Button>
            </form>
            <NavLink to="/admin/login">
            <Button
              variant="outlined"
              color="neutral"
              fullWidth
              startDecorator={<LoginIcon />}
            >
           
           LogIn
            </Button></NavLink>
          </Box>
          <Box component="footer" sx={{ py: 3 }}>
            <Typography level="body3" textAlign="center">
              © REGSTUFF {new Date().getFullYear()}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={(theme) => ({
          height: '100%',
          position: 'fixed',
          right: 0,
          top: 0,
          bottom: 0,
          left: 'clamp(0px, (100vw - var(--Collapsed-breakpoint)) * 999, 100vw - var(--Cover-width))',
          transition:
            'background-image var(--Transition-duration), left var(--Transition-duration) !important',
          transitionDelay: 'calc(var(--Transition-duration) + 0.1s)',
          backgroundColor: 'background.level1',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundImage:
          `url(${regstuffimage2})`,
          [theme.getColorSchemeSelector('dark')]: {
            backgroundImage:
              `url(${regstuffimage})`,
          },
        })}
      />
    </CssVarsProvider>
  );
}