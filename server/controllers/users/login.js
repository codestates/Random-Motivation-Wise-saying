const { users } = require('../../models')
const jwt = require('jsonwebtoken')

module.exports = (req, res) => {
    /** 로그인 기능 */
    users.findOne({
        where: {
            email: req.body.email,
            password: req.body.password
        }
    }).then((result) => {
        if(!result) {
            res.status(401).send({message: 'Invalid user or wrong password'})
        } else {
            const data = result.dataValues
            const token = jwt.sign(data, process.env.ACCESS_SECRET, { expiresIn: '5m'})
            
            delete data.password
            
            res.cookie('jwt', token)
            res.json({ data: token, message: 'login success'})
        }
    }).catch((err) => {
        console.log(err)
    })
}