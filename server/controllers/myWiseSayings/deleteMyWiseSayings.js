const { user_wise_sayings } = require('../../models')

module.exports = (req, res) => {
    user_wise_sayings.findOne({
        where: {
            user_id: req.params.userId,
            wise_saying_id: req.params.wiseSayingId
        }
    }).then((result) => {
        if(!result) {
            res.status(401).json({message: 'you have not this wise_saying'})
        } else {
            user_wise_sayings.destroy({
                where: {
                    user_id: result.dataValues.user_id,
                    wise_saying_id: result.dataValues.wise_saying_id
                }
            }).then(() => {
                res.json({message: 'Delete Success'});
            })
        }
    }).catch((error) => {
        console.log(error)
        res.status(500).json({message: 'Server error'})
    })
}