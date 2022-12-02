import React, { useContext } from 'react'
import { UserContext } from '../../Context/UserContext';
import "../Header/LandNavbar.css";
import user from '../../Assets/usericon.png';
import { NavLink, Link } from "react-router-dom";



export default function GoogleSearch(props) {

  const { refOne, query,handleKeyPress, handleClickOutSide, setQuery, localData,localInput } = useContext(UserContext);


  const localSearch = (event) => {
    setQuery(event.target.value)
    handleClickOutSide(event);
   
  }
  

  return (
    <>
    <div className="local-leads position-relative" >

      <input
        className="form-control  navsearch"
        type="search"
        placeholder=" Enter Company Name"
        aria-label="Search"
        ref={refOne}
        value={localInput}
        onChange={event => localSearch(event)}
        onKeyPress={(ev)=>handleKeyPress(ev)}
      />
      <div className="leadData"  >

        {localData.filter(post => {
          if (query === '') {
            return;
          } else if (post.Company_Name.toLowerCase().includes(query.toLowerCase())) {
            return post;
          }

        }).map((post, index) => (
          <>

            <div className='rescard' key={index}>
              <div className='useravt'>
                <img src={user} id="img7" alt="user" />

              </div>

              <div className='user-card'>

                <Link to ={`/datacard/${post._id}`}><p id="p1">{post.Fore_name}  {post.Surname}</p>
                <p id="p2">{post.Company_Name}</p>
                <p id="p2">{post.Job_Title}</p>
                <p id="p3">{post.Email_Address}</p>
                <p id="p4">Phone: 234455555</p>
                </Link>

              </div>

            </div>
          </>
        ))}

      </div>

    </div>
  </>
  )
}
