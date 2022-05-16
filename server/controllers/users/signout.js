/** 로그아웃 기능 */
module.exports = (req, res) => {
    if(req.cookies.jwt) {
        res.json({message: 'Success logout'})
    }
    if(!req.cookies.jwt) {
        res.status(400).json({message: 'You currently not logined'})
    }
    res.status(500).json({message: 'Server error'})
}