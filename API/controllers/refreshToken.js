const MultipleFile = require('../models/metadata');
var jwt = require('jsonwebtoken');
var jwt_decode = require('jwt-decode');
 
exports.refreshToken = async(req, res) => {

    try {
        const refreshToken = req.cookies.refreshToken;
        if(refreshToken){
            var decoded= jwt_decode(refreshToken);
      
            var email= decoded.email;
         

       if(!refreshToken) return res.sendStatus(401);

       const user = await MultipleFile.find({Email: email});
       if(!user[0]) return res.sendStatus(403);

       jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
           if(err) return res.sendStatus(403);
          
           const name = user[0].Fullname;
           const email = user[0].Email;
           const accessToken = jwt.sign({ name, email}, process.env.ACCESS_TOKEN_SECRET,{
               expiresIn: '1d'
           });
           res.json({ accessToken });
       });
        }
        else{
            console.log('token not found')
        }
 
      
    } catch (error) {
        console.log(error);
    }
};

