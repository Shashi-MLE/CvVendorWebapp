import React from 'react';
import './MyDetails.css'

function MyDetails() {
    return (
        <div className='Card'> 
            <div className='Card2'>
        <div className='Text'>
            <p  className='Text1'>Hi! Name</p>
        </div>
        <div className='AllData'>
        <div className='Image1'> 
        </div>
        <div className='Details1'>
            <div className='d1'>
                <p>NAME</p>
                  <p>KimberlyWright</p>
            </div>
            <div className='d2'>
                <p>Job Title </p>  
                <p>Senior Accountant</p>
            </div>
            <div className='d3'>
               <p>E-mail</p>
               <p>kwrright@dmoz.org</p> 
            </div>
        </div>
        </div>
        
        <div className='Bio'>
            <div className='Bio1'> 
            <p> Your Bio</p>
            </div>
            
        </div>
        </div>
        </div>
       
    );
}

export default MyDetails;