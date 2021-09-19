const mongoose = require("mongoose")

let reservationSchema = new mongoose.Schema({
    name: String, 
    phone: String, 
    email: String
});

let reservation = mongoose.model("Reservation", reservationSchema)

module.exports.model = reservation;
monule.exports.Schema = reservationSchema;
