const express = require('express');
const loginService = require("./services/loginService.js");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require('cookie-parser');

const app = express();
app.set("view engine", "ejs");

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

const corsOptions = {
    origin: "*",
    methods: "POST"
};

app.post("/login", cors(corsOptions), loginService.login);
app.get("/login", cors(corsOptions), loginService.getLogin);
app.post("/users", cors(corsOptions), loginService.createUser);
app.get("/", cors(corsOptions), loginService.getProfile);

app.listen(8100);
console.log("Listening at localhost:8100...");
