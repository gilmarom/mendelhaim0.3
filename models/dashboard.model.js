const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let DashboardSchema = new Schema({
    name: {type: String, required: true, max: 100},
    email:{type:String},
    phone:{type:String },
    description: { type:String, required:true},
    website: { type:String, required:true },
    university:{type: String},   
},{
    collection: 'donation'
});


// Export the model
module.exports = mongoose.model('DashboardSchema', DashboardSchema);


let UserContent =new Schema({
    name: {type: String, required: true, max: 100},
    video: { type:String}
});
// Export the model
module.exports = mongoose.model('UserContent', UserContent)