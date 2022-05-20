const { user_wise_sayings, wise_sayings } = require('../../models')

module.exports = (req, res) => {
    if (!req.body.script || !req.body.talker) {
        res.status(400).json({ message: 'you should be write something' })
    } else {
        wise_sayings.create({
            script: req.body.script,
            talker: req.body.talker
        }).then((result) => {
            user_wise_sayings.update({
                wise_saying_id: result.dataValues.id
            }, {
                where: {
                    user_id: req.params.userId,
                    wise_saying_id: req.params.wiseSayingId
                }
            }).then(() => {
                res.json({ message: 'Change Success' })
            })
        }).catch((err) => {
            console.log(err)
            res.status(500).json({ message: 'Server error' })
        })
    }
}