import React, { useState } from 'react';
function LoginSignupButton(){
  const [isMouseOver,setMouseOver]=useState(false); 

function MouseMovedOn(){
   setMouseOver(true);
    
}
function LoginSignupButtonClicked(){

}
function  MouseLeavedOn(){
    setMouseOver(false);
   
}
return (<button style={{backgroundColor: isMouseOver ? "#DCDCDC" : "green"}}  onMouseOver={MouseMovedOn} onMouseLeave={MouseLeavedOn} onclick={LoginSignupButtonClicked()}>Login/Signup</button>)
} 
export default LoginSignupButton;