var sql = require('../db.js');

//Contact object constructor
var Like = function(like){
    this.message_id = like.message_id;
    this.user_id = like.user_id;
};


Like.getAllLikes = function (result) {
    sql.query("Select * from likes", function (err, res) {
            if(err) {
                console.log("error: ", err);
                result(null, err);
            }
            else{
                console.log('Likes : ', res);  
                result(null, res);
            }
        });   
};


Like.findById = function (likeId, result) {
    sql.query("Select * from likes where id = ? ", likeId, function (err, res) {             
            if(err) {
                console.log("error: ", err);
                result(err, null);
            }
            else{
                result(null, res);
            }
        });   
};

Like.createLike = function (newLike, result) {    
    sql.query("INSERT INTO likes set ?", newLike, function (err, res) {
            
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

Like.remove = function(id, result){
    sql.query("DELETE FROM likes WHERE id = ?", id, function (err, res) {
               if(err) {
                   console.log("error: ", err);
                   result(null, err);
               }
               else{
                    result(null, res);
               }
           }); 
};


module.exports=Like;