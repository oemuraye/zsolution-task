import mongoose from 'mongoose'

export const getPosts = async (req, res) => {
  try {
    // const postMessages = await PostMessage.find();

    // res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};