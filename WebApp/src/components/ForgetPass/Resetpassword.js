import React, { useState, useContext } from 'react'
import '../ForgetPass/resetpassword.css';
import LogoNav from '../Header/LogoNav'
import { UserContext } from '../../Context/UserContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import { ToastContainer, toast } from 'react-toastify';
//   import 'react-toastify/dist/ReactToastify.css';

const Resetpassword = (props) => {
    const{resetPassword}=useContext(UserContext);

    const[email,setEmail] = useState('');
//        const notify = () => toast.success('Email sent successfully', {
//       position: toast.POSITION.TOP_RIGHT
//   });

   const handleSubmit= async(e)=>{
        e.preventDefault();
         if(email == ''){
            toast.warning("Please input email",{autoClose:3000,position:"top-right"})
         }
      var res =await resetPassword(email);
      if(res.status==200) {
        setEmail('');
        toast.success("Email sent Successfully",{autoClose:3000,position:"top-right"})
    }
    else{
        toast.error("Something went wrong !",{autoClose:3000,position:"top-right"})
    }
      
    }
    return (
        <>
        <LogoNav />

<div className=' mt-5'>
<p className='headr'>Reset Your Password</p>
</div>

<div className='container-fluid mainr'>

<div>
<form>
<div class="input-group mt-5">
                <div class="input-group-prepend  ">
                    <span class="input-group-text bg-transparent border-right-0 border" id="icon1r"><svg xmlns="http://www.w3.org/2000/svg" width="23" height="42" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
</svg>     </span>
                </div>
                <input type="email" class="form-control inputr" value={email} id="exampleFormControlInput1" onChange={(e) => setEmail(e.target.value)} aria-describedby="emailHelp" placeholder="example@email.com" required />

            </div>
 
  
  <button type="submit" onClick={handleSubmit} class="btn resetr">Send Verification Link</button>
</form>
{/* <ToastContainer /> */}
</div>
</div>
<ToastContainer/>
        </>
    )
}
export default Resetpassword;