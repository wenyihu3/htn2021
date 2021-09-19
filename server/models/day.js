const mongoose = require("mongoose")

const tableSchema = require("./table").schema

let daySchema = new mongoose.Schema({
    date: Date,
    tables: [tableSchema]
});

let Day = mongoose.model("Day", tableSchema);

module.exports.model = Day;
monule.exports.Schema = daySchema;

