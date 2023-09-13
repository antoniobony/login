import React from 'react';
import Button from '@mui/material/Button';
import  Field  from './Field';
import  Box  from '@mui/material/Box';
import {Link} from '@mui/material';
import { Typography } from '@mui/material';
import  Econ from './Econ.jpg';
export default  class Forms extends React.Component{
    constructor(props){
      super(props)
     this.state={
      username:'',
      password:'',
     }
    }
    Change=(event)=>{
      const name=event.target.name;
      this.setState({
      [name]:event.target.value 
      })
      console.log(this.state.username.toString())
    }

    render()
    {
      return(
        
        <Box
        sx={{
            margin:'auto',
            marginTop:5,
            width:'50ch',
            height:'55ch',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            borderRadius:5,
            boxShadow:5,
            padding:4,}}
        >
          <Image/>
          <Typography  component="h1" variant="h2"
           sx={{
            fontFamily: "Helvetica",
            fontWeight:'bold',
            textShadow:15,
          }}>
           e-Delivery
           </Typography>
          <Typography component="h3" 
           sx={{
            margin:1,
          }}
          >
            Log into your account
          </Typography>
          <Box
          component="form" sx={{
            '& .MuiTextField-root': { m: 1, width: '40ch' },
           }}
          onSubmit={this.Handleclick}
          noValidate
          autoComplete="off"
          >
              <Field name='username' label='Username' type='text'/>
              <Field name='password' label='Password' type='password'/>
              <Link href="#" variant="body2" underline='none' textAlign='center' >
                  {"Forgot password"}
                </Link>
              <ButtonUsage click={this.Handleclick} />
              <Link href="#" variant="body2" underline='none'  >
                  {"Don't have an account? Sign Up"}
              </Link>
          </Box>
        </Box>
      )
    }
  }

  class ButtonUsage extends React.Component{
    constructor(props){
      super(props)
    }
    
    render()
    {
      return(
        <div>
          <Button variant="contained" color='secondary' fullWidth type='submit' sx={{marginTop:3,marginBottom:3}}>LOG IN</Button>
        </div> 
      )
    }
  }

  function Image(){
    return <img src={Econ} width="130px" height="130px"/>
  }

