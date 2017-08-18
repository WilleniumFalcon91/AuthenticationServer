var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // console.log(req.params);
  res.render('index', { title: 'Express' });
});




// GitHub will call this URL
var request = require('request');
router.get('/auth/callback',
  function(req, res) {
    request.post({url: 'https://api.napster.com/oauth/access_token', form:{
      api_key:'NmYxOWEyYmUtZDc0MC00NWIyLWIxYWEtNjg4YmE5YmU2YTg4', 
      api_secret:'NjJjZjNlZDYtOWI3NC00MWJlLWJhZjQtYTIyYzlhNzJmMWU4', 
      redirect_uri:'http://localhost:5000', 
      temporary_code: req.query.code
    }},
    function(err, httpResponse, body){
      console.log(httpResponse);
      console.log(body);
      res.redirect('/');
      console.log(req.query);
    });
 
  }
  
);


module.exports = router;
