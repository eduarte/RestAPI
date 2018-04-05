var mongoose = require('mongoose');
mongoose.set('debug', true);

var distSchema = mongoose.Schema({
    codeelect: String,
    provincia: String,
    canton: String,
    distrito: String
});

module.exports = mongoose.model('Distelec', distSchema,"distelec");