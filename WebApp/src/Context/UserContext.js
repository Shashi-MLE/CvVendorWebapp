import { useNavigate } from 'react-router-dom';
import jwt_decode from "jwt-decode";
import { createContext, useState, useEffect, useRef } from "react";
import axios from 'axios';
import * as XLSX from 'xlsx'
import * as FileSaver from 'file-saver';
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const apiUrl = 'http://localhost:8081/api/';



export const UserContext = createContext();

const UserContextProvider = (props) => {
    let navigate = useNavigate();
    const refOne = useRef(null);


    const [localData, setLocalData] = useState([])
    const [companyCard, setCompanyCard] = useState({})
    const [query, setQuery] = useState("")
    const [isLoggedIn, setisLoggedIn] = useState(null);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [token, setToken] = useState('');
    const [expire, setExpire] = useState('');
    const [id, setId] = useState('')
    const [searchResult, setSearchResult] = useState([])
    const [user, setUser] = useState('');
    const jwt = localStorage.getItem('token');
    const [isShown, setIsShown] = useState(true);
    const [fullName, setFullName] = useState();
    const [website, setWebsite] = useState();
    const [bio, setBio] = useState();
    const [job, setJob] = useState();
    const [orgLogo, setOrgLogo] = useState();
    const [Company_Name, setCompany_Name] = useState();
    const [Fore_name, setFore_name] = useState();
    const [Surname, setSurname] = useState();
    const [Email_Address, setEmail_Address] = useState();
    const [Job_Title, setJob_Title] = useState();
    const [Telephone_Number, setTelephone_Number] = useState();
    const [Industry_Sector, setIndustry_Sector] = useState();
    const [Town, setTown] = useState();
    const [Employee_in_Business, setEmployee_in_Business] = useState();
    const [Turnover, setTurnover] = useState();
    const [isRevealPwd, setIsRevealPwd] = useState(false);
    const [isRevealConPwd, setIsRevealConPwd] = useState(false);
    const [multiselectedFilter, setMultiselectedFilter] = useState([]);
    const [sorting, setSorting] = useState(1);
    const [JobTitle, setJobTitle] = useState([]);
    const [Country, setCountry] = useState([]);
    const [localInput, setLocalInput] = useState();
    const [skip, setSkip] = useState(0);
    const [onPage, setOnPage] = useState(0);
    const [count, setCount] = useState(20);
    const [pageCount, setPageCount] = useState();
    const [history, setHistory] = useState([]);


    var objTowns = [];
    var objJobs = [];

    useEffect(() => {
        console.log(onPage);
    }, [onPage])

    useEffect(() => {
        console.log(count);
        setSkip(count * onPage);
    }, [count, onPage]);

    useEffect(() => {
        if (jwt) {
            refreshToken();
            getUsers();

        }

        // getUsers();

    }, [jwt]);

    const handleKeyPress = (ev) => {
        if (ev.key === "Enter") {
            SearchHistory();
        }

    }

    useEffect(() => {
        if (query == '') {
            setSearchResult([]);
        }


    }, [query])

    useEffect(() => {

        getapplicationFiles();

    }, [user]);

    useEffect(() => {
        localDataCard();
    }, [multiselectedFilter, sorting, skip, count]);




    const handleClickOutSide = (e) => {
        document.addEventListener("click", handleClickOutSide, true)
        if (!refOne.current.contains(e.target)) {
            setQuery('');
            setId('');
            setLocalInput('')

        }
    }

    const refreshToken = async () => {
        try {
            const response = await axios.get(apiUrl + 'token', { withCredentials: true });
            setToken(response.data.accessToken);
            const decoded = jwt_decode(response.data.accessToken);
            setName(decoded.name);
            setEmail(decoded.email);
            setExpire(decoded.exp);


        } catch (error) {
            if (error.response) {
                navigate('/');
            }
        }
    }

    const axiosJWT = axios.create();

    axiosJWT.interceptors.request.use(async (config) => {
        const currentDate = new Date();
        if (expire * 1000 < currentDate.getTime()) {
            const response = await axios.get(apiUrl + 'token', { withCredentials: true });
            config.headers.Authorization = `Bearer ${response.data.accessToken}`;
            setToken(response.data.accessToken);
            const decoded = jwt_decode(response.data.accessToken);
            setName(decoded.name);
            setExpire(decoded.exp);
        }
        return config;
    }, (error) => {
        return Promise.reject(error);
    });


    const Logout = async () => {
        try {
            await axios.get(apiUrl + 'logout', { withCredentials: true });
            // localStorage.removeItem('islogin');
            localStorage.removeItem('token');
            setisLoggedIn(false);
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    }

    const getUsers = async (e) => {
        const response = await axiosJWT.get(apiUrl + 'users', {
            headers: {
                Authorization: `Bearer ${token}`,
                withCredentials: true
            }
        });
        setUser(response.data);
        setFullName(response.data.fullName);
        setWebsite(response.data.website);
        setBio(response.data.bio);
        setJob(response.data.job_Title);
        setHistory(response.data.searchHistory);
        console.log(response.data.searchHistory);
    }





    const metadataFilesUpload = async (body1) => {
        try {
            const res1 = await axios.post(apiUrl + 'metadata', body1, { withCredentials: true });

            if (res1.status === 201) {
                return (res1.status)
            }

        } catch (error) {
            throw error;
        }
    }

    const updateUser = async (body) => {
        try {
            const res1 = await axiosJWT.put(apiUrl + 'updateUser', body, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    withCredentials: true
                }
            })
            return (res1.status);
        } catch (error) {
            throw error;
        }

    }

    const resetPassword = async (email, props) => {

        let apiurl = apiUrl + 'reset';
        apiurl = `${apiurl}?email=${email}`
        var response;
        try {
            response = await axios.post(apiurl, { withCredentials: true });
            // if(response.status == 200){
            //     alert("Email send successfully");
            // }



        } catch (err) {

            console.log(err)
        }
        return (response)

    }

    const UserLogin = async (credentials) => {

        try {
            const res = await axios.post(apiUrl + 'signin', credentials, { withCredentials: true });
            const decoded = jwt_decode(res.data.accessToken);
            setName(decoded.name);
            setEmail(decoded.email);

            setisLoggedIn(true);
            localStorage.setItem("token", res.data.accessToken);

            if (res.status === 200) {

                navigate('/landing')
            } else {
                alert('invalid')
            }



        } catch (error) {
            console.log(error);
        }


    }

    const changPswd = async (password, props) => {


        var pageLink = window.location.href;
        var pageLinkArr = pageLink.split('/')

        var urlToken = pageLinkArr[pageLinkArr.length - 1];
        var id = pageLinkArr[pageLinkArr.length - 2];

        let url = apiUrl + 'resett/';

        url = `${url}?password=${password}&id=${id}&urlToken=${urlToken}`;

        const response = await axios.post(url, { withCredentials: true })

        return (response)


    }

    const localDataCard = async () => {
        try {
            let api_Url = apiUrl + 'localLeads';
            api_Url = `${api_Url}?sort=${sorting}&skip=${skip}&count=${count}`
            const res = await axios.post(api_Url, multiselectedFilter, sorting, { withCredentials: false });
            setLocalData(res.data.lead);
            setPageCount(Math.ceil(res.data.leadLength / count))

            var towns = res.data.towns;
            var jobs = res.data.jobs;


            for (let index = 0; index < towns.length; index++) {
                objTowns = [...objTowns, {
                    label: towns[index],
                    value: towns[index]
                }];
            }
            setCountry(objTowns);

            for (let index = 0; index < jobs.length; index++) {
                objJobs = [...objJobs, {
                    label: jobs[index],
                    value: jobs[index]
                }];
            }
            setJobTitle(objJobs);
            return (res, objTowns, objJobs);
        } catch (error) {
            throw error;
        }
    }

    const GoogleSearch = async () => {
        const apiData = await axios.get(`https://www.googleapis.com/customsearch/v1?key=AIzaSyBSxelgAtMwfYFQVvwa8ZnXmmmi_4Bxr54&cx=030690ea2f5d74f38&q=${id}`, { withCredentials: false })
        setSearchResult(apiData.data.items || [])
    }


    const getContact = async (c_ID) => {
        let Url = apiUrl + 'companycard';
        Url = `${Url}?c_ID=${c_ID}`;

        try {
            const res = await axios.get(Url, { withCredentials: true })
            setCompanyCard(res.data[0])
            setCompany_Name(res.data[0].Company_Name);
            setFore_name(res.data[0].Fore_name + " " + res.data[0].Surname)
            setEmail_Address(res.data[0].Email_Address);
            setJob_Title(res.data[0].Job_Title);
            setTelephone_Number(res.data[0].Telephone_Number);
            setIndustry_Sector(res.data[0].Industry_Sector);
            setTown(res.data[0].Town);
            setEmployee_in_Business(res.data[0].Employees_in_Business);
            setTurnover(res.data[0].Turnover);
            // return res;

        } catch (error) {
            console.log('thor');
            throw error;
        }



    }

    const updateContact = async (body) => {
        try {
            const res1 = await axiosJWT.put(apiUrl + 'updateContact', body, { withCredentials: true })
            getUsers();
            return (res1.status);
        } catch (error) {
            throw error;
        }

    }


    const applicationFilesUpload = async (file) => {
        try {
            const res1 = await axios.post(apiUrl + 'applicationFiles', file, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    withCredentials: true
                }
            });
            getUsers();
            return (res1)
        } catch (error) {
            throw error;
        }

    }

    const getapplicationFiles = async () => {
        try {
            const getres = await axiosJWT.get(apiUrl + 'getapplicationFiles', {
                headers: {
                    Authorization: `Bearer ${token}`,
                    withCredentials: true
                }
            });
            setOrgLogo(getres.data);
        } catch (error) {
            throw error;
        }
    }

    const leadDataImport = async (formData) => {
        try {
            const res1 = await axiosJWT.post(apiUrl + 'importFiles', formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    withCredentials: true
                }
            });
            if (res1.status == 200) {
                localDataCard();
            }
            //await getUsers();
            return (res1);
        } catch (error) {
            throw error;
        }

    }

    const exportLocalLeads = async (extension) => {

        const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
        const fileExtension = `.${extension}`;
        const ws = XLSX.utils.json_to_sheet(localData);
        const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
        const excelBuffer = XLSX.write(wb, { bookType: extension, type: 'array' });
        const data = new Blob([excelBuffer], { type: fileType });
        FileSaver.saveAs(data, 'thor' + fileExtension);
    };

    const SearchHistory = async () => {
        console.log(query);
        let Url = apiUrl + 'searchhistory';

        const res1 = await axiosJWT.post(Url, { query }, {
            headers: {
                Authorization: `Bearer ${token}`,
                withCredentials: true
            }
        })

        return (res1)
    }

    const value = {
        refOne, getContact, companyCard, setIsShown, handleClickOutSide, isShown, isLoggedIn, setisLoggedIn, user, setUser, query, setQuery, changPswd,
        id, searchResult, GoogleSearch, setId, localDataCard, localData, setLocalData, metadataFilesUpload, UserLogin, Logout,
        refreshToken, getUsers, resetPassword, isRevealPwd, setIsRevealPwd, isRevealConPwd, setIsRevealConPwd,
        updateUser, applicationFilesUpload, getapplicationFiles, fullName, setFullName, website, setWebsite, bio, setBio, job, setJob,
        orgLogo, Company_Name, setCompany_Name, Fore_name, setFore_name, Surname, setSurname, Email_Address, setEmail_Address, Job_Title, setJob_Title,
        Telephone_Number, setTelephone_Number, Industry_Sector, setIndustry_Sector, Town, setTown, Employee_in_Business, setEmployee_in_Business, Turnover, setTurnover,
        updateContact, multiselectedFilter, setMultiselectedFilter, Country, JobTitle, localInput, leadDataImport, exportLocalLeads,
        setSorting, setOnPage, pageCount, setPageCount, count, setCount, handleKeyPress, history
    }

    return (
        <UserContext.Provider value={value}>
            {props.children}
        </UserContext.Provider>
    )
}
export default UserContextProvider;
