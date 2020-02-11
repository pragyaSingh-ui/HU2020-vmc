import React from 'react';
import './index.css'

var buttonId:Number;
const regions=[{id:1,lable:'us-east-1'},
                {id:2,lable:'us-east-2'},
                {id:3,lable:'us-west-1'},
                {id:4,lable:'india-1'}
                    ]
function setButtonID(){

}
export default function layout() {
  return (
      <div className="chosenlayout">
          <div className="chosenlayoutHeader">
              <div className="chosenHeading"><h1>1.choosen Image</h1></div>
              <div className="selectBar">
                  
              </div>
          </div>
          <div className="buttons-container">
              <nav className="buttonNav">
                  <button className="button" >1.choosen Image</button>
                  <button className="button">2.choosen Instance Type</button>
                  <button className="button">3.choosen Storage and Network</button>
                  <button className="button">4.configure Security</button>
                  <button className="button">5.Review Launch</button>
              </nav>
          </div>
      </div>
  );
}
