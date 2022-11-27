const crypto = require('crypto');

const tokens = [];
const users = [];

exports.login = (req, res) => {
    const user = users.find((user) => user.username === req.body.username && user.password === req.body.password);
    if (user === undefined){
        res.sendStatus(401);
    }
    else {
        const token = crypto.randomUUID();
        tokens.push({username: user.username, token});
        res.send({token})
    }
}

exports.createUser = (req, res) => {
    users.push ({'username' :req.body .username, 'password':req.body.password});
    res.sendStatus(201);
};

exports.getLogin = (req, res) => {
    res.render('login');
};

exports.getProfile = (req, res) => {
    const token = req.cookies.user_cookie;
    const user = tokens.find((user) => user.token === token);

    if(token === undefined || user === undefined){
        res.redirect("login");
    }
    res.render('home', {username: user.username});
};

