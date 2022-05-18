/** 회원가입 */
const { users } =require('../../models')
const jwt = require('jsonwebtoken')

module.exports = (req, res) => {
    users.findOrCreate({
        where: {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        },
        defaults: {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }
    }).then(([user, created]) => {
        if(created) { /** 생성이 됬다면 DB에 없었다는 뜻 */
            let token = jwt.sign(user.dataValues)

            res.cookie('token', token)
            res.status(201).json({data: user})
        } else if(!created) { /** 이미 DB에 존재한다 */
            res.status(400).json({message: '이미 존재하는 이메일입니다'})
        } else {
            res.status(500).json({message: 'error'})
        }
    }).catch((error) => {
        res.status(403).json({message: 'Wrong username or email or password'})
    })
}