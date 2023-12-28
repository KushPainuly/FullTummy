const moongoose = require("mongoose");

const BookSchema = new moongoose.Schema(
    {
        name:String,
        email:String,
        phone:String,
        date:String,
        time:String,
        peoples:String,
        address:String
    }
)

const BookModel = moongoose.model("Booking", BookSchema);

module.exports = BookModel;