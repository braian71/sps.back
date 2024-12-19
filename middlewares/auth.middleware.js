const { verifyJWT } = require('../utils/jwt.util');

const authMiddleware = (req, res, next) => {
    const token = req.headers['authorization'].split(' ')[1];

    if (!token) {
        return res.status(401).json({
            success: false,
            message: 'Token de autenticación no proporcionado',
        });
    }

    const decoded = verifyJWT(token);
    if (!decoded) {
        return res.status(401).json({
            success: false,
            message: 'Token de autenticación no válido o expirado',
        });
    }

    req.user = decoded;

    next();
};

module.exports = authMiddleware;
