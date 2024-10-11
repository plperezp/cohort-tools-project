const router = require("express").Router()

const bcrypt = require("bcryptjs")
const User = require ("../models/user.model.js")
const jwt = require("jsonwebtoken")

// const verifyToken = require("../middlewares/auth.middlewares.js")
//Post signup
router.post("/signup", async (req, res, next)=>{
  
  const {email, password, username} = req.body
  
  if (!email || !password ||!username){
    res.status(400).json({message: "Todos los campos son obligatorios"})
    return
  }

  const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,16}$/gm;
  if(!regexPassword.test(password)){
    res
    .status(400)
    .json({
      message: "La contraseña debe tener al menos una mayúscula, un número y entre 8 y 16 caracteres"
    })
  }

  try {

    const foundUser = await User.findOne({ email: email})
    if(foundUser){
      res.status(400).json({ message: "Usuario ya registrado con ese email"})
      return;
    }
    const salt = await bcrypt.genSalt(12)
    const hashPassword = await bcrypt.hash(password, salt)

    await User.create({
      email,
      password: hashPassword,
      username
    })
    res.sendStatus(2021)
    
  } catch (error) {
    next(error)
  }


})

// POST "/api/auth/login" => recibe credenciales de usuario y lo autentica. Envía Token (llave virtual).
//post login

router.post("/login", async (req, res, ne))