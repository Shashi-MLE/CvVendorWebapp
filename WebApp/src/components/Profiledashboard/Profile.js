import React,{useContext, useState, useEffect} from 'react';
import border from '../../Assets/border.png';
import { UserContext } from '../../Context/UserContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Profile(props) {
    const{user,updateUser,fullName, setFullName, website, setWebsite, bio, setBio, job, setJob} = useContext(UserContext);

    const[disabled, setDisabled] = useState(true);
    const[inputClass, setInputClass] = useState();
    const[saveBTN, setSaveBTN] = useState('saveBTN');


    useEffect(()=>{
        console.log(user);
      },[])

    const editInput = (e) =>{
        setDisabled(!disabled)
        if(!disabled){
            setInputClass('');
            setSaveBTN('saveBTN');
        }
        else{
            setInputClass('profileInput');
            setSaveBTN();
        }
    }
    

    const updateUserData = async () =>{
        var data = [];
        if(fullName != user.fullName){
            data = [...data,{'Fullname': fullName}]
        }
        if(website != user.website){
            data = [...data,{'Website': website}]
        }
        if(bio != user.bio){
            data = [...data,{'Bio': bio}]
        }
        if(job != user.job_Title){
            data = [...data,{'Job_Title': job}]
        }
        if(data.length>0){
            const res1 =await updateUser(data);
            console.log(res1);
            if(res1==200) {
                
                toast.success("Employee Details Updated Successfully",{autoClose:3000,position:"top-right"})
            }
            else{
                toast.error("Something went wrong !",{autoClose:3000,position:"top-right"})
            }
        }
        else{
            toast.warning("Nothing Changed !",{autoClose:3000,position:"top-right"})
        }
        editInput();
    }

    
    return (
        <div className='Card3'>

            <div className='design-mob'>
            
            <div className='Circle-mob'>
            </div>
            </div>
            <div className='Design'>
            <img src={border} id="img11" alt="border" />
            <div className='Circle'>
                </div>
                {/* <div className='Imgg'>
                   


            </div>
           

</div> 

            <div className='Content'>
                {/* <div className='Circle'>

                </div>  */}


                <div className='Conz'>
                    <div className='profileTop'>
                    <p className='Pro'>Profile</p>
                    <p className='Update'>Update your photo and personal details </p>
                    </div>
                    <div className='editButton'>
                    <button onClick={editInput}>{disabled? ('Edit') : ('Cancel')}</button>
                </div>
                </div>  
                
            </div>
            <div className='Content2'>
                <div className='Conn'>
                <div className='U'>
                    <p className='U1'>
                        Username</p>
                 </div>   
                 <input type='text' id='profileInput' value={fullName} disabled={disabled} className={inputClass} onChange={(e)=>{setFullName(e.target.value)}}/>
                </div>
                
                {/* <div className='U'>
                    <p className='U1'>
                        Username</p>
                    <div className='User'>

                    </div>
                    <div className='Shape1'>

                    </div>
                </div> */}
                <div className='Con1 mt-3'>
                    <div className='Web'>
                        <p className='Website'> Website</p>
                     </div>
                    
                     <input type='text' id='profileInput' value={website} disabled={disabled} className={inputClass} onChange={(e)=>setWebsite(e.target.value)}/>
                </div>
                
                <div className='Con2  mt-3'>
                    <div className='Photo'>
                        <p className='Photo1'> Your Photo This <br/>will be displayed<br/> on your profile</p>

                    </div>
                    <div className='Shape3'>

                    </div>
                    <div className='Tab'>
                        <p>Delete</p>
                        <p>Update</p>
                    </div>
                </div>
                <div className='Con3  mt-3'>
                    <div className='Short'>
                        <p> Your Bio <br/>Write a Short<br/> description</p>

                    </div>
                    <input type='text' id='profileInput' value={bio} disabled={disabled} className={inputClass} onChange={(e)=>setBio(e.target.value)}/>
                </div>
                <div className='Con5  mt-3 mb-5'>
                    <div className='Job'>
                        <p>Job Title</p>

                    </div >
                    <input type='text' id='profileInput' value={job} disabled={disabled} className={inputClass} onChange={(e)=>setJob(e.target.value)}/>
                </div>
                <div className={saveBTN}>
                    <button type="button" className="btn bn1 " onClick={updateUserData}>Save</button>

                </div>



            </div>
            <ToastContainer/>
        </div>
    );
}

export default Profile;