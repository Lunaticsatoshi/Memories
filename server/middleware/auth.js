import jwt from 'jsonwebtoken';
const auththenticateToken = (req,res,next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.status(401).json({error: 'No Token'})
    
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decodedUser) =>{
        if (err){
            return res.status(403).json({error: 'Token Invalid'})
        }
        // console.log(decodedUser);
        //New decoded user
         req.user = decodedUser.user;
         next();
    })
}

export default auththenticateToken;