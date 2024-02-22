import React, { useState } from 'react';
function ProfileButton(){
  const [isMouseOver,setMouseOver]=useState(false); 

function MouseMovedOn(){
   setMouseOver(true);
    
}
function MyProfileButtonClicked(){

}
function  MouseLeavedOn(){
    setMouseOver(false);
   
}
return (<button style={{backgroundColor: isMouseOver ? "#DCDCDC" : "green"}}  onMouseOver={MouseMovedOn} onMouseLeave={MouseLeavedOn} onclick={MyProfileButtonClicked()}>My Profile</button>)
} 
export default ProfileButton;