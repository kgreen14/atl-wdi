//======================
// REQUIREMENTS
//======================
// require express, router, mongoose, Donut schema
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var Donuts = require("../models/donuts");

//======================
// INDEX
//======================
// Create a GET index route "/" that sends all donuts to index.hbs
router.get('/', function(req, res) {
    Donuts.find({})
    .exec(function(err, donuts) {
        if (err) {
            console.log(err);
            return;
        }
        console.log(donuts);
        res.send(donuts);
    })
});


//======================
// NEW
//======================
// Create a GET new route "/new" that renders the new.hbs form



//======================
// SHOW
//======================
// Create a GET show route "/:id" that renders the donut's show page




//======================
// CREATE
//======================
// Create a POST index route "/" that creates a new donut
// and upon success redirects back to the index page "/"



//======================
// EDIT
//======================
// Create a GET edit route "/:id/edit" that renders the edit.hbs page and
// sends that donut's data to it



//======================
// UPDATE
//======================
// Create a PUT update route "/:id" that updates the donut and
// redirects back to the SHOW PAGE (not index)



//======================
// DELETE
//======================
// Create a DELETE delete route "/:id" that deletes the donut and
// redirects back to index page "/"



//======================
// EXPORTS
//======================
// export router with module.exports
module.exports = router;