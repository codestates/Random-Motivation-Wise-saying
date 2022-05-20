/** 나만의 명언 페이지에서 랜덤 명언 생성 */
const { wise_sayings, user_wise_sayings } = require('../../models')

module.exports = (req, res) => {
    user_wise_sayings.findAll({ /** 유저가 추가한 랜덤 명언 확인 */
        where: {
            user_id: req.params.userId
        }
    }).then((result) => { /** 추가한 명언의 갯수 안에서 랜덤 숫자 생성 */
        const userRandomNumber = Math.floor((Math.random() * result.length) + 1)
        user_wise_sayings.findOne({ /** 유저 명언 테이블에서 랜덤으로 생성한 숫자에 해당하는 wise_saying_id 찾아 */
            where: {
                wise_saying_id: userRandomNumber
            }
        }).then((result) => {
            if(!result) { /** 초과되면(null 나오면) 메시지 전달 */
                res.status(401).json({ message: '다시 해봐'})
            } else { /** 잘 나오면 명언에서 해당 id 찾아서 전달 */
                wise_sayings.findOne({
                    where: {
                        id: result.dataValues.wise_saying_id
                    }
                }).then((result) => {
                    res.json({data: result, message: '랜덤 명언 생성 성공!'})
                })
            }
        })
    })
}