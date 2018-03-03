var express = require('express');
var router = express.Router();
var card=require('../models/card');


//update card status based on mobile number and card number

router.put('/?',function(req,res,next){
    var cardNumber = req.param('cardNumber');
    var blockStatus= req.param('blockStatus');


    card.updatecardstatusbycardNumber(cardNumber,blockStatus,function(err,rows){
        if(err)
        {
            res.json(err);
        }
        else{
            res.json(rows);
            console.log(res.json(rows));

        }

    });
});




module.exports = router;