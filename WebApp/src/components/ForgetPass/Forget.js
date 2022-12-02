import React, { useState, useContext, useEffect } from 'react'
import LogoNav from '../Header/LogoNav'
import '../ForgetPass/forgetpass.css'
import { UserContext } from '../../Context/UserContext';
import {useNavigate} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import showPwdImg from '../../Assets/show-password.svg';
import hidePwdImg from '../../Assets/hide-password.svg';



const Forget = (props) => {

  const { changPswd, isRevealPwd, setIsRevealPwd, isRevealConPwd, setIsRevealConPwd } = useContext(UserContext);

  const navigate=useNavigate();
  const [Confirmpassword, setConfirmpassword] = useState('');
  const [password, setPassword] = useState("");

  var error;
  const validate = async () => {
    const regexpass = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$');

    if (Confirmpassword != password) {
      error = "Password and Confirmpassword should be match";

    }
    else if (!(regexpass.test(password))) {
      error = "Password should contain atleast 1 Uppercase,1 Lowercase, 1 Number, 1 Symbol, symbol allowed --> !@#$%^&*_=+-and Min 8 chars and Max 12 chars";
    }


  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await validate();
    if (!error) {
      const res = await changPswd(password);
      if (res.status === 200) {

        setPassword('');
        setConfirmpassword('')
        // notify();
        toast.success("Password Changed Successfully",{autoClose:2000,position:"top-right"})
        setTimeout(() => {
          navigate("/");
        }, 3000);
      }
      else{
        toast.error("Something went wrong !",{autoClose:5000,position:"top-right"})
    }
  }
  else {
    toast.warning(error,{autoClose:5000,position:"top-right"})
  }
  }


  return (
    <>
      <LogoNav />

      <div className=' mt-5'>
        <p className='headr'>Forget Your Password</p>
      </div>

      <div className='container-fluid main'>

        <div>
          <form>
            <div class="input-group mt-5">
              <div class="input-group-prepend  ">
                <span class="input-group-text bg-transparent border-right-0 border" id="icon1r"><svg xmlns="http://www.w3.org/2000/svg" width="23" height="42" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                </svg>     </span>
              </div>
              <input type={isRevealConPwd ? "text" : "password"} class="form-control inputr bordericon" id="exampleFormControlInput1" onChange={(e) => setPassword(e.target.value)}
                value={password} aria-describedby="emailHelp" placeholder="Enter Password" title="At least 1 Uppercase,
                1 Lowercase, 1 Number, 1 Symbol, 
                symbol allowed --> !@#$%^&*_=+-
                 and Min 8 chars and Max 12 chars"
                required />
              <img className='passicon'
                title={isRevealConPwd ? "Hide password" : "Show password"}
                src={isRevealConPwd ? showPwdImg : hidePwdImg}
                onClick={() => setIsRevealConPwd(prevState => !prevState)} />
            </div>

            <div class="input-group mt-5">
              <div class="input-group-prepend  ">
                <span class="input-group-text bg-transparent border-right-0 border" id="icon1r"><svg xmlns="http://www.w3.org/2000/svg" width="23" height="42" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                </svg>     </span>
              </div>
              <input type={isRevealPwd ? "text" : "password"} class="form-control inputr bordericon" id="exampleFormControlInput1" aria-describedby="emailHelp" onChange={(e) => setConfirmpassword(e.target.value)} placeholder="Confirm Password" required />
              <img className='passicon'
                title={isRevealPwd ? "Hide password" : "Show password"}
                src={isRevealPwd ? showPwdImg : hidePwdImg}
                onClick={() => setIsRevealPwd(prevState => !prevState)} />
            </div>


            <button type="submit" onClick={handleSubmit}
              class="btn resetr">Submit</button>
          </form>
        </div>
      </div>
      <ToastContainer/>
    </>
  )
}

export default Forget;
