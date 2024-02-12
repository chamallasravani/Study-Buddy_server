const mongoose =  require('mongoose')
const ComplaintsSchema = mongoose.Schema({
    complaintPurpose :{
        type : String
    },
    complaintBody:{
        type : String
    },
    complaintsTags:{
        type  : [String]
    }, 
    postedOn :{
        type : Date,
        default :Date.now,
    },
    resolvedBy   : [
        {
            solvedBy : String,
            solvedBody :  String,
            userId : String,
            solvedOn:{
                type : Date,
                default :Date.now
            }
        }
    ]
})
const Complaints = mongoose.model('Complaints' , ComplaintsSchema)
module.exports = Complaints;