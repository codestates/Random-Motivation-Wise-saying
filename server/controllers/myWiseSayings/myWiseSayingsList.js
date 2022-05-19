const { users, user_wise_sayings, wise_sayings } = require('../../models')
const jwt = require('jsonwebtoken')

module.exports = (req, res) => {
    /** 로그인 상태에서 나만의 명언 추가, 삭제, 수정 */
    if(!req.cookies['token']) { /** 쿠키가 없으면(로그인 된 상태가 아니면) 쿠키의 이름은 'token' */
        res.json({message: 'you should be logged in'})
    } else { /** 쿠키가 있으면(로그인 되어 있으면) */
        const auth = req.cookies['token']
        const tokenData = auth.split('.')[1]
        const userData = jwt.verify(auth, process.env.ACCESS_SECRET)

        if(!auth) {
            return null;
        }

        users.findOne({ /** 해석한 유저데이터가 db에 있는지 찾아라 */
            where: {
                id: userData.id
            }
        }).then((result) => {
            /** 해당 유저의 명언 리스트를 보여줘라 */
            user_wise_sayings.findAll({ /** 해당 유저의 user_id로 wise_saying_id 모두 찾아라 */
                where: {
                    user_id: result.dataValues.id /** 찾은 user_id로 */
                }
            }).then((result2) => {
                for(let i = 0; i < result2.length; i++) {
                    // console.log(result2[i].dataValues.wise_saying_id)
                    wise_sayings.findAll({ /** 찾은 wise_saying_id로 wise_sayings 테이블에서 해당하는 명언과 작가 찾아라 */
                        where: {
                            id: result2[i].dataValues.wise_saying_id
                        }
                    }).then((result3) => { /** 찾은 명언과 작가를 응답으로 전달해라 */
                        for(let i = 0; i < result3.length; i++) {
                            let arr = []
                            arr.push(result3[i].dataValues)
                            console.log(arr)
                        }
                        res.json({data: {arr, result}, message: 'ok'});
                    })
                }
            })
        }).catch((error) => {
            res.status(500).json({ message: 'error: ' + error })
        })


    }
}