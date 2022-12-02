'use strict';
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var jwt = require('jsonwebtoken');
const MultipleFile = require('../models/metadata');
const sendEmail = require(".././Utils/sendEmail");
var jwt_decode = require('jwt-decode');
const LeadData = require('../models/LeadData');


exports.getUsers = async (req, res) => {
  try {
    const users = await MultipleFile.findAll({
      attributes: ['Fullname', 'email']
    });
    res.json(users);
  } catch (error) {
    console.log(error);
  }
}

// Function for posting the data 
exports.metadataFilesUpload = async (req, res) => {

  const multipleFiles = new MultipleFile({
    Fullname: req.body.Fullname,
    Email: req.body.Email.toLowerCase(),
    Mobilenum: req.body.Mobilenum,
    Companyname: req.body.Companyname,
    Password: req.body.Password,
    Website: '',
    Image: '',
    Bio: '',
    Job_Title: '',
    refresh_token: '',
    token_email: '',
    search_History:[],
    
  });


  await multipleFiles.save();

  res.status(201).send('user created succesfully')
}



exports.UserLogin = async (req, res) => {
  session=req.session;

  const email  = req.body.email;
  const password = req.body.password;

  let existingUser = await MultipleFile.find({ Email: email.toLowerCase()});
  
  try {
    if (existingUser ) {
      if (existingUser[0].Email === email.toLowerCase() && existingUser[0].Password === password) {

        try {
          const name = existingUser[0].Fullname;

          const email = existingUser[0].Email;

          const accessToken = jwt.sign({ name, email }, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: '1h'
          });


          const refreshToken = jwt.sign({ name, email }, process.env.REFRESH_TOKEN_SECRET, {
            expiresIn: '1d'
          });

        

          await MultipleFile.updateOne({ Email: email }, { $set: { refresh_token: refreshToken } }
          );

          
          res.cookie('refreshToken', refreshToken, { httpOnly: true, expire: 360000 + Date.now() });


          res.json({ accessToken });


        } catch (error) {
          console.log(error)
          res.status(404).json({ msg: "Email not found" });
        }


      } else {
        console.log("invalid credentials");
      }
    }
    else {
      console.log('User Not Found')
    }

  } catch {
    const error = new Error("Error! Something went wrong.");
    return (error);
  }


};



exports.checkUser = async (req, res) => {
  let currentUser;
  if (req.email) {
    var email = req.email;

    currentUser = await MultipleFile.find({ Email: email.toLowerCase() });
    if (currentUser) {

      res.status(200).json({
        userActive: true,
        fullName: currentUser[0].Fullname,
        website: currentUser[0].Website,
        image: currentUser[0].Image,
        bio: currentUser[0].Bio,
        job_Title: currentUser[0].Job_Title,
        searchHistory: currentUser[0].search_History
      });
    }
  } else {
    res.json({
      userActive: false
    })
  }
}

exports.updateUser = async (req, res) => {

  try {
    for (let i = 0; i < req.body.length; i++) {
      await MultipleFile.updateOne({ Email: req.email }, { $set: req.body[i] })
    }
    res.send("hello")
  } catch (error) {
    console.log(error);
  }
}

exports.updateContact = async (req, res) => {
  
  try {
    for (let i = 1; i < req.body.length; i++) {
      await LeadData.updateOne(req.body[0], { $set: req.body[i] })
    }
    res.send("hello")
  } catch (error) {
    console.log(error);

  }


}


exports.logoutUser = async (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken) return res.sendStatus(204);

  var decoded = jwt_decode(refreshToken);

  var email = decoded.email;
  var name = decoded.name;
  const user = await MultipleFile.find({
    Email: email.toLowerCase(),
    Fullname: name
  });



  if (!user) return res.sendStatus(204);
  await MultipleFile.updateOne({ refresh_token: null }, {
    where: {
      Email: email
    }
  });
  res.status(200);

  return res.sendStatus(200);
}


exports.resetPswd = async (req, res) => {

  let { email } = req.query;

  let existingUser = await MultipleFile.find({ Email: email.toLowerCase() });
  try {
    if (!existingUser)
      return res.status(400).send("user with given email doesn't exist");
    let user = await MultipleFile.findOne({ Email: email.toLowerCase() });
    if (user) {
      const name = user.Fullname;
      let token;
      token = jwt.sign({ name, email }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: '5m'
      });
      await MultipleFile.updateOne({ Email: email.toLowerCase() }, { $set: { token_email: token } }
      );
      const link = `${process.env.BASE_URL}/reset/${existingUser[0]._id}/${existingUser[0].token_email}`;

      sendEmail(existingUser[0].Email, "Password reset", link);

      res.status(200).send("password reset link sent to your email account");
    }

  } catch (error) {
    throw (error)
    console.log(error)
  }
}

