/** 회원가입 */
const { users } =require('../../models')
const jwt = require('jsonwebtoken')

module.exports = async(req, res) => {
  
  if (
        (req.body.name === undefined || req.body.name === null) ||
        (req.body.email === undefined || req.body.email === null) ||
        (req.body.password === undefined || req.body.password === null)
    ) {
      res.status(403).send('Wrong name or email or password');
    }
  users.findOrCreate({
    where:{
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    },
   
  }).then(([result, created])=>{
    if(!created){
      res.status(400).send('email exists')
    }

    const data ={
      id: result.dataValues.id,
      name: result.dataValues.name,
      email: result.dataValues.email,
      password: result.dataValues.password
    }
    const token = jwt.sign(data, process.env.ACCESS_SECRET, { expiresIn: '5m'})
    delete data.password
    res.cookie('jwt', token)
    res.status(201).send({message:"ok"})
  }).catch((err) => {
    console.log(err)
  })
};