const userModel = require('../model/user.model')
module.exports = {
    getAllUsers: async (req, res) => {
        const users = await userModel.getAllUsers();
        res.status(200).json(users)
        return;
    },
    getUserById: async (req, res) => {
        const id = req.params.id;
        const user = await userModel.getUserById(id);
        if (!user) {
            res.status(401).json({
                message: "Invalid user id"
            })
        }
        res.status(200).json(user)
        return;
    },
    deleteUserById: async (req, res) => {
        const id = req.params.id;
        const user = await userModel.getUserById(id)
        if (!user) {
            res.status(401).json({
                message: "Invalid user id"
            })
        }
        await userModel.deleteById(id)
        res.status(200).json({
            message: "User deleted",
            user
        })
        return;
    },
    updateUserById: async (req, res) => {
        const id = req.params.id;
        const updatedUser = req.body;

        if (!updatedUser) {
            res.status(401).json({
                message: "No information provided"
            })
        }

        await userModel.updateById(id, updatedUser)
        res.status(200).json({
            message: "user updated",
            updatedUser
        })
    }
}