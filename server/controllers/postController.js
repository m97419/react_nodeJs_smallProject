const Post = require("../models/Posts")

const createNewPost = async (req, res) => {

    const {title, body} = req.body
    
    if(!title) {
        return res.status(400),json({message: 'Title is required'})
    }

    const post = await Post.create({title, body})
    
    if(post) {
        return res.status(201).json({message:'New post created'})
    }

    else {
        return res.status(400).json({message:'Invalid post'})
    }
}

// ע"פ קריטריונים
const getAllPosts = async (req, res) => {

    const posts = await Post.find().lean()

    if(!posts?.length) {
        return res.status(400).json({message:'No posts found'})
    }

    res.json(posts)
}

const updatePost = async (req, res) => {

    const {_id,title, body} = req.body
    
    if(!_id||!title) {
        return res.status(400).json({message:'Fields are required'})
    }

    const post = await Post.findById(_id).exec()

    if(!post) {
        return res.status(400).json({message:'Post not found'})
    }

    post.title = title
    post.body = body

    const updatepost = await post.save()

    res.json(`'${updatepost.title}' updated`)
}

const deletePost = async (req, res) => {

    const {id} = req.body
    const post = await Post.findById(id).exec()

    if(!post) {
        return res.status(400).json({message:'Post not found'})
    }

    const result = await post.deleteOne()

    const reply = `Post '${result.title}' ID ${result._id} deleted`
    res.json(reply)
}

module.exports = {
    getAllPosts,
    createNewPost,
    updatePost,
    deletePost
}