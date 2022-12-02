
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const leadDataSchema = new Schema({
    
    Company_Name: {
        type: String,
        required: false
    },
    Address_Line_1: {
        type: String,
        required: false
    },   
    Address_Line_2: {
        type: String,
        required: false
    },   
    Address_Line_3:  {
        type: String,
        required: false
    },  
    Town:  {
        type: String,
        required: false
    },  
    Post_code: {
        type: String,
        required: false
    } ,  
    Title: {
        type: String,
        required: false
    },     
    Fore_name:  {
        type: String,
        required: false
    },  
    Surname: {
        type: String,
        required: false
    },   
    Job_Title: {
        type: String,
        required: false
    },   
    Telephone_Number: {
        type: String,
        required: false
    },   
    Email_Address: {
        type: String,
        required: false
    },   
    Industry_Sector: {
        type: String,
        required: false
    },   
    Employees_at_Site: {
        type: Number,
        required: false
    },   
    Employees_in_Business: {
        type: Number,
        required: false
    },   
    Turnover: {
        type: Number,
        required: false
    }
    
 
},{timestamps:true});

 

module.exports = mongoose.model('LeadDatas', leadDataSchema);

