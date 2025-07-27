import { Button, Container, TextInput } from '@mantine/core'

import React,{ useState } from 'react';
import Service from '../utils/http'
import Response from '../Components/PrivateRoute/Response';


const service = new Service();

export default function Shorturl() {
    
    const generateShortUrl = async () => {
       console.log(input?.originalUrl);
       try {
           const data = await service.post("s", input);
            setResponse(data);

           console.log(data);
       } catch (error) {
           console.error("Error generating short URL:", error);
       }
   }
  
    const [input,setInput] = useState({
        originalUrl: "",
        customUrl: "",
        expiresAt: "",
        title:""
    });
    

   const [response, setResponse] = useState(null);

  return (
    <Container size={"lg"} style={{marginTop: "2rem"}}>
     {
     !response?
           <>
               

     <TextInput
      size="lg"
      radius="md"
      label="Original URL"
      withAsterisk
      placeholder="Input placeholder"
      onChange={(e) => {setInput({...input,originalUrl:e.target.value})}}
    />

    <TextInput
      size="lg"
      radius="md"
      label="Custom URL"
      
      placeholder="Input placeholder"
      onChange={(e) => {setInput({...input,customUrl:e.target.value})}}
      style={{marginTop: "1rem"}}
    />
    
    <TextInput
      size="lg"
      radius="md"
      label="ExpiresAt"
      
      placeholder="Input placeholder"
      onChange={(e) => {setInput({...input,expiresAt:e.target.value})}}
      style={{marginTop: "1rem"}}
    />

    <TextInput
      size="lg"
      radius="md"
      label="Title"
      
      placeholder="Input placeholder"
      onChange={(e) => {setInput({...input,title:e.target.value})}}
      style={{marginTop: "1rem"}}
    />

    <Button  onClick={generateShortUrl} variant="filled" color="orange" size="md" radius="md" style={{justify:"center"}}>Button</Button>
     
     </>
           :
           <Response response={response}/>
     }
    </Container>
  )
}
