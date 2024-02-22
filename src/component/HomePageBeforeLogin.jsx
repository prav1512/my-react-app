import Menu from './Menu.jsx';
import LoginSignupButton from './LoginSignupButton.jsx';
import SearchBar from './SearchBar.jsx';
import HomeFeed from './HomeFeed.jsx';
import ProfileButton from './ProfileButton.jsx'
import {useState} from 'react';
function HomePageBeforeLogin(){
    // var [check,setCheck]=useState(false);
    return (
        <>
        <Menu />
        <SearchBar />
        {/* {check ?<LoginSignupButton />:<ProfileButton />} */}
        <HomeFeed />
        </>
    )
}
export default HomePageBeforeLogin;