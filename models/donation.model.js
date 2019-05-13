const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let DonationSchema = new Schema({
    donorName: {type: String, required: true, max: 100},
    email:{type:String},
    amount: {type: Number, required: true},
    phone:{type:String },
    creditNum: { type:String, required:true},
    labId: { type:Number, required:true },
    creditNum:{type: Number},
    expYear:{type: String},
    expMonth:{type: String},
    SecurityCode:{type: String},
    BillingAddress:{type: String},
    date:{type:Date},
    captcha:{ type:String},
    labName:{type:String} 
    
},{
    collection: 'donation'
});


// Export the model
module.exports = mongoose.model('DonationSchema', DonationSchema);