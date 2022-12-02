
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const metadataFileSchema = new Schema({
    Fullname: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Mobilenum: {
        type: Number,
        required: true
    },
    Companyname: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    },
    Website: {
        type: String,
        required: false
    },
    Image: {
        type: String,
        required: false
    },
    Bio: {
        type: String,
        required: false
    },
    Job_Title: {
        type: String,
        required: false
    },


    refresh_token:{
        type: String,
    },
    token_email:{
        type: String,
    },

    Nav_Logo: {
        type: String,
    },
    search_History:{
        type: Array,
        
    }
});

module.exports = mongoose.model('Metadata', metadataFileSchema);

