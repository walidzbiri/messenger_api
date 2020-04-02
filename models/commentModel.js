var sql = require('../db.js');

//Contact object constructor
var Comment = function(comment){
    this.contenu = comment.contenu;
    this.user_id = comment.user_id;
    this.message_id = comment.message_id;
};


Comment.getAllComments = function (result) {
    sql.query("Select * from comments", function (err, res) {
            if(err) {
                console.log("error: ", err);
                result(null, err);
            }
            else{
                console.log('Comments : ', res);  
                result(null, res);
            }
        });   
};


Comment.findById = function (commentId, result) {
    sql.query("Select * from comments where id = ? ", commentId, function (err, res) {             
            if(err) {
                console.log("error: ", err);
                result(err, null);
            }
            else{
                result(null, res);
            }
        });   
};

Comment.createComment = function (newComment, result) {    
    sql.query("INSERT INTO comments set ?", newComment, function (err, res) {
            
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

Comment.remove = function(id, result){
    sql.query("DELETE FROM comments WHERE id = ?", id, function (err, res) {
               if(err) {
                   console.log("error: ", err);
                   result(null, err);
               }
               else{
                    result(null, res);
               }
           }); 
};


module.exports=Comment;