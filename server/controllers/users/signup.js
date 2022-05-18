/** 회원가입 */
const { users } =require('../../models')
const jwt = require('jsonwebtoken')

module.exports = async(req, res) => {

  if (
        req.body.name === '' || req.body.name === null ||
        req.body.email === '' || req.body.email === null ||
        req.body.password === '' || req.body.password === null
    ) {
      return res.status(403).send('Wrong name or email or password');
    }
  users.findOrCreate({
    where:{
        email: req.body.email
    },
    defaults: {
        name: req.body.name,
        password: req.body.password
    }

  }).then(([result, created])=>{
    if(!created){
      return res.status(400).send('email exists')
    }

    const data ={
      id: result.dataValues.id,
      name: result.dataValues.name,
      email: result.dataValues.email,
      password: result.dataValues.password
    }
    const token = jwt.sign(data, process.env.ACCESS_SECRET, { expiresIn: '5m'})
    delete data.password
    res.cookie('token', token)
    return res.status(201).send({message:"ok"})
  }).catch((err) => {
    return console.log(err)
  })
};