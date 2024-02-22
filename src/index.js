import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Menu from './component/Menu.jsx';
import ProfileButton from './component/ProfileButton.jsx';
import LoginSignupButton from './component/LoginSignupButton.jsx';
import SearchBar from './component/SearchBar.jsx';
import FeedNavigation from './component/FeedNavigation.jsx'
// import MyApp from './component/MyApp.jsx';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <h1>herw we go</h1>
    <Menu />
    <ProfileButton />
    <LoginSignupButton />
    <SearchBar />
    <FeedNavigation />
    {/* <MyApp /> */}
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
