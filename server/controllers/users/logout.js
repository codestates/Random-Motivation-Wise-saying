/** 로그아웃 기능 */
module.exports = (req, res) => {
    if(req.cookies) {
        res.cookie('token', null, {
            maxAge: 0
        })
        res.json({message: 'Success logout'})
    } else if(!req.cookies) {
        res.status(400).json({message: 'You currently not logined'})
    } else {
        res.status(500).json({message: 'Server error'})
    }
}