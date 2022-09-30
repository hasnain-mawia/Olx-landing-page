import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom'
import Login from '../Login/Login';
import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';

function Header() {
  const handleSell=()=>{
    history.push('/create')
  }
  const handleLogin = () => {
    history.push('/login')
  }
  
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
          {user ? <button className='login_btn'><i class="fa-solid fa-robot fa"></i><i class="fa-solid fa-angle-down ml-1"></i>
          <div className="dropdown_menu">
            <ul>
              <li className='username'><span>Hello,</span>{user.displayName}</li>
              <li><i class="fa-solid fa-photo-film mr-3"></i>My ads</li>
              <li><i class="fa-regular fa-building mr-3"></i>Buy Business Packages</li>
              <li><i class="fa-solid fa-sliders mr-3"></i>Settings</li>
              <li><i class="fa-regular fa-circle-question mr-3"></i>Help</li>
              <li onClick={()=>{
              }}><i class="fa-solid fa-arrow-right-from-bracket mr-3"></i>Logout</li>
            </ul>
          </div>

          </button> : <button onClick={handleLogin} className='login_btn'>Login</button>}
        </div>
        <div className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span onClick={handleSell}>SELL</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
