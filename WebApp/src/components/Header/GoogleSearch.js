import React, { useContext } from 'react'
import { UserContext } from '../../Context/UserContext';
import '../Header/Filter.css';


export default function GoogleSearch(props) {

  const { id, GoogleSearch ,refOne, setId,handleClickOutSide, searchResult } = useContext(UserContext)


  const handleclick = async (e) => {
   GoogleSearch();
   handleClickOutSide(e);
  }
  

  return (
    <>

      <div className=' position-relative '    data-bs-auto-close="outside">
        <div class="input-group">
          <div class="form-outline">
            <input className="form-control navsearch1" ref={refOne} type="search"  onKeyPress={handleclick} value={id} onChange={e => setId(e.target.value)} placeholder="Google Search" aria-label="Search" />
          
          </div>
 
        </div>

    

        <div className=' SearchAPI' >
        {searchResult.filter(result =>{
                if(id ==='' ){
 
                  return;
                }else {
                  return result;
                }
              }).map((posts, i) => (
                <div className='Gsearch' key={i}>
                 <p><a href={posts.link} target= "_blank" >{posts.title}</a></p>
                 <p>{posts.snippet}</p>
                  </div>
              ))}
        </div>

      </div>

    </>
  )
}
