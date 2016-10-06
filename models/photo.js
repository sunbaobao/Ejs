/**
 * Created by Administrator on 2016/10/5.
 */
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/photo_app');
var schema = new mongoose.Schema({
    name: String,
    path: String
});
module.exports = mongoose.model('Photo', schema);
