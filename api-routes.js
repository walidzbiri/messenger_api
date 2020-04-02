// Import contact controller

var userController = require('./controllers/userController');
var likeController = require('./controllers/likeController');
var commentController = require('./controllers/commentController');
var messageController = require('./controllers/messageController');
var shareController = require('./controllers/shareController');

let router = require('express').Router();


// users actions
router.route('/users')
    .post(userController.new)// create new user
    .get(userController.view);// view all users

router.route('/users/:user_id')
    .get(userController.index) // get a specific user
    .delete(userController.delete_a_user);// delete a specific user


// messages actions
router.route('/users/:user_id/messages')
    .post(messageController.new);// create new message
router.route('/users/:user_id/messages/:message_id')
    .delete(messageController.delete_a_message);// delete a specific message

// comments actions
router.route('/users/:user_id/messages/:message_id/comments')
    .post(commentController.new);// create a new comment
router.route('/users/:user_id/messages/:message_id/comments/:comment_id')
    .delete(commentController.delete_a_comment);// delete a specific comment

// likes actions
router.route('/users/:user_id/messages/:message_id/likes')
    .post(likeController.new); // create a new like
router.route('/users/:user_id/messages/:message_id/likes/:share_id')
    .delete(likeController.new); //delete specific like

// shares actions
router.route('/users/:user_id/messages/:message_id/shares')
    .post(shareController.new); // create a new share
router.route('/users/:user_id/messages/:message_id/shares/:share_id')
    .delete(shareController.delete_a_share); // delete a specific share



// router.route('/comments')
//     .post(commentController.new);

// router.route('/messages')
//     .post(messageController.new);

// router.route('/shares')
//     .post(shareController.new);

// router.route('/contacts/:contact_id')
//     .get(contactController.index)
//     .delete(contactController.delete_a_contact)
//     .put(contactController.update_a_contact);



// REST = REpresentational State Transfer
// API =  Application programming interface
// RESTful + API

// Les types dial Web services
// 1- SOAP (full of constraints)
// 2- REST (2000 Roy Fielding) fully rest / not fully rest
// 3- GraphQL

// REST # HTTP # API


// design ghir f site web
// Website
// URL = www.monchat.com/getUsers?id=1 



// Api
// ykoun 3ndek ghir les noms f URL
// design dial les URLS / routes
// ressource based url
// www.monchat.com/profile/1



module.exports=router;