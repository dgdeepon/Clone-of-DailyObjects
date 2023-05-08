import { Box, Divider, Grid, Spinner, Text, VStack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCaretRight} from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import UserLogin from './Login';
import { Link, useLocation } from 'react-router-dom';
import { LogoutNow } from '../redux/UserLoginReducer/Action';
import Navbar from '../Homepage/Navbar/Navbar';

function Account() {

    const dispatch=useDispatch();

    const {loading,token,userName}=useSelector((store)=>{
        return store.UserLoginReducer;
    });


    useEffect(()=>{

    },[token]);

  return ( loading ? <Spinner
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='blue.500'
        size='xl'
    /> :
    <Box>
        <Navbar/>
        <Text as={'b'} fontSize={'4xl'}>MY ACCOUNT</Text>
        <Divider/>
        {token == '' ?
        <Grid gridTemplateColumns={{base:'1fr',lg:'20% 70%'}} gap={'5%'} textAlign={{base:'center',lg:'left'}}>
            <VStack>
                <Text as={'b'} fontSize={'xl'} px={'20px'} w={'100%'}>
                    GUEST
                </Text>    
                <Text cursor={'pointer'} fontSize={'xl'} px={'20px'} w={'100%'}>Wishlist <FontAwesomeIcon icon={faCaretRight}/></Text>    
                <Text cursor={'pointer'} fontSize={'xl'} px={'20px'} w={'100%'}>Help Center <FontAwesomeIcon icon={faCaretRight}/></Text>    
                <Text cursor={'pointer'} fontSize={'xl'} px={'20px'} w={'100%'}>Rewards <FontAwesomeIcon icon={faCaretRight}/></Text>
                <Text cursor={'pointer'} fontSize={'xl'} px={'20px'} w={'100%'}><Link to={'/userLogin'}> Login <FontAwesomeIcon icon={faCaretRight}/></Link></Text> 
            </VStack>
            <VStack>
                <Text></Text>
            </VStack>
        </Grid>  :
            <Grid gridTemplateColumns={{base:'1fr',lg:'20% 70%'}} gap={'5%'} textAlign={{base:'center',lg:'left'}}>
            <VStack>
                <Text as={'b'} fontSize={'xl'} px={'20px'} w={'100%'}>
                    {userName}
                </Text>
                <Text cursor={'pointer'} fontSize={'xl'} px={'20px'} w={'100%'}>Personal Info <FontAwesomeIcon icon={faCaretRight}/></Text>    
                <Text cursor={'pointer'} fontSize={'xl'} px={'20px'} w={'100%'}>My Orders <FontAwesomeIcon icon={faCaretRight}/></Text>    
                <Text cursor={'pointer'} fontSize={'xl'} px={'20px'} w={'100%'}>Address Book <FontAwesomeIcon icon={faCaretRight}/></Text>    
                <Text cursor={'pointer'} fontSize={'xl'} px={'20px'} w={'100%'}>Contact Us <FontAwesomeIcon icon={faCaretRight}/></Text>    
                <Text cursor={'pointer'} fontSize={'xl'} px={'20px'} w={'100%'}>Return/Exchange <FontAwesomeIcon icon={faCaretRight}/></Text>    
                <Text cursor={'pointer'} fontSize={'xl'} px={'20px'} w={'100%'}>Wishlist <FontAwesomeIcon icon={faCaretRight}/></Text>    
                <Text cursor={'pointer'} fontSize={'xl'} px={'20px'} w={'100%'}>Help Center <FontAwesomeIcon icon={faCaretRight}/></Text>    
                <Text cursor={'pointer'} fontSize={'xl'} px={'20px'} w={'100%'}>Rewards <FontAwesomeIcon icon={faCaretRight}/></Text>    
                <Text cursor={'pointer'} fontSize={'xl'} onClick={()=>{
                        dispatch(LogoutNow);
                        localStorage.removeItem('token');
                }} px={'20px'} w={'100%'}>Logout <FontAwesomeIcon icon={faCaretRight}/></Text>    
            </VStack>
            <VStack>
                <Text></Text>
            </VStack>
        </Grid> 
        }
    </Box>
  )
}

export default Account