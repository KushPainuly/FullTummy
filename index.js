require("./database/config");
const express = require("express");
const User = require("./database/User");
const Booking = require("./database/Booking");
const cors = require("cors")
const app = express();
app.use(express.json())
app.use(cors());
const PORT = 8000 || 5000;

console.log(PORT);
app.post("/contact", async (req, res) => {
    let user = new User(req.body);
    let result = await user.save();
    res.send(result);
})

app.post("/booking", async (req, res) => {
    let booking = new Booking(req.body);
    let result = await booking.save();
    res.send(result);
})

app.listen(PORT);