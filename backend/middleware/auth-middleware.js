const jwt = require('jsonwebtoken');

function verifyToken(req,res,next){
    const token = req.header('Authorization');
    if (!token) {
        return res.status(401).send({
            error: "Acesso Negado"
        });
    }
    try{
        const decode = jwt.verify(token,"secret");
        console.log(decode);
        req.user = decode;
        next();
    }catch(err){
        return res.status(401).send({
            error: "Token Invalido"
        });
    }
}

function isAdmin(req,res,next){
    if (req.user && req.user.isAdmin){
        next();
    }else{
        return res.status(401).send({
            error: "Proibido"
        });
    }
}

module.exports = {verifyToken, isAdmin}