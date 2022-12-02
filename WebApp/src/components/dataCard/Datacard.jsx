import React, { useContext, useEffect } from 'react'
import '../dataCard/datacard.css'
import { UserContext } from '../../Context/UserContext';
import { Link } from 'react-router-dom';
import { MultiSelect } from "react-multi-select-component";
import { useState } from 'react';
import Logo_SecondNav from '../Header/Logo_SecondNav'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactPaginate from 'react-paginate';
import './Pagin.css'
// import Select from 'react-select'

const Datacard = (props) => {

    const { localData, getContact, setMultiselectedFilter, Country, JobTitle, exportLocalLeads, leadDataImport, setSorting, setOnPage, pageCount,
        count, setCount
    } = useContext(UserContext);

    const [selectJob, setSelectJob] = useState([]);
    const [selectCountry, setselectCountry] = useState([]);

    const [countryFilter, setCountryFilter] = useState([]);
    const [jobFilter, setJobFilter] = useState([]);
    const [importFiles, setImportFile] = useState();
    const [sort, setSort] = useState(true);


    const handlePageClick = (e) => {
        setOnPage(e.selected);
    };



    const onFileUpload = async () => {

        let res;
        if (importFiles) {
            const formData = new FormData();
            formData.append("file", importFiles);
            res = await leadDataImport(formData);
            if (res.status == 200) {
                toast.success("Data imported Successfully", { autoClose: 3000, position: "top-right" });
                setImportFile();
            }
            else {
                toast.error("Something went wrong !", { autoClose: 3000, position: "top-right" })
            }
        }
        else {
            toast.warning("Please input LeadData JSON file", { autoClose: 3000, position: "top-right" });
        }
    }

    const onSort = async () => {

        if (sort) {
            setSorting(-1);
            setSort(!sort);
        }
        else {
            setSorting(1);
            setSort(!sort);
        }

    }

    useEffect(() => {
        country();
        job();
    }, [selectCountry, selectJob]);

    useEffect(() => {
        setMultiselectedFilter({
            'coun': countryFilter,
            'job': jobFilter
        });
    }, [countryFilter, jobFilter]);

    const country = () => {
        var filterC = [];
        for (let index = 0; index < selectCountry.length; index++) {
            filterC = [...filterC, {
                'Town': selectCountry[index].value
            }]
        }
        setCountryFilter(filterC);
    }

    const job = () => {
        var filterJ = [];
        for (let index = 0; index < selectJob.length; index++) {
            filterJ = [...filterJ, {
                'Job_Title': selectJob[index].value
            }]
        }
        setJobFilter(filterJ);
    }


    return (
        <>
            <Logo_SecondNav />
            <div className='Datacard'>
                <div className='First'>
                    {/* <div> */}
                    <div className='SelectJob'>
                        <MultiSelect
                            options={JobTitle}
                            value={selectJob}
                            onChange={setSelectJob}
                            labelledBy={"Select JobTitle"}
                            className={"jobselect"}
                        />
                    </div>
                    <div className='SelectCountry'>
                        <MultiSelect
                            options={Country}
                            value={selectCountry}
                            onChange={setselectCountry}
                            labelledBy={"Select Country"}
                            className={"countryselect"}
                        />
                    </div>
                    {/* </div> */}



                    <div className='importLeadup '>



                        <div className=' import mt-3'>

                            {/* <input type="file"  single accept=".json" className='w-100' onChange={(e) => setImportFile(e.target.files[0])}/>

     */}



                            <input type="file" id="impfile" accept=".json" onChange={(e) => setImportFile(e.target.files[0])} />

                            <label for="impfile" className='datafileupload' >Upload File</label>

                            <div className=' '>

                                <button type='submit' className='uploadsave' onClick={onFileUpload}><svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" fill="currentColor" class="bi bi-cloud-upload" viewBox="0 0 16 16">

                                    <path fill-rule="evenodd" d="M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z" />

                                    <path fill-rule="evenodd" d="M7.646 4.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V14.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3z" />

                                </svg></button>

                            </div>

                        </div>

                    </div> <div class="dropdown download1  mb-4">

                        <button class="btn btn-secondary dropdown-toggle dropdown-download" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">

                            DOWNLOAD

                        </button>

                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton2">



                            <li onClick={() => {
                                exportLocalLeads('xlsx')
                            }}><a class="dropdown-item di" href="#">XLS</a></li>
                            <li onClick={() => {
                                exportLocalLeads('csv')
                            }}><a class="dropdown-item di" href="#">CSV</a></li>
                        </ul>
                    </div>
                    <div className='Total_Lead'>
                            <span><input type="number" value={count} onChange={(e) => setCount(e.target.value || 20)}/></span>
                        </div>
                </div>
                <div className='Second'>
                    <div className='Datacontent2 table-responsive'>
                        <table class="table table-bordered table-hover dataCardTable">
                            <thead class="thead-dark">
                                <tr>
                                    {/* <th  scope="col">S. NO.</th>*/}
                                    <th scope="col">Company Name</th>
                                    {/* <th scope="col">Address</th> */}
                                    <th scope="col">Full Name</th>
                                    <th scope="col">Job Title</th>
                                    {/* <th scope="col">Telephone Number</th> */}
                                    <th scope="col">Email</th>
                                    {/* <th scope="col">Industry Sector</th>
                <th scope="col">Town</th> */}
                                    <th scope="col">Employee in business</th>
        
                                </tr>
                            </thead>
                            <tbody>

                                {localData.map((user, key) =>
                                    <tr onClick={(e) => { getContact(user._id) }}>

                                        {/* <td><Link to ={`/datacard/${user._id}`}>{key+1}</Link></td>*/}
                                        <td><Link to={`/datacard/${user._id}`}>{user.Company_Name}</Link></td>
                                        {/* <td>{user.Address_Line_1} {user.Address_Line_2}  {user.Address_Line_3}</td> */}
                                        <td><Link to={`/datacard/${user._id}`}>{user.Fore_name} {user.Surname}</Link></td>
                                        <td><Link to={`/datacard/${user._id}`}>{user.Job_Title}</Link></td>
                                        {/* <td>{user.Telephone_Number}</td> */}
                                        <td><Link to={`/datacard/${user._id}`}>{user.Email_Address}</Link></td>
                                        {/* <td><Link to ={`/datacard/${user._id}`}>{user.Industry_Sector}</Link></td>
                <td><Link to ={`/datacard/${user._id}`}>{user.Town}</Link></td> */}
                                        <td><Link to={`/datacard/${user._id}`}>{user.Employees_in_Business}</Link></td>
                                        {/* <td><Link to ={`/datacard/${user._id}`}>{user.createdAt}</Link></td> */}
                                        {/* <td>{user.Turnover}</td> */}
                                    </tr>
                                )}


                            </tbody>


                        </table>
                    </div>

                </div>


            </div>
                <ReactPaginate
                previousLabel={"⟵"}
                nextLabel={"⟶"}
                breakLabel={"•••"}
                breakClassName={"break-me"}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName={"pagination"}
                subContainerClassName={"pages pagination"}
                activeClassName={"active"} />
            
            {/* //datacard data */}

            <ToastContainer />

        </>

    )
}

export default Datacard;