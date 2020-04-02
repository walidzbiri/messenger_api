var sql = require('../db.js');

//Contact object constructor
var Share = function(share){
    this.message_id = share.message_id;
    this.user_id = share.user_id;
};


Share.getAllShares = function (result) {
    sql.query("Select * from shares", function (err, res) {
            if(err) {
                console.log("error: ", err);
                result(null, err);
            }
            else{
                console.log('Shares : ', res);  
                result(null, res);
            }
        });   
};


Share.findById = function (shareId, result) {
    sql.query("Select * from shares where id = ? ", shareId, function (err, res) {             
            if(err) {
                console.log("error: ", err);
                result(err, null);
            }
            else{
                result(null, res);
            }
        });   
};

Share.createShare = function (newShare, result) {    
    sql.query("INSERT INTO shares set ?", newShare, function (err, res) {
            
            if(err) {
                console.log("error: ", err);
                result(err, null);
            }
            else{
                console.log(res.insertId);
                result(null, res.insertId);
            }
        });           
};

Share.remove = function(id, result){
    sql.query("DELETE FROM shares WHERE id = ?", id, function (err, res) {
               if(err) {
                   console.log("error: ", err);
                   result(null, err);
               }
               else{
                    result(null, res);
               }
           }); 
};


module.exports=Share;