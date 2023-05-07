import React, { useEffect, useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import { Circle,Center, Spinner} from '@chakra-ui/react';

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

import regstuffimage from "./Images/RegStuff.png"
import regstuffimage2 from "./Images/RegStuff2.png"
import logo from "./Images/logo.png"
import LoginIcon from '@mui/icons-material/Login';
import { Link as NavLink, useNavigate, useParams } from 'react-router-dom';

import { useToast } from '@chakra-ui/react'
import {useDispatch,useSelector} from 'react-redux'
import { singleproduct, singleproductsuccess } from '../../../redux/AdminReducer/SingleProductReducer/Action';
import { editproduct } from '../../../redux/AdminReducer/EditProductReducer/Action';
 
       
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
const initialdata1={
  "additional_info":"",
  "brand":"",
  "category":"",
"hex":"",
"images":"",
  "color":"",
  "mrp":"",
  "price":"",
  "title":""
}


// destructuring the above data to make it easy
const initialdata2={
    "brand":"",
    "category":"",
    "hex":"",
    "color":"",
    "mrp":"",
    "price":"",
    "title":"",

}
const additionalinfo={
    "details1":"",
    "details2":"",
    "details3":"",
    "details4":"",
    "details5":"",
    "details6":"",
    "name1":"",
    "name2":"",
    "name3":"",
    "name4":"",
    "name5":"",
    "name6":"",



}

export default function EditProduct() {
   // maindatais not main structure
   const [finaldata,setFinaldata]=useState(initialdata1)
   const [maindata,setmaindata]=React.useState(initialdata2)
 
 const [additional,setAdditional]=useState(additionalinfo)

//  catching id>>>>>>>>>>>>>>>>>
    const {id}=useParams()
    console.log(id)

    // fetchingdata with id
     const dispatch=useDispatch()
  const toast=useToast()
  const navigate=useNavigate()
  const data=useSelector((state)=>state.singleproductreducer)
  const {singledata}=data
  // catching the data coming from api and set them as initial value to their respective fields
    useEffect(()=>{
       dispatch(singleproduct(id)).then((res)=>{
        dispatch(singleproductsuccess(res.data))
        setmaindata({"brand":res.data.brand,"category":res.data.category,"price":res.data.price,"hex":res.data.hex,"mrp":res.data.mrp,"color":res.data.color,"title":res.data.title})
     setAdditional({"details1":res.data.additional_info.details1,"details2":res.data.additional_info.details2,"details3":res.data.additional_info.details3,"details4":res.data.additional_info.details4,"details5":res.data.additional_info.details5,
     "details6":res.data.additional_info.details6,"name1":res.data.additional_info.name1,"name2":res.data.additional_info.name2,"name3":res.data.additional_info.name3,"name4":res.data.additional_info.name4,"name5":res.data.additional_info.name5,"name6":res.data.additional_info.name6
   })
    setImage1(res.data.images[0])
    setImage2(res.data.images[1])
      setImage3(res.data.images[2])
      setImage4(res.data.images[3])
      setImage5(res.data.images[4])
      setImage6(res.data.images[5])
      })
    },[])
  
   
// handling images here
const [image1,setImage1]=useState("")
const [image2,setImage2]=useState("")
const [image3,setImage3]=useState("")
const [image4,setImage4]=useState("")
const [image5,setImage5]=useState("")
const [image6,setImage6]=useState("")
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const [imagehandle,setImagehandle]=useState(false)
const [addimage,setAddimage]=useState([])

 
 const detailchange=(e)=>{
    const {name,value}=e.target
    setAdditional({...additional,[name]:value})
    setImagehandle(false)
 }

 const handlechange=(e)=>{
    const {name,value}=e.target
    setmaindata({...maindata,[name]:value})
    setImagehandle(false)
    }
let images=[]
// handling the data on clicking of add details>>>>>>>>>>>>>>>>>>>>>>>>>>
const handleimage=async()=>{
images.push(image1,image2,image3,image4,image5,image6)
    const {name1,name2,name3,name4,name5,name6,details1,details2,details3,details4,details5,details6}=additional
const {category,brand,price,title,mrp,hex,color}=maindata

    if((image1||image2||image3||image4||image5||image6)&&(name1||name2||name3||name4||name5||name6)&&brand&&price&&title&&category&&color&&mrp&&(details1||details2||
      details3||details4||details5||details6)){
    try{
        
       setAddimage([image1,image2,image3,image4,image5,image6])
       setFinaldata({...finaldata,additional_info:additional,images:images,"brand":brand,"category":category,"price":price,"title":title,"mrp":mrp,"hex":hex,"color":color})
            setImagehandle(!imagehandle)
        }      
    catch(err){
        console.log(err)
    }}
    else{
        toast({"description":"Please Add All The Details "})
    }
        
       
     }

    //  Making a patch request>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const handlesubmit=(e)=>{
e.preventDefault()
dispatch(editproduct(id,finaldata)).then((res)=>{
  toast({"description":res.data.success,position:"top"})
  navigate("/admin/dashboard/products")
}).catch((err)=>{
  toast({"description":err.response.data.error,position:"top"})
})

}

// console.log(isLoading)

  return (
   
 <Box>
  <Center color="black" backgroundColor={"#ddf1ff"}>Edit Product with Id:-{id}</Center>
 
  <Box mt="30px">
<form onSubmit={handlesubmit}>
<Box display="grid" gap="10px" gridTemplateColumns={"repeat(3,1fr)"}>
                    <Box>
              <FormControl required>
                <FormLabel>details</FormLabel>
                <Input value={additional.details1}  onChange={detailchange} _placeholder={{color:"white"}} defaultValue={typeof singledata.additional_info !== "undefined"?singledata["additional_info"].details1:""} placeholder="details1" type="text" name="details1" />
              </FormControl>
              <FormControl>
                <FormLabel>details</FormLabel>
                <Input onChange={detailchange} value={additional.details2}  placeholder="details2" type="text" name="details2" />
              </FormControl>
              <FormControl >
                <FormLabel>details</FormLabel>
                <Input  onChange={detailchange} value={additional.details3}   placeholder="details3" type="text" name="details3" />
              </FormControl>
              <FormControl >
                <FormLabel>details</FormLabel>
                <Input  onChange={detailchange} value={additional.details4}  placeholder="details4" type="text" name="details4" />
              </FormControl>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
              
              </Box></Box>
              <Box>
              <FormControl >
                <FormLabel>details</FormLabel>
                <Input  onChange={detailchange} value={additional.details5}  placeholder="details5" type="text" name="details5" />
              </FormControl>
              <FormControl >
                <FormLabel>details</FormLabel>
                <Input onChange={detailchange}  value={additional.details6} placeholder="details6" type="text" name="details6" />
              </FormControl>
              <FormControl required>
                <FormLabel>names</FormLabel>
                <Input  onChange={detailchange}  value={additional.name1} placeholder="name1" type="text" name="name1" />
              </FormControl>
              <FormControl>
                <FormLabel>names</FormLabel>
                <Input  onChange={detailchange}  value={additional.name2}  placeholder="name2" type="text" name="name2" />
              </FormControl>
              </Box>
              <Box>
              <FormControl >
                <FormLabel>name</FormLabel>
                <Input  onChange={detailchange}  value={additional.name3} placeholder="name3" type="text" name="name3" />
              </FormControl>
              <FormControl >
                <FormLabel>name</FormLabel>
                <Input onChange={detailchange}  value={additional.name4} placeholder="name4" type="text" name="name4" />
              </FormControl>
              <FormControl >
                <FormLabel>name</FormLabel>
                <Input  onChange={detailchange}  value={additional.name5} placeholder="name5" type="text" name="name5" />
              </FormControl>
              <FormControl >
                <FormLabel>name</FormLabel>
                <Input  onChange={detailchange}  value={additional.name6} placeholder="name6" type="text" name="name6" />
              </FormControl>
             
              </Box>
              <Box>
              <FormControl required>
                <FormLabel>Category</FormLabel>
                <Input  onChange={handlechange} value={maindata.category} placeholder="category" type="text" name="category" />
              </FormControl>
              <FormControl required>
                <FormLabel>Brand</FormLabel>
                <Input  onChange={handlechange} value={maindata.brand} placeholder="brand" type="text" name="brand" />
              </FormControl>
              <FormControl required>
                <FormLabel>Color</FormLabel>
                <Input onChange={handlechange} value={maindata.color} placeholder="color" type="text" name="color" />
              </FormControl>
              <FormControl >
                <FormLabel>hex(color)</FormLabel>
                <Input  onChange={handlechange} value={maindata.hex} placeholder="hex" type="text" name="hex" />
              </FormControl>
              <FormControl required>
                <FormLabel>MRP</FormLabel>
                <Input  onChange={handlechange} value={maindata.mrp} placeholder="MRP" type="number" name="mrp" />
              </FormControl>
             
              
              </Box>
              <Box>
              <FormControl required>
                <FormLabel>PRICE</FormLabel>
                <Input  onChange={handlechange} placeholder="price" value={maindata.price} type="number" name="price" />
              </FormControl>
              <FormControl required>
                <FormLabel>Title</FormLabel>
                <Input  onChange={handlechange} placeholder="title" type="text" value={maindata.title} name="title" />
              </FormControl>
              <FormControl required>
                <FormLabel>Images</FormLabel>
                <Input  onChange={(e)=>{
                    setImagehandle(false)
                    setImage1(e.target.value)}} value={image1} placeholder="image1" type="text" name="image1" />
              </FormControl>
              <FormControl >
                <FormLabel>Images</FormLabel>
                <Input onChange={(e)=>{
                    setImagehandle(false)
                    setImage2(e.target.value)
                   }
             
            } placeholder="image2" value={image2} type="text" name="image2" />
              </FormControl>
             
              
              </Box>
              <Box>
              <FormControl >
                <FormLabel>Images</FormLabel>
                <Input  onChange={(e)=>{
                    setImagehandle(false)
                    setImage3(e.target.value)}} placeholder="image3" value={image3} type="text" name="image3" />
              </FormControl>
              <FormControl>
                <FormLabel>Images</FormLabel>
                <Input onChange={(e)=>{
                    setImagehandle(false)
                    setImage4(e.target.value)}} placeholder="image4" value={image4} type="text" name="image4" />
              </FormControl>
              <FormControl >
                <FormLabel>Images</FormLabel>
                <Input onChange={(e)=>{
                    setImagehandle(false)
                    setImage5(e.target.value)}} placeholder="image5" type="text" value={image5} name="image5"/>
              </FormControl>
              <FormControl >
                <FormLabel>Images</FormLabel>
                <Input  onChange={(e)=>{
                    setImagehandle(false)
                    setImage6(e.target.value)}} placeholder="image6" value={image6} type="text" name="image6"/>
              </FormControl>
              </Box>
              </Box>
              <Box  mt="20px"><Button disabled={imagehandle==false?false:true} onClick={handleimage}>
              Click To ADD DETAILS
              </Button></Box>
            
              <Box mt="20px">
              
                <Button disabled={imagehandle==false?true:false}  type="submit">
               EDIT
              </Button></Box>
            </form>
            </Box>
 </Box>
       
           

     

  );
}

 
