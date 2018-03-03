var express = require('express');
var router = express.Router();
var bank =require('../models/bank');

router.get(function(req,res,next){

    bank.getAllbank(function(err,rows){
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


//POST Methods








module.exports = router;