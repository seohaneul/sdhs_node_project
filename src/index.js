const express = require("express");
const { v4: uuidv4 } = require('uuid');
const crypto = require('crypto');
const _ = require('lodash');
const app = express();

app.use(express.json())

function encoryptPassword(password) {
    return crypto
        .createHash('sha256')
        .update(password + "asdfasdf@#$%^&")
        .digest('base64')
}

let users = [{
    idx: uuidv4(),
    id: 'digitect1',
    password: encoryptPassword('thisispassword'),
    name: '홍길동',
    gender: 'male',
    age: 21,
    phoneNumber: '010-0000-0000'
}]

app.post('/signup', (req, res) => {
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
    users.push(user)
    return res.send({ success: true })
})

app.get('/users', (req, res) =>{
    return res.json(users)
})

app.delete('/users/:userId', (req, res) =>{
    const { userId } = req.params;
    const filterFunc = (user) => {
        if(user.idx !== userId) return true
        return false
    }

    users = users.filter(filterFunc)
    return res.send({ success: true })
})

app.patch('/users/:userId', (req, res) => {
    const {userId} = req.params;

    // for (let i = 0; i < users.length; i++){
    //     if(users[i].id === userId){
    //         if(req.body['name'] !== undefined){
    //             users[i].name = req.body.name
    //         }
    //     }
    // }

    for (let i = 0; i < users.length; i++){
        if(users[i].id === userId){
            const newUser = _.pick(req.body, ['id', 'password','name', 'age', 'gender', 'phoneNumber'])
            if(newUser.password !== undefined){
                newUser.password = encoryptPassword(newUser.password)
            }
            Object.assign(users[userIndex], newUser)
        }
    }

    // const userIndex = users.findIndex((user) => {
    //     return user.id === userId
    // })
    // const newUser = _.pick(req.body, ['name', 'age', 'gender', 'phoneNumber'])
    // Object.assign(users[userIndex], newUser)


    return res.json({ success: true })
})

const port = 3000
app.listen(port, () => {
    console.log(`App is running on port: ${port}`)
})