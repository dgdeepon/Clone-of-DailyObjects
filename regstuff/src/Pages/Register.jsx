import { Box, Button, Image, Input, Spinner, Text, VStack, useToast } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import logo from '../images/RS-removebg-preview.png';
import { RegisterNow } from '../redux/UserLoginReducer/Action';
import Navbar from '../Homepage/Navbar/Navbar';

function UserRegister() {
    const toast=useToast();
    let [inputValue,setInput]=useState({
        name:'',
        email:'',
        password:''
    });
    const {token,isLoading,isError}=useSelector((store)=>{
        return store.UserLoginReducer;
    });
    const dispatch=useDispatch();
    const navi=useNavigate();

    useEffect(()=>{
        if(token!==''){
            return navi('/Account');
        }
    },[])


    function submit(e){
        e.preventDefault();
        dispatch(RegisterNow(inputValue)).then((res)=>{
            toast({
                title: 'Account created!',
                status: 'success',
                duration: 4000,
                isClosable: true,
            })
           return navi('/userLogin');
        }).catch((err)=>{
            console.log(err);
        });
    }

  return (
    <>
    <Navbar/>
    <VStack mt={'5%'} p={'20px'}>
        <Link to={'/'}>
        <Image src={logo}/>
        </Link>
        <form onSubmit={submit} style={{margin:'auto'}}>
            <Input type='text' value={inputValue.name} onChange={(e)=>{
                setInput({...inputValue,name:e.target.value});
            }} isRequired={true} placeholder='Name' mb={'10px'}/>
            <Input type='email' value={inputValue.email} onChange={(e)=>{
                setInput({...inputValue,email:e.target.value});
            }} isRequired={true} placeholder='Email' mb={'10px'}/>
            <Input type='password' value={inputValue.password} onChange={(e)=>{
                setInput({...inputValue,password:e.target.value});
            }} isRequired={true} placeholder='Password' mb={'10px'}/>
            <Button type='submit'>{isLoading?   <Spinner size='md' /> : "Register"}</Button>
        </form>
        <Link to={'/userLogin'}>
        <Text as={'b'} mt={'10px'}><u>Login</u></Text>
        </Link>
    </VStack>
    </>
  )
}

export default UserRegister;