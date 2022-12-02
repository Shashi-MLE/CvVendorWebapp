import React from "react";
import { useContext } from 'react'
import "../Header/LandNavbar.css";
import orglogo from "../../Assets/navlogo.png";
import { UserContext } from "../../Context/UserContext";
import GoogleSearch from "./GoogleSearch";
import LocalSearch from "./LocalSearch";
import { NavLink, Link } from "react-router-dom";



export default function Navbar(props) {



  const {  setIsShown, Logout, handleClickOutSide, isShown, localDataCard, orgLogo } = useContext(UserContext);


  const handleSubmit = (e) => {
    Logout(e);
    localDataCard();
    handleClickOutSide(e);
  } 
  const handleClick = (val) => {
    // 👇️ toggle shown state
    setIsShown(val);
 
  };



  
  return (
    <>
      <div>
        <nav className="navbar header navbar-expand-lg ">
          <div className="container-fluid">
            {/* <a className="navbar-brand logo mt-2" href="#">
              
              <img src={orglogo} alt="ORG Name" width={"70%"} />{" "}
            </a> */}

            <nav class="navbar">
              <a class="navbar-brand" href="'/">
              <div className="navLogo">
    {orgLogo? (<img src={`http://localhost:8081/${orgLogo}`} width="100"  alt="" id="imgmain"/>):(<img src={orglogo} width="100"  alt="" id="imgmain"/>)}
    </div>
              </a>
            </nav>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse "
              id="navbarSupportedContent"
            >
              {isShown ? (
                <GoogleSearch />
              ) : (
                <LocalSearch />
              )}

              <div className="navbar-nav source ms-4 mt-3 mb-lg-0">
                <li className="nav-item dropdown">
                  <button
                    className=" nav-link dropdown-toggle cc"
                    data-bs-auto-close="outside"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {isShown ?   ('Google Search') : ('Local Search')}
                    
                  </button>
                  <ul
                    className="dropdown-menu datamenu"
                    aria-labelledby="navbarDropdown"
                  >
                  <a href="#">
                    <li>
                      <button className="dropdown-item  sourcedrop" onClick={()=>{
                      handleClick(true)
                    }}>
                        {/* {isShown ? ('Local Search') : ('Google Search')} */}
                        GoogleSearch
                      </button>
                    </li>
                    </a>
                    <a href="#">
                    <li>
                    <button className="dropdown-item sourcedrop" onClick={()=>{
                      handleClick(false)
                    }}>Local Search</button>
                    </li>
                    </a>
                    <a href="#">
                    <li>
                      <button className="dropdown-item sourcedrop">LinkedIn</button>
                    </li>
                    </a>
                  </ul>
                </li>
              </div>
<div className="navicons navbar-nav ms-4 mt-1 mb-lg-0 ">
               <div className=" inericon ">
               <li className="nav-item  ms-4   pl-5 ico">
                <Link to ='/datacard'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="55" fill="white" class="bi bi-box-fill" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M15.528 2.973a.75.75 0 0 1 .472.696v8.662a.75.75 0 0 1-.472.696l-7.25 2.9a.75.75 0 0 1-.557 0l-7.25-2.9A.75.75 0 0 1 0 12.331V3.669a.75.75 0 0 1 .471-.696L7.443.184l.004-.001.274-.11a.75.75 0 0 1 .558 0l.274.11.004.001 6.971 2.789Zm-1.374.527L8 5.962 1.846 3.5 1 3.839v.4l6.5 2.6v7.922l.5.2.5-.2V6.84l6.5-2.6v-.4l-.846-.339Z" />
                    </svg>
                    </Link>
                 
                    <div className="IconDesc">Data Card</div>
                </li>
                <li className="nav-item  ms-5   ico">
                  <NavLink className="nav-link " to="/mailbox/Inbox">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
</svg>
                  </NavLink>
                  <div className="IconDesc ">Email</div>
                </li>
               </div>
              <div className="  navbar-nav ms-4    mb-lg-0 navright">

                <li className="nav-item dropdown ms-4 ico ">
                  <a
                    className="nav-link"
                    aria-current="page"
                    data-bs-auto-close="outside"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      fill="white"
                      class="bi bi-bell-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
                    </svg>
                  </a>
                  <ul
                    className="dropdown-menu  iconnot"
                    aria-labelledby="navbarDropdown"
                  >
                    <p className="nothead">Search</p>

                    <div className="row">
                      <div className="col-8 col-s-8 notinfo">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </div>
                      <div className="col-4 col-s-4 nottime">30s ago</div>
                    </div>

                    <div className="row pt-2">
                      <div className="col-8 col-s-8 notinfo">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </div>
                      <div className="col-4 col-s-4 nottime">30s ago</div>
                    </div>

                    <p className="nothead pt-5">Inbox</p>

                    <div className="row pt-1">
                      <div className="col-2 col-s-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="40"
                          height="40"
                          fill="currentColor"
                          class="bi bi-person-circle"
                          viewBox="0 0 16 16"
                        >
                          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                          <path
                            fill-rule="evenodd"
                            d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                          />
                        </svg>
                      </div>
                      <div className="col-6 col-s-5 notinfo">
                        <span>Mike</span>
                        <p>Lorem ipsum dolor</p>
                      </div>
                      <div className="col-4 col-s-4 nottime">30s ago</div>
                    </div>

                    <div className="row pt-1">
                      <div className="col-2 col-s-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="50"
                          height="45"
                          fill="currentColor"
                          class="bi bi-person-circle"
                          viewBox="0 0 16 16"
                        >
                          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                          <path
                            fill-rule="evenodd"
                            d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                          />
                        </svg>
                      </div>
                      <div className="col-6 col-s-5 notinfo">
                        <span>Riser</span>
                        <p>Lorem ipsum dolor</p>
                      </div>
                      <div className="col-4 col-s-4 nottime">30s ago</div>
                    </div>

                    <div className="row pt-1">
                      <div className="col-2 col-s-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="40"
                          height="40"
                          fill="currentColor"
                          class="bi bi-person-circle"
                          viewBox="0 0 16 16"
                        >
                          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                          <path
                            fill-rule="evenodd"
                            d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                          />
                        </svg>
                        
                 
                      </div>
                      <div className="col-6 col-s-5 notinfo">
                        <span>Riser</span>
                        <p>Lorem ipsum dolor</p>
                      </div>
                      <div className="col-4 col-s-4 nottime">30s ago</div>
                    </div>
                  </ul>
                  
                  <div className="IconDesc">Notification</div>
                </li>

                <li className="nav-item dropdown ms-5 ico ">
                  <a
                    className="nav-link "
                    aria-current="page"
                    data-bs-auto-close="outside"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      fill="white"
                      class="bi bi-person-circle"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                      <path
                        fill-rule="evenodd"
                        d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                      />
                    </svg>
                  </a>
                  <ul
                    className="dropdown-menu iconpro"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <NavLink to="/profile"> <button className="dropdown-item " > Profile</button></NavLink>
                    </li>
                    <li>
                     
                    </li>
                    <li>
                    <NavLink to="/setting"> <button className="dropdown-item " > Setting</button></NavLink>
                    </li>
                    <li>
                      <button className="dropdown-item" onClick={(e) => handleSubmit(e)}>Logout </button>
                    </li>
                  </ul>
                  
                  <div className="IconDesc1">Profile</div>
                </li>
                
              </div>
                </div>

            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
