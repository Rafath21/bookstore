const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.processPayment=async(req,res,next)=>{
    try{
    const myPayment=await stripe.paymentIntents.create({
        amount:req.body.amount,
        currency:"usd",
        metadata:{
            company:"bookstore",
        }
    })
    res.status(200).json({
        success:true,
        client_secret:myPayment.client_secret
    })
}
catch(err){
    res.status(400).json({
        error:err.message
    })
}
}

exports.sendStripeApiKey=async(req,res,next)=>{
    res.status.json({stripeApiKey:process.env.STRIPE_API_KEY});
}