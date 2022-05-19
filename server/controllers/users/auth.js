const { users } = require('../../models')
const jwt = require('jsonwebtoken')

module.exports = (req, res) => {
    /** 로그인 상태에서 나만의 명언 추가, 삭제, 수정 */
    if(!req.cookies['token']) { /** 쿠키가 없으면(로그인 된 상태가 아니면) 쿠키의 이름은 'token' */
        res.json({data:null, message: 'you should be logged in'})
    } else { /** 쿠키가 있으면(로그인 되어 있으면) */
        const auth = req.cookies['token']
        const tokenData = auth.split('.')[1]
        const userData = jwt.verify(auth, process.env.ACCESS_SECRET)

        if(!auth) {
            return null;
        }

        let userInfo ={
            id: userData.id,
            name: userData.name,
            email: userData.email,
            password: userData.password,
            createdAt: userData.createdAt,
            updatedAt: userData.updatedAt
        }
       
        res.status(200).send({data:{userInfo:userInfo},message:"ok"})
        
    }
}