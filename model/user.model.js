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
    getUserById: (id) => {
        return database.users.find(user => user.id === id)
    },
    deleteById: (id) => {
        database.users.filter(user => user.id !== id)
    },
    updateById: (id, user) => {
        let userToUpdate = database.users.find(user => user.id === id);
        userToUpdate.name = user.name;
        userToUpdate.password = user.password;
        return userToUpdate;
    },
    getAllUsers: () => {
        const users = database.users;
        return users;
    },
    getUserByEmail: (email) => {
        return database.users.find(user => user.email === email)
    }

}

module.exports = userModel;