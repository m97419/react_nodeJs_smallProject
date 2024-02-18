const Photo = require("../models/Photos")

const createNewPhoto = async (req, res) => {

    const {title,imageUrl} = req.body
    
    if(!title) {
        return res.status(400),json({message: 'title and body is required'})
    }

    const photo = await Photo.create({title,imageUrl})
    
    if(photo) {
        return res.status(201).json({message:'New photo created'})
    }

    else {
        return res.status(400).json({message:'Invalid photo'})
    }
}

const getAllPhotos = async (req, res) => {

    const photos = await Photo.find().lean()

    if(!photos?.length) {
        return res.status(400).json({message:'No photos found'})
    }

    res.json(photos)
}

const updatePhoto = async (req, res) => {

    const {_id,title,imageUrl} = req.body
    
    if(!_id||!title) {
        return res.status(400).json({message:'Fields are required'})
    }

    const photo = await Photo.findById(_id).exec()

    if(!photo) {
        return res.status(400).json({message:'Photo not found'})
    }

    photo.title = title
    photo.imageUrl = imageUrl

    const updatephoto = await photo.save()

    res.json(`'${updatephoto.title}' updated`)
}

const deletePhoto = async (req, res) => {

    const {id} = req.body
    const photo = await Photo.findById(id).exec()

    if(!photo) {
        return res.status(400).json({message:'Photo not found'})
    }

    const result = await photo.deleteOne()

    const reply = `Photo '${result.title}' ID ${result._id} deleted`
    res.json(reply)
}

module.exports = {
    getAllPhotos,
    createNewPhoto,
    updatePhoto,
    deletePhoto
}