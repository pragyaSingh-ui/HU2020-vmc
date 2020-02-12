import React, { Props, useState } from 'react';
import './index.css';
import {Button} from '../Button/button';
import {Select} from '../Select/select';
var buttonId:Number;

interface btn{
    id:number;
    text:string;
    disabled:boolean;
  }
  type cardHeaderProps={
    btnList:btn[]
  }
interface SelectOptionInterface {
    label: string;
    value: any;
}
export interface selectedButtonDetail{

}
 const options:SelectOptionInterface[]=[{label:'US-East-1',value:'1'},
                                        {label:'Asia-PAcific-Mumbai',value:'2'},
                                        {label:'US-West-1',value:'3'},
                                        {label:'India',value:'4'}
                                        ]  
  let choosenHeading="Choose Image";
export const LayoutHeader=( {btnList}:cardHeaderProps)=> {
  return (
      <div className="chosenlayout">
          <div className="chosenlayoutHeader">
  <div className="chosenHeading"><h1>{choosenHeading}</h1></div>
              <Select options={options}></Select>
          </div>
          <div className="buttons-container">
              <nav className="buttonNav">
                  {btnList && btnList.map((element:btn,index) => (
                      <Button id={element.id} text={element.text} disabled={element.disabled } />
                  ))
                }
              </nav>
          </div>
      </div>
  );
}
