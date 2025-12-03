const jwt = require("jsonwebtoken")
const SECRET = "apr_secret_key";

function verifyToken(req,res,next){
const token = req.headers["authorization"];
if(!token){
    return res.status(403).json({error: "No Token Provided"})
}

try{
    const decoded = jwt.verify(token,SECRET);
    req.adminId=decoded.indexOf;
}
catch(err){
    res.status(401).json({error: "Invalid Token"})
}
}

module.exports = verifyToken;