var mongoose = require('mongoose');

module.exports = mongoose.model('Widget', {
    title: String,
    type: String,
    widgetType: String,
    scriptId: String
});