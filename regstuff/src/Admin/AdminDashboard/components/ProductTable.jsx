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
    Avatar,
    Image
  } from '@chakra-ui/react'
  import AddIcon from '@mui/icons-material/Add';
  import CategoryIcon from '@mui/icons-material/Category';
  import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { alladmindata } from '../../../redux/AdminReducer/AdminReducer/Action';
import { allproduct } from '../../../redux/AdminReducer/Allproduct/action';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
export default function ProductTable(){
    const dispatch=useDispatch()
    const data=useSelector((state)=>state.allproductreducer)
    const {isLoading,isError,productdata}=data
    useEffect(()=>{
dispatch(allproduct)
    },[])
    if(isLoading){
        return (
            <h1>Loading.....</h1>
        )
    }
    const handledelete=(id)=>{
        console.log(id)
    }
    return (
        <Box>
<Center height="50px" backgroundColor="#ddf1ff"><Circle bg="teal.300" size="40px"><CategoryIcon/></Circle></Center>
<TableContainer mt="10px">
  <Table variant='striped' colorScheme='teal' width="100%">

    <Thead >
      <Tr>
        <Th  fontFamily={"sans-serif"} color={"#061b64"} fontWeight="bold" textAlign="center" fontSize={"16px"}>Sr.No</Th>
        <Th  fontFamily={"sans-serif"} color={"#061b64"} fontWeight="bold" textAlign="center" fontSize={"16px"}>Product Name</Th>
        <Th   fontFamily={"sans-serif"} color={"#061b64"} fontWeight="bold" textAlign="center" fontSize={"16px"}>Image</Th>
        <Th  fontFamily={"sans-serif"} color={"#061b64"} fontWeight="bold" textAlign="center" fontSize={"16px"}>Price</Th>
        <Th  fontFamily={"sans-serif"} color={"#061b64"} fontWeight="bold" textAlign="center" fontSize={"16px"}>Brand</Th>
        <Th  fontFamily={"sans-serif"} color={"#061b64"} fontWeight="bold" textAlign="center" fontSize={"16px"}>Edit</Th>
        <Th  fontFamily={"sans-serif"} color={"#061b64"} fontWeight="bold" textAlign="center" fontSize={"16px"}>Delete</Th>
      </Tr>
    </Thead>
    <Tbody>
       {productdata.map((el,index)=>
         <Tr>

         <Th>{index+1}</Th>
         <Th>{el.title.length > 10&&el.title.substring(0,40)}..</Th>
         <Th ><Circle><Image borderRadius={"50%"} height={"20%"} width="30%" src={el.images[0]}/></Circle></Th>
         <Th >Rs.{el.price}</Th>
         <Th >{el.brand.length>5&&el.brand.substring(0,20)}..</Th>
         <Th ><Link to={`/admin/dashboard/edit/${el._id}`}><EditIcon  /></Link></Th>
         <Th ><DeleteIcon onClick={()=>handledelete(el._id)}/></Th>
       </Tr>  
       )}
    
     
    </Tbody>
   
  </Table>
</TableContainer>
</Box>
    )
}
