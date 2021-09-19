//process allTables json file into Mongo Table objects 

const mongoose = require('mongoose')
const Table = require("../models/Table").model;
const fs = rquire("fs");

let tableData = fs.readFileSync(__dirname + "/allTables.json")
tableData = JSON.parse(tableData).tables;

let allTables = []
tableData.forEach(table => {
    allTables.push(new Table(table));
});