/** 메인 페이지에서 랜덤 명언 생성 */
const { wise_sayings } = require('../../models')

module.exports = (req, res) => {
    wise_sayings.findAndCountAll().then((result) => {
        const randomNumber = Math.floor(Math.random() * result.count) + 1

        wise_sayings.findOne({
            where: {
                id: randomNumber
            }
        }).then((result) => {
            res.json({data: result.dataValues, message: 'Make Random Wise Saying!'})
        }).catch((error) => {
            res.status(400).json({message: 'Error'})
        })
    })
}