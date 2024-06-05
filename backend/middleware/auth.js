// import jwt from 'jsonwebtoken'

// const authMiddleware = async (req, res, next) => {
//     const { token } = req.headers;
//     if (!token) {
//         return res.json({ success: false, message: "Not Authorized Login Again" })
//     }
//     try {
//         const token_decode = jwt.verify(token, process.env.JWT_SECRET);
//         req.body.userId = token_decode.id;
//         next();
//     } catch (error) {
//         console.log(error);
//         res.json({ success: false, message: "Error" });
//     }
// }

// export default authMiddleware;
import jwt from 'jsonwebtoken';

const authMiddleware = async (req, res, next) => {
    const { token } = req.headers;
    if (!token) {
        return res.status(401).json({ success: false, message: "Unauthorized: No token provided" });
    }
    try {
        const token_decode = jwt.verify(token, process.env.JWT_SECRET);
        req.body.userId = token_decode.id;
        next();
    } catch (error) {
        console.error(error);
        res.status(401).json({ success: false, message: "Unauthorized: Invalid token" });
    }
}

export default authMiddleware;