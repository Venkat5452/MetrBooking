
// export default async function displayrazorpay(setpay,user){
//     const data =await fetch("http://localhost:5000/razorpay",{
//         method:'POST'

//     }).then((t)=>t.json());
   
//     //console.log(data);
//     const options = {
//     key:"rzp_test_Rg7Lgz7NgVAUCu",
//     currency:data.currency,
//     amount:data.amount,
//     name:"Hyderbad Metro",
//     description:"Metro Ticket",
//     image:"http://localhost:5000/logo.jpg",
//     order_id:data.id,
//     handler:function(response) {
//         setpay(true);
//     },
//     prefill: {
//       email:user.email
//     }
//    };
//    const paymentObj = new window.Razorpay(options);
//    paymentObj.open();
// }