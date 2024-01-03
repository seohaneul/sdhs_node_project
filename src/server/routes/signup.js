const { v4: uuidv4 } = require('uuid');
const _ = require('lodash');

module.exports = {
    path: '/signup',
    method: 'post',
    handler: () => {
        (req, res) => {
            // const {
            //     id, password, name, gender, age, phoneNumber
            // } = req.body;
        
            const user = _.pick(
                req.body,
                [
                'id',
                'password', 
                'name', 
                'gender', 
                'age', 
                'phoneNumber'
                ]
            )
            function duplicatedUser () {
                return users.find(user => {
                    return user.id === req.body.id
                })
            }
            if(duplicatedUser() === undefined){
            users.push(Object.assign(user, {
                idx: uuidv4(), 
                ...(user.password !== undefined && {
                    password: encoryptPassword(user.password)
                })
            }))
            return res.send({ success: true })
        }
        return res.status(400).send({ success: false })
    }
}
}