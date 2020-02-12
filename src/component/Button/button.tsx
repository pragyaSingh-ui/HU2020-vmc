import React, { useState } from 'react';
interface btn{
    id:number;
    text:string;
    disabled:boolean;
  }
  
export const Button:React.FC<btn>=(props:btn)=>{
    const {id , text , disabled}:btn=props;
return(
    <React.Fragment>
        <button className="button"  type='button' disabled={disabled}  >{text}</button>
    </React.Fragment>
);
}