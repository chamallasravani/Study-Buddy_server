const Complaints = require('../models/ComplaintsModel')

const getAllComplaints = async(req, res)=>{
    try {
        const complaints =  await Complaints.find().sort({postedOn :-1})
        res.status(200).json(complaints);
    } catch (error) {
        res.status(400).json({ message: error.message, success: false }); 
    }
}

const postComplaint =async(req, res)=>{
    try {
        const postComplaintData = req.body;
        const userId  = req.body.userId
        const postComplaint = new Complaints({...postComplaintData , userId : userId})
        await postComplaint.save();
        res.status(200).json("posted a Complaint successfully");
    } catch (error) {
        console.log(error);
        res.status(400).json("posted a complaint unsuccessfully");   
    }
}
module.exports = {
    getAllComplaints,
    postComplaint
}
