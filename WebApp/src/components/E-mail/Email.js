import React from 'react';
// import { useState } from 'react';
import './Email.css';
// import Inbox from './Inbox';
// import SentItems from './SentItems';
// import Drafts from './Drafts';
// import Spam from './Spam';
import Logo_SecondNav from '../Header/Logo_SecondNav';
import { NavLink, Link , Outlet, useNavigate} from 'react-router-dom';

const Email = () => {



    return (

        <>
            <Logo_SecondNav />
            <div className='emailPage'>
               
            <SideBar />

{/* //Mobile Responsive menu */}
                     <div className='humpanel'>
                        <HambergerMenu />
                    </div>
{/* // */}
                <div className=" Toggledata ">

                    <div className='DeleteIcon  dltButton'>

                        <span className='deleteButton'>
                             <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                            </svg>
                            <p>Delete</p> </span> 

                    </div>
                    <Outlet />
                    
                </div>




            </div>


        </>

    );
};


export const HambergerMenu=()=>{
  

    return(
        <>
        <div>
        <button class="btn humicon btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasLeft" aria-controls="offcanvasLeft"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="white" class="bi bi-list" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
</svg></button>

<div class="offcanvas offcanvas-start  emailoffcanvas" tabindex="-1" id="offcanvasLeft" aria-labelledby="offcanvasLeftLabel">
  <div class="offcanvas-header">
    <h5 id="offcanvasLeftLabel">MAIL</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body emailoffbody">
  <ul
                            class="nav flex-column nav-pills  mr-0 "
                            id="v-pills-tab"
                            role="tablist"
                            aria-orientation="vertical"
                        >
                             <NavLink
            to="/mailbox/Inbox"
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
          >
                            <li
                                class="nav-link mobilepanel"
                                id="v-pills-home-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#v-pills-home"
                                role="tab"
                                aria-controls="v-pills-home"
                                aria-selected="true"
                            >
                               <span className='panelicon'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-inbox-fill" viewBox="0 0 16 16">
  <path d="M4.98 4a.5.5 0 0 0-.39.188L1.54 8H6a.5.5 0 0 1 .5.5 1.5 1.5 0 1 0 3 0A.5.5 0 0 1 10 8h4.46l-3.05-3.812A.5.5 0 0 0 11.02 4H4.98zm-1.17-.437A1.5 1.5 0 0 1 4.98 3h6.04a1.5 1.5 0 0 1 1.17.563l3.7 4.625a.5.5 0 0 1 .106.374l-.39 3.124A1.5 1.5 0 0 1 14.117 13H1.883a1.5 1.5 0 0 1-1.489-1.314l-.39-3.124a.5.5 0 0 1 .106-.374l3.7-4.625z"/>
</svg></span> Inbox
                            </li></NavLink>
                                <hr className='offcanvashr'/>
                         
                                <NavLink
            to="/mailbox/Sentitems"
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
          >
                            <li
                                class="nav-link  mobilepanel"
                                id="v-pills-Inbox-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#v-pills-profile"
                                role="tab"
                                aria-controls="v-pills-profile"
                                aria-selected="false"
                            >
                                <span className='panelicon'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send-fill" viewBox="0 0 16 16">
  <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z"/>
</svg></span>Sent Items
                            </li>
                            </NavLink>
                            <li
                                class="nav-link mobilepanel"
                                id="v-pills-Inbox-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#v-pills-profile"
                                role="tab"
                                aria-controls="v-pills-profile"
                                aria-selected="false"
                            >
                        <span className='panelicon'>       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark" viewBox="0 0 16 16">
  <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z"/>
</svg></span> Drafts
                            </li>
                            <li
                                class="nav-link mobilepanel"
                                id="v-pills-Inbox-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#v-pills-profile"
                                role="tab"
                                aria-controls="v-pills-profile"
                                aria-selected="false"
                            >
             <span className='panelicon'>                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash2-fill" viewBox="0 0 16 16">
  <path d="M2.037 3.225A.703.703 0 0 1 2 3c0-1.105 2.686-2 6-2s6 .895 6 2a.702.702 0 0 1-.037.225l-1.684 10.104A2 2 0 0 1 10.305 15H5.694a2 2 0 0 1-1.973-1.671L2.037 3.225zm9.89-.69C10.966 2.214 9.578 2 8 2c-1.58 0-2.968.215-3.926.534-.477.16-.795.327-.975.466.18.14.498.307.975.466C5.032 3.786 6.42 4 8 4s2.967-.215 3.926-.534c.477-.16.795-.327.975-.466-.18-.14-.498-.307-.975-.466z"/>
</svg></span> Spam
                            </li>
                        </ul>
  </div>
</div>

<span className='mobdelete'>
<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="white" class="bi bi-trash3-fill" viewBox="0 0 16 16">
  <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
</svg>
</span>
<div className=' mobCompose'>

<NavLink to='/mailbox/maileditor' 
         className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
                            <span className='Editor1'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
</svg>

                                <p>Compose</p>  </span>
                                </NavLink>
                        </div>
        </div>
        </>
    )
}

export const SideBar=()=>{
    const navigate=useNavigate();
    return(
        <>
         <div className="d-flex E-mail">

    <div className='emailSettings'>


        <NavLink
            to="/mailbox/Inbox"
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
          >
           <div className='sidebar_nav ' >
         Inbox
        </div>
          </NavLink>

          <NavLink
            to="/mailbox/Sentitems"
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
          >
           <div className='sidebar_nav ' >
         Sentitems
        </div>
          </NavLink>




        
        <div className='sidebar_nav'   onClick={()=>navigate('/mailbox/Drafts')}>
        Drafts
        </div>
        <div className='sidebar_nav'   onClick={()=>navigate('/mailbox/Sentitems')}>
       Spam
        </div>



    <div className='Composer Compose'>

        <NavLink to='/mailbox/maileditor' 
         className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
        <span className='Editor1'>
            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16" >
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
            </svg>

            <p>Compose</p>  </span>
            </NavLink>
    </div>

</div>


</div>
        </>
    )
}
export default Email;