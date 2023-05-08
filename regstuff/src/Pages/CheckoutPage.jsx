import { Box, Button, Center, Divider, Flex, Grid, Input, Text, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Navbar from '../Homepage/Navbar/Navbar';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function CheckoutPage() {
    const {token}=useSelector((store)=> store.UserLoginReducer);
    const token2=localStorage.getItem('token');
    const [inputValue,setInput]=useState({
      Name:'',
      Phone:'',
      Address:'',
      City:'',
      Pin:''  
    });
    const [save,setSave]=useState(false);
    const [values,setValues]=useState({
        totalQuantity:0,
        totalPrice:0
    });


    function addAddress(e){
        e.preventDefault();
        setSave(!save);
    }


    function getDetails(){
        axios.get(`${process.env.REACT_APP_CARTDATA}`,{
            headers:{
                Authorization:`Bearer ${token || token2}`
            }
        }).then((res)=>{
            // console.log(res);
            let totalQ=0;
            let totalP=0;
            for(let i=0;i<res.data.length;i++){
                totalQ+=res.data[i].quantity;
                totalP+=(res.data[i].quantity*res.data[i].price);
            }
            setValues({...values,totalPrice:totalP,totalQuantity:totalQ});
        }).catch((err)=>{
            console.log(err);
        })
    }

    useEffect(()=>{
        getDetails();
    },[])


  return <>
    <Navbar/>
    <Center>
        <Text as={'b'} fontSize={'4xl'}>CHECKOUT</Text>
    </Center>
    <Divider orientation='horizontal'/>
    <Grid gridTemplateColumns={{base:'1fr',lg:'45% 45%'}} margin={'auto'} objectFit={''} w={'90%'} gap={'10%'}>
        <Box textAlign={'left'} p={'30px'}>
            {!save ? <form onSubmit={addAddress}>
                <Input type='text' placeholder='Name' value={inputValue.Name} onChange={(e)=>{
                    setInput({...inputValue,Name:e.target.value});
                }} isRequired={true} mb={'10px'}/>
                <Input type='text' placeholder='Phone' value={inputValue.Phone} onChange={(e)=>{
                    setInput({...inputValue,Phone:e.target.value});
                }} isRequired={true} mb={'10px'}/>
                <Input type='text' placeholder='Address' value={inputValue.Address} onChange={(e)=>{
                    setInput({...inputValue,Address:e.target.value});
                }} isRequired={true} mb={'10px'}/>
                <Input type='text' placeholder='City' value={inputValue.City} onChange={(e)=>{
                    setInput({...inputValue,City:e.target.value});
                }} isRequired={true} mb={'10px'}/>
                <Input type='text' placeholder='Pin' value={inputValue.Pin} onChange={(e)=>{
                    setInput({...inputValue,Pin:e.target.value});
                }} isRequired={true} mb={'10px'}/>
                <Button type='submit' w={'100%'}>Save</Button>
            </form> :
            <>
            <Text>Name: {inputValue.Name}</Text>
            <Text>Address: {inputValue.Address}</Text>
            <Text>City: {inputValue.City}</Text>
            <Text>Pin: {inputValue.Pin}</Text>
            <Button onClick={()=>{
                setSave(!save);
            }}>Edit</Button>
            </>
            }
            <Link to={'/cart'}>
                <Text> Go Back</Text>
            </Link>
        </Box>
        <Box boxShadow={'rgba(0, 0, 0, 0.35) 0px 5px 15px'} textAlign={'left'} p={'30px'}>
            <Text as={'b'} fontSize={'xl'}>ORDER SUMMARY</Text>
            <Flex flexDirection={'row'} justifyContent={'space-between'}>
            <Text>Item Total ({values.totalQuantity} Item)</Text>
            <Text as={'b'}>Rs.{values.totalPrice}</Text>
            </Flex>
            <Flex flexDirection={'row'} justifyContent={'space-between'}>
            <Text>Shipping</Text>
            <Text color={'#eba194'} as={'b'}>FREE</Text>
            </Flex>
            <Divider/>
            <Flex flexDirection={'row'} justifyContent={'space-between'}>
            <Text>Grand Total</Text>
            <Text as={'b'}>Rs.{values.totalPrice}</Text>
            </Flex>
            <Link to={'/payment'}>
            <Button bgColor={'#20a87e'} textColor={'white'} _hover={{color:'black',bgColor:'#B3FFAE'}} w={'100%'}>CONTINUE</Button>
            </Link>
        </Box>
    </Grid>
</>
}

export default CheckoutPage