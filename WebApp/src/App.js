
import './App.css';

import { Routes, Route, Router, useNavigate } from 'react-router-dom'
import Signup from './components/Signup/Signup'
import Login from './components/Login/Login'
import Resetpassword from './components/ForgetPass/Resetpassword';
import ForgetPassword from './components/ForgetPass/Forget';
import React from 'react';
import Landingpage from './components/Landing/Landingpage';
import UserContextProvider from './Context/UserContext';
import Datacard from './components/dataCard/Datacard';
import PrivateRoutes from './Utils/PrivateRoute';
import ContactCard from './components/Contactcard/Contactcard';
import Profiledashboard from './components/Profiledashboard/Profiledashboard';
import Application from './components/Application_Setting/Application';
//import Email from './components/Email/TodoList';
import EditorEmail from './components/Email_Editor/Editor';
import Email from './components/E-mail/Email';
import WriteMail from './components/E-mail/WriteMail';
import Inbox from './components/E-mail/Inbox';
import SentItems from './components/E-mail/SentItems';
import Drafts from './components/E-mail/Drafts';
import Spam from './components/E-mail/Spam';


function App() {
  const Navigate= useNavigate();
  // const isLogin = localStorage.getItem('token');

  return (
    <div className="App">

      <UserContextProvider>

        <Routes>
 
          <Route path="/reset/:userId/:token" element={<ForgetPassword />} />

          <Route path="/reset" element={<Resetpassword />} />
          {/* <Route exact path="/email" element={<PrivateRoutes> <Email /></PrivateRoutes>}/> */}
          <Route path="/setting" element={<PrivateRoutes> <Application /></PrivateRoutes>}/>
          <Route path="/Landing" element={<PrivateRoutes> <Landingpage /></PrivateRoutes>}/>
          <Route path="/datacard" element={<PrivateRoutes><Datacard /> </PrivateRoutes>} />
          <Route path="/profile" element={<PrivateRoutes><Profiledashboard /> </PrivateRoutes>} />
          <Route exact path="/" element={<Login />} />
       
          <Route path="/mailbox/writemail" element={<PrivateRoutes><WriteMail /></PrivateRoutes>} />
          <Route path="/mailbox/maileditor" element={<PrivateRoutes><EditorEmail /></PrivateRoutes>} />


          <Route path="/mailbox" element={<PrivateRoutes><Email /> </PrivateRoutes>} >
          <Route path="/mailbox/Inbox" element={<PrivateRoutes><Inbox /> </PrivateRoutes>} />
          <Route path="/mailbox/Sentitems" element={<PrivateRoutes><SentItems /> </PrivateRoutes>} />
          <Route path="/mailbox/drafts" element={<PrivateRoutes><Drafts /> </PrivateRoutes>} />
          <Route path="/mailbox/spam" element={<PrivateRoutes><Spam/> </PrivateRoutes>} />
          </Route>

          
       


          {/* <Route exact path="/nav" element={<Searchbox />} /> */}
          <Route path="/Signup" element={<Signup />} />
          <Route path="*" element={<Navigate to="/" />} />
          <Route path='/datacard/:id' element={<PrivateRoutes><ContactCard /></PrivateRoutes>} />

        </Routes>
      </UserContextProvider>


    </div>
  );
}

export default App;
