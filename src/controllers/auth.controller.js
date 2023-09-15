import User from '../models/user.model.js'

export const register = async (req, res) => {
    const { username, name, password } = req.body

    try {
        const userFound = await User.findOne({ username });
        if (userFound)
            return res.status(400).json(["El nombre de usuario ya está en uso"]);

        //Nuevo usuario
        const newUser = new User({
            username,
            name,
            password
        });

        const userSaved = await newUser.save();

        res.json(userSaved)
    } catch (error) {
        console.log(error)
    }
}

export const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const userFound = await User.findOne({ username });

        if (!userFound)
            return res.status(400).json({
                message: ["El nombre de usuario no existe"],
            });

        if (password !== userFound.password) {
            return res.status(400).json({
                message: ["La contrasena es incorrecta"],
            });
        }

        res.json({
            id: userFound._id,
            username: userFound.username,
            name: userFound.name,
        });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};