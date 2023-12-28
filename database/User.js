const moongoose = require("mongoose");

const UserSchema = new moongoose.Schema(
    {
        name:String,
        email:String,
        subject:String,
        message:String
    }
)

const UserModal = moongoose.model("User", UserSchema);

module.exports = UserModal;