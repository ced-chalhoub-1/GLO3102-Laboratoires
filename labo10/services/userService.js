const User = require("../models/User.js").model;

exports.createUser = (req, res) => {
    const user = new User();
    console.log("In method")
    user.save((err, user) => {
        console.log("Saving...")
        if(err){
            return res.sendStatus(500)
        }
        return res.status(200).send(JSON.stringify({"id": user._id}))
    });
}