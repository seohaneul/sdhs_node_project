const users = require('../../db/users')

module.exports = {
    path: '/signin',
    method: 'post',
    handler: (req,res) => {
        let success = false
        const {id, password} = req.body
    
        function findUserByIdAndPassword () {
            const user = users.find(user => {
                return user.id === id && user.password == encoryptPassword(password)
            })
            return user
        }
        // if(users.find(user => {
        //     return user.id === id && user.password == encoryptPassword(password)
        // }) !== undefined) {
        //     success = true
        // }
       const user = findUserByIdAndPassword()
    
       if(user != undefined){
        success = true
        req.session.idx = user.idx
       }
    
        return res.json({success})
}
}