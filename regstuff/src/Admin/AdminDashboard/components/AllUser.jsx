
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
    Box
  } from '@chakra-ui/react'
import { useEffect } from 'react'
  import { useDispatch,useSelector } from 'react-redux'
import { userdata } from '../../../redux/AdminReducer/UserReducer/action'
export default function Alluser(){

    const dispatch=useDispatch()
    
    useEffect(()=>{
        dispatch(userdata)
    },[])
    const userdetails=useSelector((state)=>state.userreducer)
    const {isLoading,isError,data}=userdetails
    console.log(isLoading,isError)
    if(isLoading){
        return (
            <h1>Loading....</h1>
        )
    }
return (

<Box backgroundColor={"#fa9d7c"} width="100%" >
<TableContainer >
  <Table  width="100%">
    <Thead>
      <Tr>
        <Th fontFamily={"sans-serif"} color={"#061b64"}>Sr.No</Th>
        <Th fontFamily={"sans-serif"} color={"#061b64"}>User Name</Th>
        <Th fontFamily={"sans-serif"} color={"#061b64"} isNumeric>User Email</Th>
      </Tr>
    </Thead>
    <Tbody>
      {data.length>0?
      data.map((el,index)=>
      <Tr>
      <Th fontFamily={"sans-serif"} color={"#061b64"}>{index+1}</Th>
      <Th fontFamily={"sans-serif"} color={"#061b64"}>{el.email}</Th>
      <Th fontFamily={"sans-serif"} color={"#061b64"}>{el.name}</Th></Tr>
      
      ):<h1>No Registered User</h1>}
    </Tbody>
    
  </Table>
</TableContainer>
</Box>
)
}