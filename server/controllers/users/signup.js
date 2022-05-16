/** 회원가입 */
const { users } =require('../../models')
const jwt = require('jsonwebtoken')

module.exports = (req, res) => {
    users.findOrCreate({
        where: {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }
    })
}