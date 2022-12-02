import React, {useContext, useState} from 'react'
import '../Signup/Signup.css'
// import { metadataFilesUpload } from '../../apis/api';
import { UserContext } from '../../Context/UserContext';
import { NavLink } from "react-router-dom";
import LogoNav from '../Header/LogoNav'
import {useNavigate} from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { ToastContainer, toast } from 'react-toastify';
//   import 'react-toastify/dist/ReactToastify.css';

import showPwdImg from '../../Assets/show-password.svg';
import hidePwdImg from '../../Assets/hide-password.svg';



export default function  Signup (props) {



    const{metadataFilesUpload,isRevealPwd, setIsRevealPwd,isRevealConPwd, setIsRevealConPwd}=useContext(UserContext);
 
    const navigate=useNavigate();
 


    const[Fullname, setFullname]=useState('');
    const[Email, setEmail]=useState('');
    const[Mobilenum, setMobilenum]= useState('');
    const[Companyname, setCompanyname]= useState('');
    const[Password, setPassword]= useState('');
    const[Confirmpassword, setConfirmpassword]=useState('');
    var error;
   const validate = ()=>{
    const regexpass = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$');
    const regexnum = new RegExp('[0-9]{10}');
    if (Confirmpassword !== Password) {
      error = "Password and Confirmpassword should be match";
      
    }
    else if (!(regexpass.test(Password))){
error = "Password should contain atleast 1 Uppercase,1 Lowercase, 1 Number, 1 Symbol, symbol allowed --> !@#$%^&*_=+-and Min 8 chars and Max 12 chars";
    }
    else if (isNaN(Mobilenum)) {
      error = "Mobile no. should be numberic only"
    }
    else if (!(regexnum.test(Mobilenum))){
      error = "Mobile number should contain ten digit numeric only"
    }
    else if (!isNaN(Fullname) ){
      error = "Fullname should contain only alphabets"
    }
    }

const Userdata = async (e) => {
    e.preventDefault();

var val = await validate();
console.log(error);
if(!error){
    const body1 = {
       
       'Fullname': Fullname,
       'Email': Email,
       'Mobilenum': Mobilenum,
       'Companyname': Companyname,
       'Password': Password,
      
      }

    const res = await metadataFilesUpload(body1);
    console.log(res);
    if(res === 201){
        setFullname('');
        setCompanyname('');
        setEmail('');
        setMobilenum('');
        setPassword('');
        // notify();
        toast.success("User registered Successfully",{autoClose:2000,position:"top-right"})
    
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
      <div class="container mt-4 ">
        <div class="Header-txt mt-4 ">
          <h2>Welcome</h2>
        </div>

        <form
          className="needs-validation"
          onSubmit={(e) => Userdata(e)}
          novalidate
        >
          <div class="form-field ">
            <div className="input-one">
              <div class="input-group mt-4">
                <div class="input-group-prepend  ">
                  <span
                    class="input-group-text bg-transparent border-right-0 border"
                    id="basic-addon"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="37"
                      fill="#000000"
                      class="bi bi-person"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                    </svg>{" "}
                  </span>
                </div>
         
                <input
                  type="text"
                  value={Fullname}
                  class="form-control forminput1"
                  id="name"
                  // pattern="^[a-zA-Z\s]+$"
                  title="Alphabets only"
                  placeholder="Full Name"
                  onChange={(e) => setFullname(e.target.value)}
                  required
                />
                 
              </div>

              <div class="input-group mt-4">
                <div class="input-group-prepend  ">
                  <span
                    class="input-group-text bg-transparent"
                    id="basic-addon"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="37"
                      fill="#000000"
                      class="bi bi-envelope"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                    </svg>{" "}
                  </span>
                </div>
                <input
                  type="email"
                  value={Email}
                  class="form-control forminput1 text-lowercase"
                  id="email"
                  placeholder=" example@email.com"
                  aria-describedby="emailHelp"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                
              </div>

              <div class="input-group mt-4">
                <div class="input-group-prepend  ">
                  <span
                    class="input-group-text bg-transparent"
                    id="basic-addon"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="37"
                      fill="#000000"
                      class="bi bi-telephone"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                    </svg>{" "}
                  </span>
                </div>
                <input
                  type="tel"
                  value={Mobilenum}
                  class="form-control forminput1"
                  id="mobileno"
                  maxLength={10}
                  placeholder=" mobile number"
                  // pattern="[0-9]{10}"
                  title="Ten digits code"
                  onChange={(e) => setMobilenum(e.target.value)}
                  required
                />
                
              </div>
              <div className="backlog mt-3" >
          <NavLink to="/">  <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
</svg><span className="ps-3">login</span></NavLink>
                </div>
            </div>

            <div class="input-two">
            <div class="input-group mt-4">
                <div class="input-group-prepend  ">
                  <span
                    class="input-group-text bg-transparent"
                    id="basic-addon"
                   
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="37"
                      fill="#000000"
                      class="bi bi-building"
                      viewBox="0 0 16 16"
                      
                    >
                      <path
                        fill-rule="evenodd"
                        d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694 1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z"
                      />
                      <path d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z" />
                    </svg>{" "}
                    
                  </span>
                </div>
                <input
                  type="companyname"
                  value={Companyname}
                  pattern="^[a-zA-Z\s]+$"
                  class="form-control forminput1"
                  id="company"
                  placeholder="Company Name"
                  onChange={(e) => setCompanyname(e.target.value)}
                  required
                />
                
              </div>
              
              <div class="input-group mt-4">
                
                <div class="input-group-prepend  ">
                  <span
                    class="input-group-text bg-transparent"
                    id="basic-addon"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="37"
                      fill="#000000"
                      class="bi bi-key"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8zm4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5z" />
                      <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                    </svg>{" "}
                  </span>
                </div>
                <input
                  type={isRevealPwd ? "text" : "password"}
                  value={Password}
                  class="form-control forminput1 bordericon"
                  id="pass"
                  placeholder=" Password"
                  onChange={(e) => setPassword(e.target.value)}
                  // pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$" 
                  title="At least 1 Uppercase,
                  1 Lowercase, 1 Number, 1 Symbol, 
                  symbol allowed --> !@#$%^&*_=+-
                   and Min 8 chars and Max 12 chars"
                  required
                />
               <img className='passicon1'
          title={isRevealPwd ? "Hide password" : "Show password"}
          src={isRevealPwd ? showPwdImg : hidePwdImg}
          onClick={() => setIsRevealPwd(prevState => !prevState)}
        />
              </div>

                 
              <div class="input-group mt-4">
                <div class="input-group-prepend  ">
                  <span
                    class="input-group-text bg-transparent"
                    id="basic-addon"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="37"
                      fill="#000000"
                      class="bi bi-key"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8zm4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5z" />
                      <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                    </svg>{" "}
                  </span>
                </div>
                <input
                 type={isRevealConPwd ? "text" : "password"}
                  value={Confirmpassword}
                  class="form-control forminput1 bordericon"
                  id="conpass"
                  placeholder="Confirm Password"
                  onChange={(e) => setConfirmpassword(e.target.value)}
                  // pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$" 
                  required
                />
<img className='passicon1'
          title={isRevealConPwd ? "Hide password" : "Show password"}
          src={isRevealConPwd ? showPwdImg : hidePwdImg}
          onClick={() => setIsRevealConPwd(prevState => !prevState)}/>
              </div>
              
             
            
                    
              <div className="submit-b mt-4">
                <button
                  type="submit"
                  class="btn btn-primary mt-2 "
                  id="signupbtn"
                >
                  CREATE ACCOUNT
                </button>
              </div>
          
        
            </div>
          </div>
          <div className="backlog2 " >
          <NavLink to="/">  <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
</svg><span className="ps-3">login</span></NavLink>
                </div>
          {/* <div className="message">{message ? <p>{message}</p> : null}</div> */}
        </form>
      </div>
      <ToastContainer/>
      </>
  );
}


