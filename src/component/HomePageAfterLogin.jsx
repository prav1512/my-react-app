import Menu from './Menu.jsx';
import ProfileButton from './ProfileButton.jsx';
import SearchBar from './SearchBar.jsx';
import HomeFeed from './HomeFeed.jsx';
function HomePageAfterLogin(){
    return (
        <>
        <Menu />
        <SearchBar />
        <ProfileButton />
        <HomeFeed />
        </>
    )
}
export default HomePageAfterLogin;