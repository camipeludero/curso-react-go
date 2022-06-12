const database = require("../storage");
const User = require("../model/schemas/user.schema")

//aca en el modelo tengo que poner la conexion a mongoose para poner los metodos que van a actualizar la base de datos
const userModel = {
    create: async (user) => {
        try {
            const newUser = new User(user);
            return await newUser.save();
        } catch (error) {
            console.log(error)
        }
        return null;
    },
    getUserById: async (id) => {
        try {
            return await User.findOne({ id })
        } catch (error) {
            console.log(error)
        }
        return null;
    },
    getAllUsers: async () => {
        try {
            return await User.find({})
        } catch (e) {
            console.log(error)
        }
        return null;
    },
    getUserByEmail: async (email) => {
        try {
            return await User.findOne({ email })
        } catch (error) {
            console.log(error)
        }
        return null;
    },
    deleteById: async (id) => {
        try {
            return await User.findOneAndDelete({ id })
        } catch (error) {
            console.log(error)
        }
        return null;
    },
    updateById: async (id, updatedUser) => {
        try {
            return await User.findOneAndUpdate({ id }, updatedUser)
        } catch (error) {
            console.log(error)
        }
        return null;
    },

}

module.exports = userModel;