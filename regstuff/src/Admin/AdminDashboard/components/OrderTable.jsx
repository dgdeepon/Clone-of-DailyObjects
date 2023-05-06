import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Center,
    Circle,
    Box,
    FormControl,
    FormLabel,

  } from '@chakra-ui/react'
  import FormGroup from '@mui/material/FormGroup';
  import FormControlLabel from '@mui/material/FormControlLabel';
import { Switch,Button } from '@chakra-ui/react';


  import AddIcon from '@mui/icons-material/Add';
  import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
  import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { alladmindata } from '../../../redux/AdminReducer/AdminReducer/Action';
import { cartdata } from '../../../redux/AdminReducer/CartReducer/Action';
export default function OrderTable(){
    const dispatch=useDispatch()
    const [statusvalue,setStatusvalue]=useState(false)
    const data=useSelector((state)=>state.ordersdatareducer)
    const {isLoading,isError,allcartdata}=data
    useEffect(()=>{
dispatch(cartdata)
    },[])
    const label = { inputProps: { 'aria-label': 'Switch demo' } };
    console.log(allcartdata)
    if(isLoading){
        return (
            <h1>Loading.....</h1>
        )
    }
 
    return (
        <Box>
        
<Center height="50px" backgroundColor="#ddf1ff"><Circle bg="teal.300" size="40px"><ShoppingCartIcon/></Circle></Center>
<TableContainer mt="10px">
  <Table variant='striped' colorScheme='teal' width="100%">

    <Thead >
      <Tr>
        <Th  fontFamily={"sans-serif"} color={"#061b64"} fontWeight="bold" textAlign="center" fontSize={"16px"}>Sr.No</Th>
        <Th  fontFamily={"sans-serif"} color={"#061b64"} fontWeight="bold" textAlign="center" fontSize={"16px"}>Title</Th>
        <Th   fontFamily={"sans-serif"} color={"#061b64"} fontWeight="bold" textAlign="center" fontSize={"16px"}>Quantity</Th>
        <Th  fontFamily={"sans-serif"} color={"#061b64"} fontWeight="bold" textAlign="center" fontSize={"16px"}>Price</Th>
        <Th  fontFamily={"sans-serif"} color={"#061b64"} fontWeight="bold" textAlign="center" fontSize={"16px"}>Total</Th>
        <Th  fontFamily={"sans-serif"} color={"#061b64"} fontWeight="bold" textAlign="center" fontSize={"16px"}>Status</Th>
      </Tr>
    </Thead>
    <Tbody>
        {(typeof allcartdata!==undefined&&allcartdata.length>0)&&allcartdata.map((el,index)=>
         <Tr>

         <Th>{index+1}</Th>
         <Th>{el.title}</Th>
         <Th >{el.quantity}</Th>
         <Th >Rs.{el.price}</Th>
         <Th >Rs.{el.price*(Number(el.quantity))}</Th>
         <Th>

  

         <FormGroup>
         <Button onClick={()=>setStatusvalue(!statusvalue)} backgroundColor={statusvalue?"green.300":"blue.300"} >{statusvalue?"completed":"Pending"}</Button>
    </FormGroup>
</Th>
       </Tr>  
        )}
   
     
    </Tbody>
   
  </Table>
</TableContainer>
</Box>
    )
}
