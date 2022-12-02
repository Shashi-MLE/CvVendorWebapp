import React,{ useContext} from 'react';
import { UserContext } from '../../Context/UserContext';
import './history.css'
export default function History() {

   const { history} = useContext(UserContext);

  return (
    <>
    <div>
    <p className='historyData'>Date: DD/MM/YYYY</p>
               {history.map((q,key)=>
                     <div className='col-8 col-sm-8 mt-3 historySett'>
                     <p key={key} className='historysearch'>{q.query}</p>
                  </div>
                     )}
   
   </div>
 
    </>
  )
}
