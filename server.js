// const express=require('express');
// const app=express();

// const path=require('path');

// const cors=require('cors');

// const shortid=require('shortid');

// const Razorpay = require('razorpay');

// const razorpay = new Razorpay({
//    key_id:"rzp_test_Rg7Lgz7NgVAUCu",
//    key_secret:"x0e5GSKDeyVrNQcr0gJ7pOmP",

// });

// app.use(cors());

// app.get('/logo.jpg',(req,res)=>{
//     res.sendFile(path.join(__dirname,"/src/images/img2.png"));
// })

// app.post('/razorpay',async(req,res)=>{
//    const payment_capture=1
//    const amount=1
//    const currency='INR'
//    const options={
//     amount:amount*100,
//     currency:currency,
//     receipt:shortid.generate(),
//     payment_capture
//    }
// try{
//     const response=await razorpay.orders.create(options)
//     //console.log(response)
//     res.json({
//         id:response.id,
//         currency:response.currency,
//         amount:response.amount
//     })
// }catch(err) {
//     console.log(err);
// }

// })

// app.listen(5000,()=>{
//     console.log("App is listening at 5000");
// })