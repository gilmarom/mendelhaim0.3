const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ContactSchema = new Schema({
    name: {type: String, required: true, max: 100},
    email:{type:String},
    phone:{type:String },
    description: { type:String, required:true},
    website: { type:String, required:true },
    euniversity:{type: String},
    
    
},{
    collection: 'contact'
});


// Export the model
module.exports = mongoose.model('ContactSchema', ContactSchema);