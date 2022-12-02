import React, { Profiler } from 'react'
import Logo from "../../Assets/navlogo.png"
import "./Navbarmini.css"

const NavbarMini = () => {
    return (
        <div className='Nav-two'>
            <nav class="navbar ">
                <a class="navbar-brand" href="#">
                    <img src={Logo} alt="mle" id="miniico" />
                </a>

            </nav>
            <div class="dropdown">
  <a  type="text" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
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
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" > Mi cuenta</a>
    <a class="dropdown-item" > Cerrar Sesión</a>
  </div>
</div>

            {/* <div class="dropdown">
  <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"
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
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
    <li><a href="#">Action</a></li>
    <li><a href="#">Another action</a></li>
    <li><a href="#">Something else here</a></li>
    <li><a href="#">Separated link</a></li>
  </ul>
            </div> */}
           
              
           
        </div>
    )
}

export default NavbarMini
