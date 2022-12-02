import React from 'react'
import './LogoNav.css'
import orglogo from "../../Assets/navlogo.png";


export default function LogoNav() {
  return (
    <div className='logo'>
    <nav class="navbar navbar-light ">
<a class="navbar-brand" href="/">
<img src={ orglogo } alt="ORG Name"  />
</a>
</nav> 
</div>

  )
}
