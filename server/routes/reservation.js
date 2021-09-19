var express = require('express');
var router = express.Router();
const mongoose = require("mongoose");

const Day = require("../models/day").model;

const Reservation = require("../models/reservation").model;

// Parameters 
// Date, table, name, phone, email

/* GET home page. */
router.post('/', function(req, res, next) {
  Day.find({date: req.body.date}, (err, days) => {
      if (!err) {
          if (days.length > 0) {
              let days = days[0];
              days.tables.forEach(table => {
                  if (table._id == req.body.table) {
                      //Correct table is table 
                      table.reservation = new Reservation ({
                          name: req.body.name,
                          phone: req.body.phone,
                          email: req.body.email,
                      })
                      table.isAvailable = false;
                      days.save(err => {
                          if (err) {
                              console.log(err);
                          } else {
                              console.log("reserved");
                              res.status(200).send("Added reservation");
                          }
                      })
                  }
              });
          } else {
              console.log("Day not found");
          }
      }
  })
});

module.exports = router;
