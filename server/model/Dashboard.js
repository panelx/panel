var mongoose = require('mongoose');
var Widget = require('./Widget');
var Schema = mongoose.Schema;

module.exports = mongoose.model('Dashboard', {
    title: String,
    widgets: [{ type: Schema.Types.ObjectId, ref: 'Widget' }]
});
