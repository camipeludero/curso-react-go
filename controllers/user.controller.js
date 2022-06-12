const userModel = require('../model/user.model')
module.exports = {
    getAllUsers: (req, res) => {
        const users = userModel.getAllUsers();
        res.status(200).json(users)
        return;
    },
    getUserById: (req, res) => {
        const id = req.params.id;
        const user = userModel.getUserById(id);
        if (!user) {
            res.status(401).json({
                message: "Invalid user id"
            })
        }
        res.status(200).json(user)
        return;
    }
}