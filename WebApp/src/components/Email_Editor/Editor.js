import React from 'react'
import './Editor.css'
import Editoremail from '../Email_Editor/Editoremail'
import LogoSecondNav from '../Header/Logo_SecondNav'

const EditorEmail = () => {
    return (
        <>
            <LogoSecondNav />

            <div className='EmailEditor' >


                <div className="content">

                    <div class="card  Templatemain">
                        <div class="card-body">
                            <h5 class="card-title">Email Template UI</h5>

                        </div>
                    </div>
                    <div class="card  Templatemain">
                        <div class="card-body">
                            <h5 class="card-title">Email Template UI</h5>

                        </div>
                    </div>
                    <div class="card  Templatemain">
                        <div class="card-body">
                            <h5 class="card-title">Email Template UI</h5>

                        </div>
                    </div>
                </div>



                <div className="editormail" >
                    
                       
                            <div class="form-group3 mt-2">
                                <input type="email" class="form-control" id="exampleInputEmail3" aria-describedby="emailHelp" placeholder="TO" />
                            </div>
                            <div class="form-group3 mt-2">
                                <input type="email" class="form-control" id="exampleInputEmail3" aria-describedby="emailHelp" placeholder="CC" />
                            </div>
                            <div class="form-group3 mt-2 mb-3">
                                <input type="email" class="form-control" id="exampleInputEmail3" aria-describedby="emailHelp" placeholder="Add Subject" />
                            </div>
                      
                        <div>
                            <Editoremail />

                        </div>
                        <div className="btnsend mailbtn">
           
                                <button type="button" class="btn btn-primary btn-sm send" >Send</button>
                                <button type="button" class="btn btn-primary btn-sm discard" >Discard</button>
                            
                        </div>
                   
                   

                </div>

            </div>

        </>
    )
}

export default EditorEmail