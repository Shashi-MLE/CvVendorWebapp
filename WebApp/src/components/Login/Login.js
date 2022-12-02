import React, { useState, useContext } from 'react'
import { Link } from "react-router-dom";
import './Login.css'
import { UserContext } from '../../Context/UserContext';
import Logo from '../../Assets/navlogo.png';
import { useEffect } from 'react';
import showPwdImg from '../../Assets/show-password.svg';
import hidePwdImg from '../../Assets/hide-password.svg';

export default function Login(props) {

    const { UserLogin,isRevealPwd, setIsRevealPwd } = useContext(UserContext);

    const [email, setEmail] = useState('');
    const [pswd, setPswd] = useState('');
    



    const Usersd = async (e) => {
        e.preventDefault();
 
        const credentials={
            'email':email,
            'password':pswd
        }

        UserLogin(credentials);
    }


    // useEffect(()=>{
    //     setCredentials({
    //         'email' : email,
    //         'password' : pswd
    //     })
    // },[email,pswd]);

    return (
        <div className='Contain'>
            <div className='login-grid container mt-6'>

                <div className='img-m-grid d-lg-none  '>
                    <img src={Logo} alt="logo" />
                </div>

                <div className="Form-login">
                    <form form onSubmit={(e) => Usersd(e)}>
                        <h4>Lead Generation Tool</h4>

                        <div class="input-group mb-2">
                            <div class="input-group-prepend  ">
                                <span class="input-group-text bg-transparent border-right-0 border" id="icon1"><svg xmlns="http://www.w3.org/2000/svg" width="23" height="42" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                </svg>     </span>
                            </div>
                            <input type="email" value={email} class="form-control inputb" onChange={(e) => setEmail(e.target.value)} id="exampleFormControlInput1" aria-describedby="emailHelp" placeholder="example@email.com" required />

                        </div>



                        <div class="input-group mt-5">
                            <div class="input-group-prepend  ">
                                <span class="input-group-text bg-transparent border-right-0 border" id="icon1"><svg xmlns="http://www.w3.org/2000/svg" width="23" height="42" fill="currentColor" class="bi bi-lock-fill" viewBox="0 0 16 16">
                                    <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
                                </svg>     </span>
                            </div>
                            <input type={isRevealPwd ? "text" : "password"} value={pswd} class="form-control inputb bordericon" onChange={(e) => setPswd(e.target.value)} id="exampleFormControlInput1" placeholder="Password"
                        
                                title="At least 1 Uppercase,
                                                      1 Lowercase, 1 Number, 1 Symbol, 
                                                      symbol allowed --> !@#$%^&*_=+-
                                                       and Min 8 chars and Max 12 chars"
                                required
                            />
                            <img className='passicon'
          title={isRevealPwd ? "Hide password" : "Show password"}
          src={isRevealPwd ? showPwdImg : hidePwdImg}
          onClick={() => setIsRevealPwd(prevState => !prevState)}
        />
                             {/* <span class="input-group-text bg-transparent border-left-0 border passicon" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
  <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
  <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
</svg> </span> */}
                        </div>
                        <div className=' '>
                            <Link to="/Signup"><p className=' response'> Don't have an account?</p></Link>
                            {/* <button type="button" class="btn response  mt-5 ms-4 " >Sign up</button> */}
                        </div>

                        <div className='forgot '>
                            <Link to="/reset"><p>Forgot Password?</p></Link>
                        </div>
                        <div className='login-buttom'>
                            <button type="submit" class="btn loginbtn btn-primary mt-4  " >Login</button>

                        </div>

                        {/* <div className='  d-flex  d-lg-block'>
                            <Link to="/Signup"><p className='mt-5 ms-4 response'> Don't have a account?</p></Link>
                        </div> */}
                            {/* <button type="button" class="btn response  mt-5 ms-4 " >Sign up</button> */}
                        





                    </form>
                </div>

            </div>

            <div className='img-grid d-none d-lg-block'>
                <div className='sidelogo'><img src={Logo} alt="logo" /></div>
                {/* <div><Link to="/Signup"><button type="button" class="btn signupbtn  mt-5 ms-4 " >Sign up</button></Link> </div> */}
            </div>
        </div>
    )
}


