import User from '../models/user.model.js'

export const register = async (req, res) => {
    const {username, name, password} = req.body

    try{
        const userFound = await User.findOne({username});
        if (userFound)
            return res.status(400).json(["El nombre de usuario ya está en uso"]);

        const newUser = new User({
            username,
            name,
            password    
        })
    
        const userSaved = await newUser.save();
        res.json(userSaved)
    } catch(error) {
        console.log(error)
    }
}

export const login = (req, res) => res.send("login");