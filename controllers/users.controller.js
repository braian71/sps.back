const userService = require('../services/user.service')
const { createJWT } = require('../utils/jwt.util')

exports.create = async (req, res) => {
    try {
        const newUser = await userService.create(req.body);

        res.status(201).json({
            success: true,
            data: newUser,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

exports.getAll = async (req, res) => {
    try {
        const users = await userService.getAll();

        res.status(200).json({
            success: true,
            data: users,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

exports.getById = async (req, res) => {
    const userId = req.params.id;
    try {
        const user = await userService.getById(userId);

        res.status(200).json({
            success: true,
            data: user,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

exports.update = async (req, res) => {
    const userId = req.params.id;
    try {
        const updatedUser = await userService.update(userId, req.body);

        res.status(200).json({
            success: true,
            data: updatedUser,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

exports.remove = async (req, res) => {
    const userId = req.params.id;
    try {
        const removedUser = await userService.remove(userId);

        res.status(200).json({
            success: true,
            message: `Usuario eliminado con éxito ${removedUser._id}`,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
