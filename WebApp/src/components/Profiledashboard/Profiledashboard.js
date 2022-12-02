import React from 'react';
import { useState } from 'react';
import './Profiledashboard.css'
import MyDetails from './MyDetails';
import Profile from './Profile';
import './MyDetails.css'
import './Profile.css'
import Notifications from './Notifications';
import Logo_SecondNav from '../Header/Logo_SecondNav'

const Profiledashboard = () => {
    const [isDetails, setDetails] = useState(false);

    const handleClick = event => {
        // 👇️ toggle shown state
        // setIsShown(current => !current);

        // 👇️ or simply set it to true
        setDetails(true);
        setProfile(false);
        setNotification(false);
    };
    const [isProfile, setProfile] = useState(false);

    const handle = event => {
        // 👇️ toggle shown state
        // setProfile(current => !current);
        setDetails(false);
        setProfile(true);
        setNotification(false);

        // 👇️ or simply set it to true
        // setIsShown(true);
    };
    const [isNotification, setNotification] = useState(false);

    const handleNotify = event => {
        // 👇️ toggle shown state
        // setProfile(current => !current);
        setDetails(false);
        setProfile(false);
        setNotification(true);

        // 👇️ or simply set it to true
        // setIsShown(true);
    };
    
    return (
        <>
        <Logo_SecondNav />
        <div className='Prodash'>
        <div className="Profile">
        <div className='heading'>
                        <p>Settings</p>
                    </div>
                <div className='Main'>
                    {/* <div className='heading'>
                        <p>Settings</p>
                    </div> */}
                    <div>
              <div className="d-flex Settings">
                <ul
                  class="nav flex-column nav-pills tabnav me-3 mr-0 userProfileTabUL"
                  id="v-pills-tab"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  <li
                    class="nav-link active userProfileTab"
                    id="v-pills-home-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-home"
                    role="tab"
                    aria-controls="v-pills-home"
                    aria-selected="true"
                  >
                    Profile
                  </li>
                  <li
                    class="nav-link  userProfileTab"
                    id="v-pills-profile-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-profile"
                    role="tab"
                    aria-controls="v-pills-profile"
                    aria-selected="false"
                  >
                    Notifications
                  </li>
                </ul>
              </div>
            </div>

                </div>



            </div>
            <div className='data'>
            {/* <div>
                {isDetails ?  <MyDetails/>
      
      : null}

      {isProfile ? <Profile/> : null }
      {isNotification ? <Notifications/> : null }

                </div> */}

<div className=" dashdata ">
          <div class="tab-content" id="v-pills-tabContent">
            <div
              class="tab-pane fade show active"
              id="v-pills-home"
              role="tabpanel"
              aria-labelledby="v-pills-home-tab"
              tabindex="0"
            >
              <Profile/>
              
            </div>
            <div
              class="tab-pane fade"
              id="v-pills-profile"
              role="tabpanel"
              aria-labelledby="v-pills-profile-tab"
              tabindex="0"
            >
              <Notifications/>
            </div>
          </div>
        </div>
                
                </div>
        </div>
                
    
            


        </>
    );
}




export default Profiledashboard;