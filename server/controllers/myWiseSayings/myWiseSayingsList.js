const { users, user_wise_sayings } = require('../../models')
const jwt = require('jsonwebtoken')

module.exports = (req, res) => {
    /** 로그인 상태에서 나만의 명언 추가, 삭제, 수정 */
    if(!req.cookies['token']) { /** 쿠키가 없으면(로그인 된 상태가 아니면) 쿠키의 이름은 'token' */
        res.json({message: 'you should be logged in'})
    } else { /** 쿠키가 있으면(로그인 되어 있으면) */
        const auth = req.cookies['token']
        
        if(!auth) {
            return null;
        }

        const tokenData = auth.split('.')[1]
        const userData = jwt.verify(tokenData, process.env.ACCESS_SECRET) /** 해석한 유저데이터 */

        users.findOne({ /** 해석한 유저데이터가 db에 있는지 찾아라 */
            where: {
                id: userData.id
            }
        }).then((result) => {
            /** 해당 유저의 명언 리스트를 보여줘라 */
            user_wise_sayings.findOne({
                where: {

                }
            })
        }).catch((error) => {
            res.json({ message: 'error: ' + error })
        })


    }
}