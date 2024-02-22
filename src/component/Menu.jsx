import React, { useState } from 'react';
function Menu(){
  const [isMouseOver,setMouseOver]=useState(false); 

function MouseMovedOn(){
   setMouseOver(true);
    
}
function MenuButtonClicked(){

}
function  MouseLeavedOn(){
    setMouseOver(false);
   
}
return (<button style={{backgroundColor: isMouseOver ? "#DCDCDC" : "green"}}  onMouseOver={MouseMovedOn} onMouseLeave={MouseLeavedOn} onclick={MenuButtonClicked()}>Menu</button>)
} 
export default Menu;