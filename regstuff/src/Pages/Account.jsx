import { Box, Divider, Grid, Spinner, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCaretRight} from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import UserLogin from '../components/Login';
import { Link } from 'react-router-dom';

function Account() {

    const options=['Wishlist','Help Center','Rewards','Login'];

    const loading=useSelector((store)=>{
        return store.UserLoginReducer.isLoading;
    });

    const token=useSelector((store)=>{
        return store.UserLoginReducer.token;
    });

    const userName=useSelector((store)=>{
        return store.UserLoginReducer.userName;
    })

  return ( loading ? <Spinner
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='blue.500'
        size='xl'
    /> :
    <Box>
        <Text as={'b'} fontSize={'4xl'}>MY ACCOUNT</Text>
        <Divider/>
        {token == '' ?  
        <Grid gridTemplateColumns={'20% 70%'} gap={'5%'} textAlign={'left'}>
            <VStack>
                <Text as={'b'} fontSize={'xl'}>
                    GUEST
                </Text>    
                <Text cursor={'pointer'} fontSize={'xl'}>Wishlist <FontAwesomeIcon icon={faCaretRight}/></Text>    
                <Text cursor={'pointer'} fontSize={'xl'}>Help Center <FontAwesomeIcon icon={faCaretRight}/></Text>    
                <Text cursor={'pointer'} fontSize={'xl'}>Rewards <FontAwesomeIcon icon={faCaretRight}/></Text>  
                <Link to={'/userLogin'}>
                <Text cursor={'pointer'} fontSize={'xl'}>Login <FontAwesomeIcon icon={faCaretRight}/></Text>    
                    </Link>  
            </VStack>
            <VStack>
                <Text>Working</Text>
            </VStack>
        </Grid> :
            <Grid gridTemplateColumns={'20% 70%'} gap={'5%'}>
            <VStack>
                <Text as={'b'} fontSize={'xl'}>
                    {userName}
                </Text>
                <Text cursor={'pointer'} fontSize={'xl'}>Personal Info <FontAwesomeIcon icon={faCaretRight}/></Text>    
                <Text cursor={'pointer'} fontSize={'xl'}>My Orders <FontAwesomeIcon icon={faCaretRight}/></Text>    
                <Text cursor={'pointer'} fontSize={'xl'}>Address Book <FontAwesomeIcon icon={faCaretRight}/></Text>    
                <Text cursor={'pointer'} fontSize={'xl'}>Contact Us <FontAwesomeIcon icon={faCaretRight}/></Text>    
                <Text cursor={'pointer'} fontSize={'xl'}>Return/Exchange <FontAwesomeIcon icon={faCaretRight}/></Text>    
                <Text cursor={'pointer'} fontSize={'xl'}>Wishlist <FontAwesomeIcon icon={faCaretRight}/></Text>    
                <Text cursor={'pointer'} fontSize={'xl'}>Help Center <FontAwesomeIcon icon={faCaretRight}/></Text>    
                <Text cursor={'pointer'} fontSize={'xl'}>Rewards <FontAwesomeIcon icon={faCaretRight}/></Text>    
                <Text cursor={'pointer'} fontSize={'xl'}>Logout <FontAwesomeIcon icon={faCaretRight}/></Text>    
            </VStack>
            <VStack>
                <Text>Working</Text>
            </VStack>
        </Grid> 
        }
    </Box>
  )
}

export default Account