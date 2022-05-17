import mongoose from 'mongoose'
import postModal from '../models/Post.js'

export const getPosts = async (req, res) => {
  try {
    const posts = await postModal.find();

    res.status(200).json(posts);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  const post = req.body
    
  const newPost = new postModal(post)

  try {
      await newPost.save()

      res.status(201).json(newPost)
  } catch (error) {
      res.status(404).json({ message: error.message })
  }
}

export const getPost = async (req, res) => {
  try {
    let post = await postModal.findById(req.params.id).populate("user").lean();

    if (!post) {
      return res.status(404).send("No post with that id");
    }

    res.status(200).json(post);
  } catch (err) {
    console.error(err);
    res.render("error/404");
  }
}

export const deletePost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No post with that id");

  await postModal.findByIdAndDelete(id);

  res.json({ message: "Post deleted successfully." });
};