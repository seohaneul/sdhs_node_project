const encoryptPassword = require('../lib/encryptPassoword')
const { v4: uuidv4 } = require('uuid'); 

module.exports= [{
        idx: uuidv4(),
        id: 'digitect1',
        password: encoryptPassword('thisispassword'),
        name: '홍길동',
        gender: 'male',
        age: 21,
        phoneNumber: '010-0000-0000'
}]