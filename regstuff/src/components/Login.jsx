import { Box, Button, Input } from '@chakra-ui/react'
import React, { useState } from 'react'

function UserLogin() {
    let [inputValue,setInput]=useState({
        email:'',
        password:''
    });

    function submit(e){
        e.preventDefault();

    }

  return (
    <Box mt={'20%'}>
        <form onSubmit={submit} style={{width:'25%',margin:'auto'}}>
            <Input type='email' value={inputValue.email} onChange={(e)=>{
                setInput({...inputValue,email:e.target.value});
            }} isRequired={true} placeholder='Email' mb={'10px'}/>
            <Input type='password' value={inputValue.password} onChange={(e)=>{
                setInput({...inputValue,password:e.target.value});
            }} isRequired={true} placeholder='Password' mb={'10px'}/>
            <Button type='submit'>Login</Button>
        </form>
    </Box>
  )
}

export default UserLogin