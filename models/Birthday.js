const mongoose = require('mongoose');

const birthDaySchema = mongoose.Schema({
    name: String,
    words: String,
    relation: String,
    gender: String,
    showYear: Boolean,
    month: Number,
    year: Number,
    day: Number,

});

module.exports = mongooseBirthday = birthDaySchema