var db=require('../dbconnection');

var user = {

getAllusers:function(callback){

 return db.query(" Select * from user",callback);

},
getuserBymobileNumber:function(mobileNumber,callback){
	return db.query("SELECT bank.bankName, bank.ifseCode,bank.bankAddress,card.cardNumber, card.cardType,card.displayName,card.merchant,card.blockStatus,card.cardTypeFlag,card.merchantTypeFlag FROM user INNER JOIN bank INNER JOIN card ON user.mobileNumber = bank.mobile_ref AND bank.bankID = card.bankId_ref  WHERE  user.mobileNumber = ?",[mobileNumber],callback);



}
};






module.exports=user;
