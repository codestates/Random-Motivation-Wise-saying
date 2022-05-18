const { user_wise_sayings } = require('../../models')


module.exports = (req, res) => {
    // console.log(req.params) /** { userId: '1', wiseSayingId: '1' } */
    /** 찾은 명언 아이디를 user_wise_sayings 테이블에 추가한다 */
    user_wise_sayings.findOne({ /** 이미 user_wise_sayings 테이블에 있는지 확인하고 */
        where: {
            user_id: req.params.userId,
            wise_saying_id: req.params.wiseSayingId
        }
    }).then((result) => {
        if (result) { /** 이미 존재하면 추가하지 않고 메시지 전달 */
            res.status(400).json({ message: 'you already have this wise_saying' })
        } else {
            user_wise_sayings.create({ /** 테이블에 존재하지 않으면 추가한다 */
                user_id: req.params.userId,
                wise_saying_id: req.params.wiseSayingId
            }).then(() => {
                res.json({ message: 'Add success' })
            }).catch(err => {
                console.log(err)
                res.status(500).send({ message: 'Server error' })
            })
        }
    })


}