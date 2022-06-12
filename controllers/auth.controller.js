const { compare, encrypt, generateToken } = require('../utils')
const userModel = require('../model/user.model')

module.exports = {
    register: async (req, res) => {

        const { email, password } = req.body;

        //const email = req.body.email
        //const password = req.body.password

        //validaciones
        if (!email || !password) {
            res.status(500).json({
                message: "Email and password are required"
            });
            return;
        }

        const existEmail = userModel.getUserByEmail(email)

        if (existEmail) {
            res.status(500).json({
                message: "Email already exists"
            })
            return;
        }

        const encrypted = await encrypt(password)

        const newUser = {
            id: Date.now(),
            email,
            password: encrypted
        }

        /* try{
            userModel.create(newUser)
        } catch(error){
        } */

        userModel.create(newUser);

        res.status(200).json({
            message: 'User created'
        })
        return;
    },
    login: async (req, res) => {
        const { email, password } = req.body;

        //validaciones
        if (!email || !password) {
            res.status(500).json({
                message: "Email and password are required"
            });
            return;
        }

        const user = userModel.getUserByEmail(email)

        const validEmail = email === user.email;

        const validPassword = await compare(password, user.password);


        if (!validPassword || !validEmail || !user) {
            res.status(400).json({
                message: "Email or password are incorrect"
            })
            return;
        }

        //generar token
        const token = await generateToken({
            id: user.id,
            email: user.email
        })

        res.status(200).json({
            message: 'Logged in succesfully',
            token
        })
        console.log(token)
        return;
    },
}