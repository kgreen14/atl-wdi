var express = require('express');
var router = express.Router();

var User = require("../models/user");
var Item = require("../models/item");

// USERS INDEX ROUTE
router.get('/', (request, response) => {

   User.find({})
    .then((users) => {
        console.log(users[0]._id);
        response.render('users/index', {
            users: users
        })
    })
    .catch((error) => {
        console.log('ERROR!!! ${error}')
    });

})

// USER CREATE FORM
router.get('/new', (request, response) => {
    response.render('users/new');
})
 // USER CREATE ROUTE
 route.post('/', (request, response) => {
     const newUser = new User(request.body);

     newUser.save()
        .then((newUser) => {
            console.log('New user created ID of: ' + newUser)
        })
     })
 



// USER SHOW ROUTE
router.get('/:id', (request, response) => {

    const userIdToSearchDbFor = request.params.id;

    User.findById(userIdToSearchDbFor)
        .then((user) => {
            response.render('users/show', {
                user: user
            });
        })

})



// USER UPDATE ROUTE

// USER DESTROY

// ADD A NEW ITEM

// REMOVE AN ITEM

module.exports = router;
