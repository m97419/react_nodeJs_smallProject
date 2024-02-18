const User = require("../models/Users")

const createNewUser = async (req, res) => {

    const {name, userName, email, address, phone} = req.body
    
    if(!name) {
        return res.status(400),json({message: 'Name is required'})
    }

    const user = await User.create({name, userName, email, address, phone})
    
    if(user) {
        return res.status(201).json({message:'New user created'})
    }

    else {
        return res.status(400).json({message:'Invalid user'})
    }
}

// ע"פ קריטריונים
const getAllUsers = async (req, res) => {

    const users = await User.find().lean()

    if(!users?.length) {
        return res.status(400).json({message:'No users found'})
    }

    res.json(users)
}

const updateUser = async (req, res) => {

    const {_id,name, userName, email, address, phone} = req.body
    
    if(!_id||!name) {
        return res.status(400).json({message:'Fields are required'})
    }

    const user = await User.findById(_id).exec()

    if(!user) {
        return res.status(400).json({message:'User not found'})
    }

    user.name = name
    user.userName = userName
    user.email = email
    user.address = address
    user.phone = phone

    const updateuser = await user.save()

    res.json(`'${updateuser.name}' updated`)
}

const deleteUser = async (req, res) => {

    const {id} = req.body
    const user = await User.findById(id).exec()

    if(!user) {
        return res.status(400).json({message:'User not found'})
    }

    const result = await user.deleteOne()

    const reply = `User '${result.name}' ID ${result._id} deleted`
    res.json(reply)
}

module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser
}