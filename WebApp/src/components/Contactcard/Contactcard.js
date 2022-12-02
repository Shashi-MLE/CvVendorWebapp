import React,{useContext, useState,useEffect} from 'react';
import Rectangle from '../../Assets/Rectangle.png';
import './Contact.css';
import Companylogo from '../../Assets/Companylogo.png';
import { UserContext } from '../../Context/UserContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const  Contactcard =() =>{
    
    const{getContact,companyCard,updateContact,
        Company_Name,setCompany_Name,
        Fore_name,setFore_name,
        Email_Address,setEmail_Address,
        Job_Title,setJob_Title,
        Telephone_Number,setTelephone_Number,
        Industry_Sector,setIndustry_Sector,
        Town,setTown,
        Employee_in_Business,setEmployee_in_Business,
        Turnover,setTurnover} = useContext(UserContext); 
    const[disabled, setDisabled] = useState(true);
    const[inputClass, setInputClass] = useState();
    const[saveBTN, setSaveBTN] = useState('saveBTN');


    useEffect(()=>{
        const spilitUrl = window.location.href.split('/')
        getContact(spilitUrl[spilitUrl.length - 1])
    },[window.onload])


    const editInput = (e) =>{
        setDisabled(!disabled)
        if(!disabled){
            setInputClass('');
            setSaveBTN('saveBTN');
        }
        else{
            setInputClass('contactCardInput');
            setSaveBTN();
        }
    }

    const updateContactData = async () =>{
        let data = [];
        data = [...data,{'_id': companyCard._id}]
        console.log(data);
        if(Company_Name && Company_Name != companyCard.Company_Name){
            data = [...data,{'Company_Name': Company_Name}]
        }
        if(Email_Address && Email_Address != companyCard.Email_Address){
            data = [...data,{'Email_Address': Email_Address}]
        }
        if(Job_Title && Job_Title != companyCard.Job_Title){
            data = [...data,{'Job_Title': Job_Title}]
        }
        if(Telephone_Number && Telephone_Number != companyCard.Telephone_Number){
            data = [...data,{'Telephone_Number': Telephone_Number}]
        }
        if(Industry_Sector && Industry_Sector != companyCard.Industry_Sector){
            data = [...data,{'Industry_Sector': Industry_Sector}]
        }
        if(Town && Town != companyCard.Town){
            data = [...data,{'Town': Town}]
        }
        if(Employee_in_Business && Employee_in_Business != companyCard.Employees_in_Business){
            data = [...data,{'Employee_in_Business': Employee_in_Business}]
        }
        console.log(Turnover);
        console.log(companyCard.Turnover);
        if(Turnover && Turnover != companyCard.Turnover){
            data = [...data,{'Turnover': Turnover}]
        }
        if(data.length>1){
            console.log(data);
            const res1 =await updateContact(data);
            if(res1==200) {
                
                toast.success("Employee Details Updated Successfully",{autoClose:3000,position:"top-right"})
            }
            else{
                toast.error("Something went wrong !",{autoClose:3000,position:"top-right"})
            }
        }
        else{
            toast.warning("Nothing Changed",{autoClose:3000,position:"top-right"})
        }
        editInput();
    }

    return (
        <div className='Contactboard'>
            <div className=" Contactboarder ">
            <img src={Rectangle} id="Rec" alt="Rectangle" class="d-none d-lg-block"/>
                <div className='Photo11 d-none d-lg-block'>
                <img src={Companylogo} id="Company" alt="Companylogo" class="d-none d-lg-block"/>

                </div>
                <div className='Photo11-mob '>
                <img src={Companylogo} id="Company" alt="Companylogo" class=""/>

                </div>
                <div className='Butt mt-4 d-none d-lg-block'>
            <button type="button" className="btn bn5" onClick={editInput}>{disabled? ('Edit') : ('Cancel')}</button></div>
                <div className='Paragraph'>
            <div className='c1'>
                <p>CompanyName</p>
                <span>
                    <input type='text' id='contactCard' value={Company_Name} disabled={disabled} className={inputClass} onChange={(e) =>{setCompany_Name(e.target.value)}}></input></span>

                    {/* {companyCard.Company_Name}              */}
                </div>
            <div className='c2'>
                <p>Name</p>
                <span><input type='text' id='contactCard' value={Fore_name} disabled={disabled} className={inputClass} onChange={(e) =>{setFore_name(e.target.value)}}></input></span>
                {/* <p>{companyCard.Fore_name} {companyCard.Surname}  </p> */}
            </div>
            
            <div className='c3'>
               <p>E-mail</p>
            <span><input type='email' id='contactCard' value={Email_Address} disabled={disabled} className={inputClass} onChange={(e) =>{setEmail_Address(e.target.value)}}></input></span>
               {/* <p>{companyCard.Email_Address}</p>  */}
            </div>
            <div className='c4'>
               <p>JobTitle</p>
               <span><input type='text' id='contactCard' value={Job_Title} disabled={disabled} className={inputClass} onChange={(e) =>{setJob_Title(e.target.value)}}></input></span>
               {/* <p>{companyCard.Job_Title}</p>  */}
            </div>
            <div className='c5'>
               <p>TelephoneNumber</p>
               <span><input type='text' id='contactCard' value={Telephone_Number} disabled={disabled} className={inputClass} onChange={(e) =>{setTelephone_Number(e.target.value)}}></input></span>
               {/* <p>{companyCard.Telephone_Number}</p>  */}
            </div>
            <div className='c6'>
               <p>IndustrySector</p>
               <span><input type='text' id='contactCard' value={Industry_Sector} disabled={disabled} className={inputClass} onChange={(e) =>{setIndustry_Sector(e.target.value)}}></input></span>
               {/* <p>{companyCard.Industry_Sector}</p>  */}
            </div>
            <div className='c7'>
               <p>Town</p>
               <span><input type='text' id='contactCard' value={Town} disabled={disabled} className={inputClass} onChange={(e) =>{setTown(e.target.value)}}></input></span>
               {/* <p>{companyCard.Town}</p>  */}
            </div>
            <div className='c8'>
               <p>EmployeeInBusiness</p>
               <span><input type='text' id='contactCard' value={Employee_in_Business} disabled={disabled}  className={inputClass} onChange={(e) =>{setEmployee_in_Business(e.target.value)}}></input></span>
               {/* <p>{companyCard.Employee_in_Business}</p>  */}

            </div>
            <div className='c9 mb-4'>
               <p>Turnover</p>
               <span><input type='text' id='contactCard' value={Turnover} disabled={disabled} className={inputClass} onChange={(e) =>{setTurnover(e.target.value)}}></input></span>
               {/* <p>{companyCard.Turnover}</p>  */}
               
            </div>
            <div className='BOX mb-4'>
            <div className={saveBTN}>
                    <button type="button" className="btn bn1 " onClick={updateContactData}>Save</button>

                </div>

            
            </div>
            
            </div>
               
            
        </div>
       
       
            
        <ToastContainer/>
        </div>
    );
}

export default Contactcard;