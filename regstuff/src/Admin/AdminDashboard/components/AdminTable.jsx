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
    Box
  } from '@chakra-ui/react'
  import AddIcon from '@mui/icons-material/Add';
  import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { alladmindata } from '../../../redux/AdminReducer/AdminReducer/Action';
export default function AdminTable(){
    const dispatch=useDispatch()
    const data=useSelector((state)=>state.admindatareducer)
    const {isLoading,isError,admindata}=data
    useEffect(()=>{
dispatch(alladmindata)
    },[])
    if(isLoading){
        return (
            <h1>Loading.....</h1>
        )
    }
    return (
        <Box>
<Center height="50px" backgroundColor="#ddf1ff"><Circle bg="teal.300" size="40px"><SupervisorAccountIcon/></Circle></Center>
<TableContainer mt="10px">
  <Table variant='striped' colorScheme='teal' width="100%">

    <Thead >
      <Tr>
        <Th  fontFamily={"sans-serif"} color={"#061b64"} fontWeight="bold" textAlign="center" fontSize={"16px"}>Sr.No</Th>
        <Th  fontFamily={"sans-serif"} color={"#061b64"} fontWeight="bold" textAlign="center" fontSize={"16px"}>Admin Name</Th>
        <Th   fontFamily={"sans-serif"} color={"#061b64"} fontWeight="bold" textAlign="center" fontSize={"16px"}>Email</Th>
        <Th  fontFamily={"sans-serif"} color={"#061b64"} fontWeight="bold" textAlign="center" fontSize={"16px"}>Department</Th>
      </Tr>
    </Thead>
    <Tbody>
        {admindata.map((el,index)=>
         <Tr>

         <Th>{index+1}</Th>
         <Th>{el.name}</Th>
         <Th >{el.email}</Th>
         <Th >{el.department}</Th>
       </Tr>  
        )}
   
     
    </Tbody>
   
  </Table>
</TableContainer>
</Box>
    )
}
