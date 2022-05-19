/** 회원탈퇴 기능 */
const { users } = require('../../models')

module.exports = (req, res) => {
    if(!req.body) {
        res.status(404).json({ message: 'you have to login first' })
    } else {
        users.destroy({
            where: {
                name : req.body.name,
                email : req.body.email
            }
        }).then(() => {
            res.json({ message: 'Signout success' })
        })
    }
}