import React,{useState,useContext} from 'react'
import { UserContext } from '../../Context/UserContext';

import './details.css'


export default function Details(props) {
  const {applicationFilesUpload} = useContext(UserContext);
  const [applicationFiles, setApplicationFile] = useState('');
 

  
  const [fileInfo, setfileInfo] = useState({
    file: [],
    filepreview: null,
  });

  const MultipleFileChange = async (e) => {
    setApplicationFile(e.target.files);
     setfileInfo({
       file: e.target.files[0],
      filepreview: URL.createObjectURL(e.target.files[0]),
    });
  }
  const UploadapplogoFiles = async (event) => {
    event.preventDefault();
     
     event.stopPropagation();
  var success = false;
  const formData = new FormData();
  formData.append('files', applicationFiles);
  for (let i = 0; i < applicationFiles.length; i++) {
    formData.append('files', applicationFiles[i]);
  }
  var response = await applicationFilesUpload(formData);
  if (response.status===200) {
    alert('Image successfully uploaded');
  }
  else{
    alert('Something went wrong !!!')
  }
  
 
  }
  
  return (
    <>

    <div className='Appsett mt-3 ms-5'>
      <form onSubmit={(event) => UploadapplogoFiles(event) }>
    <span className='appchange'>
        {fileInfo.filepreview !== null ?
  <img className="me-2"  src={fileInfo.filepreview} alt="UploadImage" style={{'width':'50px','height':'50px'}} />        
          : null} 
          <input type="file" id="file" single accept="image/png, image/jpeg" onChange={(e) => MultipleFileChange(e)}/>
    <label for="file" className='changeapp' >Change Logo</label>
  </span>
    
    <div className='mt-4 appdata'>
<p>Data Source</p>
<div className='mt-5'>
    <span className='socialicon'>
    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16">
  <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/>
</svg>
    </span>
    <span className='socialicon ms-4 me-4'>
    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
</svg>
    </span>
    <span className='socialicon'>
    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-microsoft" viewBox="0 0 16 16">
  <path d="M7.462 0H0v7.19h7.462V0zM16 0H8.538v7.19H16V0zM7.462 8.211H0V16h7.462V8.211zm8.538 0H8.538V16H16V8.211z"/>
</svg>
    </span>
</div>
    </div>
    <div className='mt-5 appver'>
        <p>Version: 1.0 </p>
    </div>
    <div className='mt-5 '>
        <button type='submit' className='appsave'>Save</button>
    </div>
    </form>
    </div>

    </>
  )
}
