const express = require("express");
const _ = require('lodash');
const app = express();

const signupRoute = require('./server/routes/signup')
const signinRoute = require('./server/routes/signin')

const User = require('./db/users.schema')
const dbConnect = require('./db/connect')
const encoryptPassword = require('./lib/encryptPassoword')
const initExpressApp = require('./server/initExpressApp')


async function a () {
    console.log('DB 접속 시도')
    await dbConnect()
    console.log('DB 접속 완료')
    
    await User.create({
        id: 'asdf',
        password: 'qwer',
        name: '1234',
        age: 453
    })

    console.log(await User.find())
}

a()
initExpressApp(app)

const routes = [
    signinRoute,
    signupRoute
]

routes.forEach(route => {
    app[route.method](route.path, route.handler)
})



app.get('/users/me', (req, res) =>{
    const {idx} = req.session

    const me = users.find(user => {
        return user.idx === idx
    })
    return res.json(me)
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
            Object.assign(users[userId], newUser)
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


//mh8DoMgvG1MNZnE4