import { Box, Button, Grid, Image, Input, Spinner, Text, VStack, useToast } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { LoginNow } from '../redux/UserLoginReducer/Action';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../images/RS-removebg-preview.png';
import Navbar from '../Homepage/Navbar/Navbar';
import sideImage from '../images/shopping-g6bf6f4ad8_1920.jpg';

function UserLogin() {
    const toast=useToast();
    let [inputValue,setInput]=useState({
        email:'',
        password:''
    });
    const {token,isLoading,isError}=useSelector((store)=>{
        return store.UserLoginReducer;
    });
    const dispatch=useDispatch();
    const navi=useNavigate();
    const location=useLocation();

    useEffect(()=>{
        if(token!==''){
            navi(location.state || '/Account');
            toast({
                title: 'Login Successful!',
                status: 'success',
                duration: 4000,
                isClosable: true,
              })
        }
    },[token])


    function submit(e){
        e.preventDefault();
        dispatch(LoginNow(inputValue));
    }

  return (
    <>
    <Navbar/>
    <Grid gridTemplateColumns={{base:'1fr','2xl':'40% 1fr'}} >
            <Image src={sideImage} objectFit={'contain'} w={'75%'} h={'100%'} display={{base:'none','2xl':'inline-block'}}/>
    <VStack p={'20px'} >
        <VStack mt={'15%'}>
            <Link to={'/'}>
            <Image src={logo}/>
            </Link>
        <form onSubmit={submit} style={{margin:'auto'}}>
            <Input type='email' value={inputValue.email} onChange={(e)=>{
                setInput({...inputValue,email:e.target.value});
            }} isRequired={true} placeholder='Email' mb={'10px'} backgroundColor={'white'}/>
            <Input type='password' value={inputValue.password} onChange={(e)=>{
                setInput({...inputValue,password:e.target.value});
            }} isRequired={true} placeholder='Password' mb={'10px'} backgroundColor={'white'}/>
            <Button type='submit'>{isLoading?   <Spinner size='md' /> : "Login"}</Button>
        </form>
        <Link to={'/UserRegister'}>
        <Text as={'b'} fontSize={'xl'}><u>Register Now</u></Text>
        </Link>
        </VStack>
    </VStack>
    </Grid>
            </>
  )
}

export default UserLogin