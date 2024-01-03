const crypto = require('crypto');


module.exports = function encoryptPassword(password) {
    return crypto
        .createHash('sha256')
        .update(password + "asdfasdf@#$%^&")
        .digest('base64')
}