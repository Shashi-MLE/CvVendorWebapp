'use strict';

const express = require('express');
const control = require("../controllers/controller");
const { refreshToken } = require('../controllers/refreshToken');
const {verifyToken} = require('../middleware/auth');
const { upload } = require('../FileHelper/filehelper');


const router = express.Router();


router.post('/metadata', control.metadataFilesUpload);

router.post('/signin', control.UserLogin) ;

router.post('/localLeads', control.LocalLeads) ;

router.get('/companycard', control.LocalLeadsCompanyCard) ;

router.get("/token", refreshToken);

router.get('/logout', control.logoutUser);

router.put('/updateUser',verifyToken, control.updateUser);

router.put('/updateContact', control.updateContact);

router.get("/users",verifyToken, control.checkUser );

router.post("/reset", control.resetPswd);

router.post("/resett/", control.forgetpswd);

router.post('/applicationFiles',verifyToken, upload.array('files'), control.applicationFileUpload);

router.get("/getapplicationFiles",verifyToken, control.getapplicationFiles );

router.post('/importFiles', control.importFilesUpload);

router.post('/searchhistory', verifyToken,control.UserSearchHistory);


module.exports = {
    routes: router
}