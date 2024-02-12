const express = require('express')
const { getAllComplaints, postComplaint } = require('../controllers/complaintsController')
const router = express.Router()

router.post('/postComplaint' , postComplaint )
router.get('/AllComplaints', getAllComplaints )


const complaintRoutes =  router
module.exports = complaintRoutes