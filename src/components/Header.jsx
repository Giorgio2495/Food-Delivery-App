import React, { useEffect } from 'react'
import {} from "@mui/material";
import { BarChart, SearchRounded, ShoppingCartRounded } from '@mui/icons-material';
import logo from '../images/logo.png.png';
import user from '../images/user.png'

const Header = () => {

    useEffect(() => {
        const toggleMenu = document.querySelector(".toggleMenu");

        toggleMenu.addEventListener('click', () => {
            document.querySelector('rightMenu').classList.toggle("active")
        })
    })

  return (
    <header>
        <img
        src={logo}
        alt=""
        className="logo"
      />
        <div className='inputBox'>
            <SearchRounded className='searchIcon' />
            <input type="text" placeholder="Search" />
        </div>
            <div className="shoppingCart">
                <ShoppingCartRounded className='cart' />
                <div className="cart_content">
                    <p>2</p>
                </div>
            </div>

            <div className="profileContainer">
                <div className="imgBox">
                    <img src={user} 
                    alt="" 
                    className='profilePic'/>
                </div>

                <h2 className="userName">Vetrivel Ravi</h2>
            </div>

            <div className="toggleMenu">
                <BarChart className='toggleIcon' />
            </div>
        
    </header>
  )
}

export default Header