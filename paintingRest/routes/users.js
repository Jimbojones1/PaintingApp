var express = require('express');
var router = express.Router();

var userModel = require('../models/users');
var bodyParser = require('body-parser');

// RESTful API

// get all
router.get('/', function(req, res, next){

  userModel.find(function(error, users){
    if(error) return error;
    res.json(users);
  });
});

// get by id
router.get('/:id', function(req, res, next){

  userModel.findById(req.params.id, function(error, user){
    if (error) return error;
    res.json(user);
  });
});

// create
router.post('/', function(req, res, next){
  userModel.create(req.body, function(error, user){
    if (error) return error;
    res.json(user);
  });
});


//update by id
router.put('/:id', function(req, res, next){
  userModel.findByIdAndUpdate(req.params.id, req.body, function(error, user){
    if (error) return error;
    res.json(user);
  });
});

router.patch('/:id', function(req, res, next){
  userModel.findByIdAndUpdate(req.params.id, req.body, function(error, user){
    if (error) return error;
    res.json(user);
  });
});

//delete by id
router.delete('/:id', function(req, res, next){
  userModel.findByIdAndRemove(req.params.id, req.body, function(error, user){
    if (error) return error;
    res.json({
      "Message": "The user with the id of " + user.id + " has been removed."
    });
  });
});


// export our model
module.exports = router;
