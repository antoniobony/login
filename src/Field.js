import React from 'react';
import TextField  from '@mui/material/TextField';

export default class Field extends React.Component{
    constructor(props){
      super(props)
    }
    render()
    {
      const {onchange,label,name,type}=this.props
      return(
        <div>   
           <TextField
          required
          id={name}
          label={label}
          type={type}
          fullWidth
          onChange={onchange}
        />
        </div>
      )
    }
  }
