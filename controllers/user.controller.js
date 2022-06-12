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
    }
}