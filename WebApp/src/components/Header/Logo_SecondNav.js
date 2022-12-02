import React,{useContext} from 'react'
import './Logo_SecondNav.css'
import orglogo from "../../Assets/navlogo.png";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";

export default function Logo_SecondNav() {


    const { refOne, setIsShown, Logout, query, handleClickOutSide, setQuery, isShown, localData, localDataCard, orgLogo } = useContext(UserContext);


    const handleSubmit = (e) => {
      Logout(e);
      localDataCard();
      handleClickOutSide(e);
    }



  return (
    <div className='logo'>
      <nav class="navbar navbar-light ">
        <NavLink class="navbar-brand " id='#imgmain1' to="/Landing">
          <img src={orglogo} alt="ORG Name" />
        </NavLink>
        <li className="nav-item dropdown  Second-pbadge">
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
              width="45"
              height="45"
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
              <hr class="dropdown-divider" />
            </li>
            <li>
            <NavLink to="/setting"> <button className="dropdown-item">Setting</button></NavLink>
            </li>
            <li>
              <button className="dropdown-item" onClick={(e) => handleSubmit(e)}>Logout </button>
              
            </li>
          </ul>
        </li>

      </nav>
    </div>

  )
}
