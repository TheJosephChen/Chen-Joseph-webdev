var mongoose = require("mongoose");
var widgetSchema = mongoose.Schema({
    type: [{type: String, enum:["HEADING", "IMAGE", "YOUTUBE", "HTML", "INPUT"]}],
    name: String,
    text: String,
    placeholder: String,
    description: String,
    url: String,
    width: String,
    height: String,
    rows: Number,
    size: Number,
    class: String,
    icon: String,
    deletable: Boolean,
    formatted: Boolean,
    _page: {type: mongoose.Schema.Types.ObjectId, ref: "PageModel"},
    created: {type: Date, default: Date.now}
}, {collection: "widget"});
module.exports = widgetSchema;