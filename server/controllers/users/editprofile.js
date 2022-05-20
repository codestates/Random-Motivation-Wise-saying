/** 프로필 수정 */
const { users } = require('../../models')

module.exports = (req, res) => {
    if (!req.body) {
        res.status(400).json({ message: 'you should be logged in' })
    } else {
            users.update({
                name: req.body.name,
                password: req.body.password
            }, {
                where: {
                   email: req.body.email
                }
            }).then((result) => {
                res.json({ message: '수정 완료' })
            }).catch((err) => {
                console.log(err)
            })
    
        }
    }