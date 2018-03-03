var express = require('express');
var router = express.Router();
var User=require('../models/User');


//Getting All users
router.get('/allusers',function(req,res,next){
    User.getAllusers(function(err,rows){
        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(rows);
        }

    });
});



//Getting All users using  parameters
router.get('/?',function(req,res,next){
     var params = req.param('mobileNumber');
     console.log(params);
    User.getuserBymobileNumber(params,function(err,rows){
        if(err)
            {
                res.json(err);
            }
        else{
            if(JSON.stringify(rows)=== '{}'){
            }else{
                    res.json({
                        status: 200,
                        cards: rows
                    });
            }
            }

    });




});



//POST Methods








module.exports = router;