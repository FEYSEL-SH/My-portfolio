import React from 'react'
import appleLogo from "./applesource/logo.png"
import SearchLogo from "./applesource/search-icon.png"
import cartLogo from "./applesource/cart.png"
function Header() {
  return (
    <div>
        <header class="header-wrapper">
            <div class="internal-wrapper">
            
               
                <div class="link-wrapper">
                    <nav>
                        <ul>
                        <li id="logo-icon"><a href="https://www.apple.com/"><img src= {appleLogo} /></a></li>
                        <li class="store"><a href="#"><h4>store</h4></a></li> 
                        <li><a href="#"><h4>mac</h4></a></li>
                        <li><a href="#"><h4>ipad</h4></a></li>
                        <li><a href="#"><h4>iphone</h4></a></li>
                        <li><a href="#"><h4>watch</h4></a></li>
                        <li><a href="#"><h4>airpod</h4></a></li>
                        <li><a href="#"><h4>tv & home</h4></a></li>
                        <li><a href="#"><h4>entertainment</h4></a></li>
                        <li><a href="#"><h4>accessories</h4></a></li>
                        <li><a href="#"><h4>support</h4></a></li>
                        <li id="search-icon"><a href=""><img src={SearchLogo} alt=""/></a></li>
                        <li id="cart-icon"><a href=""><img src={cartLogo} alt=""/></a></li>
                      <div>
                        <div class="menu"></div>
                        <div class="menu"></div>
                      </div>
                        </ul>
                    </nav>
                </div>
            </div>
            <div class="get">
                <p><a href="">Shop online </a> and get Specialist help, free delivery and more. Get in‑stock items with Apple Pickup</p></div>
        </header>
    </div>
  )
}

export default Header