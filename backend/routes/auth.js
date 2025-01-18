const express = require("express");
const { registerUser, loginUser } = require("../handlers/auth-handler");
const router = express.Router();

router.post("/register", async (req,res)=>{
    let model = req.body; 
    if(model.name && model.email && model.password){
        await registerUser(model);
        res.send({
            message: "User Registrado"
        })
    }else{
        res.status(400).json({
            error:"Please providae name, email and password"            
        });
    }
});

router.post("/login", async (req,res)=>{
    let model = req.body; 
    if(model.email && model.password){
        const result = await loginUser(model);
        if(result){
            res.send(result)
        }else{
            res.status(400).json({
            error:"E-MAIL OU SENHA INCORRETO"
            });
        }
    }else{
        res.status(400).json({
            error:"Please providae email and password"            
        });
    }
});


module.exports = router;