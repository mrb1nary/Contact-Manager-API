const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");


const validateAccessToken = asyncHandler(async (req, res, next) => {
    let token;
    let authHeader = req.headers.authorization || req.headers.Authrorization;

    if(authHeader && authHeader.startsWith("Bearer")){
        token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
            if(err) return res.sendStatus(403).json({message: "User in not authorized"});
            req.user = user;
            req.user= decoded.user;
            next();
        })
    }
    if(!token) return res.sendStatus(401).json({message: "User in not authorized"});
})

module.exports = validateAccessToken;