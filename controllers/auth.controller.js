const userService = require('../services/auth.service')
const { createJWT } = require('../utils/jwt.util')

exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await userService.login(email, password);
        const token = createJWT(user.email);

        res.status(200).json({
            success: true,
            data: user,
            token,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
