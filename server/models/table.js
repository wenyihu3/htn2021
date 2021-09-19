const mongoose = require("mongoose")

const reservationSchema = require("./reservation").schema

let tableSchema = new mongoose.Schema({
    name: String, 
    capacity: Number,
    reservation: {
        required: false,
        type: reservationSchema
    }
});

let Table = mongoose.model("Table", tableSchema);

module.exports.model = Table;
monule.exports.Schema = tableSchema;
