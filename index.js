const express = require('express')
const cors = require('cors');
const userRoutes = require('./routes/UserRoutes');
const connectdb = require('./config/dbConnect');
const questionRoute = require('./routes/Question');
const answerRoutes = require('./routes/answerRouter');
const chatBotRouter = require('./routes/ChatBotRoutes');
const paymentRoutes = require('./routes/paymentRoutes');
const complaintRoutes = require('./routes/complainRoutes');
require('dotenv').config();

const app = express();
connectdb()

app.use(express.json({limit :"30mb",extended:true}))
app.use(express.urlencoded({limit:"30mb", extended:true}))
app.use(cors());

app.use('/user',userRoutes)

app.use('/questions', questionRoute)

app.use('/answer',answerRoutes)
 
app.use('/chatbot',chatBotRouter)

app.use('/payment', paymentRoutes)

app.get("/hello" , (req, res)=>{
res.send("<h1>Hello everyome</h1>")
})
//update here 


app.use('/complaints',complaintRoutes)

const PORT = process.env.PORT || 8080

app.listen(PORT, ()=>{
    console.log("server started succesfully");
})  