exports.forgetpswd = async (req, res) => {

  console.log(req.query);
  const { password, id, urlToken } = req.query;

  const user = await MultipleFile.find({ _id: id });

  if (!user) {
    return res.status(400).send("invalid link or expired");
  }

  const token = await MultipleFile.find({
    _id: id,
    token_email: urlToken
  });

  if (!token) return res.status(400).send("Invalid link or expired");

  await MultipleFile.updateOne({ _id: id }, { $set: { Password: password } }
  );

  res.status(200).send("password reset sucessfully.");
}

exports.LocalLeads = async (req, res) => {

  var towns = await LeadData.distinct('Town');
  var jobs = await LeadData.distinct('Job_Title');

  let {skip,count} = req.query;
  var jobFilter = req.body.job || [];
  var countryFilter = req.body.coun || [];

  try {
    if((jobFilter.length>0 && countryFilter.length==0) || (jobFilter.length==0 && countryFilter.length>0)){
      var lead1 = await LeadData.find({ "$or": [...jobFilter,...countryFilter] }).skip(skip).limit(count);
      var leadLength = await LeadData.find({ "$or": [...jobFilter,...countryFilter] }).count();
    }
    else {
      if(countryFilter.length !=0 && jobFilter.length!=0){
        var lead1 = await LeadData.find({ "$and" :[
          { "$or": [...jobFilter] },
          { "$or": [...countryFilter] }
        ]}).skip(skip).limit(count);
        var leadLength = await LeadData.find({ "$and" :[
          { "$or": [...jobFilter] },
          { "$or": [...countryFilter] }
        ]}).count(); 
      }
      else{
        var lead1 = await LeadData.find().skip(skip).limit(count);
        var leadLength = await LeadData.find().count();     
      }
    }
    // if(countryFilter.length ==0 && jobFilter.length==0){
    //   console.log('fffff');
    //   var lead1 = await LeadData.find().limit(100);
    // }
      
     // var lead1 = await LeadData.find({ "$and" :[...jobFilter, ...countryFilter]}).limit();
      res.send({lead: lead1, towns: towns, jobs: jobs, leadLength: leadLength});
  } catch {
    const error = new Error("Error! Something went wrong.");
    return (error);
  }
};

// Image file size formatter functon

const fileSizeFormatter = (bytes, decimal) => {
  if (bytes === 0) {
      return '0 Bytes';
  }
  const dm = decimal || 2;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'YB', 'ZB'];
  const index = Math.floor(Math.log(bytes) / Math.log(1000));
  return parseFloat((bytes / Math.pow(1000, index)).toFixed(dm)) + ' ' + sizes[index];
}

exports.applicationFileUpload = async (req, res, next) => {
  var email = req.email;

  const currentUser = await MultipleFile.find({ Email: email.toLowerCase() });
  try {
    // let filesArray = [];
    // req.files.forEach(element => {
    //   const file = {
    //     fileName: element.originalname,
    //     filePath: element.path,
    //     fileType: element.mimetype,
    //     fileSize: fileSizeFormatter(element.size, 22)
    //   }
    //   filesArray.push(file);
    // });
    await MultipleFile.updateOne({Email: email }, { $set: { Nav_Logo: req.files[0].path } }
      );
      res.status(200).send('Updated');
    // const file = new AppiicationsettFile({files: filesArray});
    // await file.save();
  } catch (error) {
    res.status(400).send(error.message);
  }
}

exports.getapplicationFiles= async (req, res) => {
  var email = req.email;
  try {
    const user = await MultipleFile.find({ Email: email.toLowerCase() });
    res.status(200).send(user[0].Nav_Logo);
  } catch (error) {
    console.log(error);
  }
}
exports.LocalLeadsCompanyCard = async(req,res)=>{
  try{
    let {c_ID} = req.query;
    let Company = await LeadData.find({_id: c_ID});
  
    if(Company)
    {
      res.send(Company);
    }else{
      res.send("No records found");
    }
  }catch{
    console.log(error);
    throw error;
  }
 
}

exports.importFilesUpload =async (req, res, next) => {
  try {
    await LeadData.insertMany(JSON.parse(req.files.file.data.toString()));
    res.status(200).send('Done');
  } catch (error) {
    res.status(500).send('Error');
  }

}


exports.UserSearchHistory =async(req, res)=>{

  const Search_Query = req.body;

  const email = { Email: req.email };

let doc = await MultipleFile.findOneAndUpdate(email, { $push: { search_History: Search_Query }});
doc.name; // 'Jean-Luc Picard'
doc.search_History; // 59
  console.log(doc.search_History);

 res.status(200);
}


