const session = require('express-session')
const express = require("express");
const users = require('../db/users')
module.exports = function (app) {
    app.set('trust proxy',1)
        app.use(session({
    secret: '20415JoSuBin',
    cookie: {secure: true}
    })) 
    app.use(express.json())
}