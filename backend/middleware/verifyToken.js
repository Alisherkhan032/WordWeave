const jwt = require('jsonwebtoken');

function verifyToken(req, res, next) {
    console.log("inside verify token");
    const token = req.cookies.authToken;
    console.log("token is ", token);
    if(!token){
        return res.status(401).json({
            message: "Access Denied",
            success: false
        });
    }

    jwt.verify(token, process.env.SECRET, (err, decoded) =>{
        if(err){
            return res.status(401).json({
                message: "Invalid token",
                success: false
            });
        }
        req.user = decoded.user;
        next();
    })
    next();
}

module.exports = verifyToken;