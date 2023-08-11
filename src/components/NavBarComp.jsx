import React from 'react';
import logo from '../Image/logo.png';
import setting from '../Image/Settings.png';
import notification from '../Image/Notification.png';
import profile from '../Image/Profile.png';
import menu from '../Image/Menu.png';
import search from '../Image/searchbar.png';


const NavBarComp = () => {
    return (
        <>

          <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
              <a class="navbar-brand mx-5" href="#"><img src={logo} alt="logo" /></a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  
                  <li class="nav-item">
                    <input class="search_bar me-2" type="search" placeholder="Search for song artists etc." aria-label="Search" />
                    <img src={search} className="searchicon" alt="searchbar" />
                  </li>

                </ul>
                <div class="explore_section">
                  <a href="#" className='btn mx-3'>Explore Premium</a>
                  <div className="btn_grp">
                    <img src={setting} alt="setting" />
                    <img src={notification} alt="noti" />
                    <img src={profile} alt="profile" />
                    <img src={menu} alt="menu" />
                  </div>
                </div>
              </div>
            </div>
          </nav>

        </>
    );
}


export default NavBarComp;