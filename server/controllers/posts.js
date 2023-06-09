 import mongoose from "mongoose";
import PostMessage from "../models/postMessage.js";
 
 export const getPosts =  async(req,res) =>{
    try{
        const postMessage = await PostMessage.find();
        res.status(200).json(postMessage);

    } catch(error){
        res.status(404).json({message: error.message});

    }
}

export const createPost = async (req,res) =>{
   const post =req.body;
   const newPost = new PostMessage(post);

   try {
    await  newPost.save();
    res.status(201).json(newPost);
   } catch (error){
   // res.status(409).json ({message:error.message})
   if (error.isAxiosError) {
    // Handle AxiosError
    console.log('Axios error occurred:');
    console.log('Status:', error.response.status);
    console.log('Data:', error.response.data);
  } else {
    // Handle other errors
    console.log('Error occurred:', error);
  }
   }
}

 export const updatePost = async (req,res) =>{
  const {id: _id} = req.params;
  const post = req.body;

  if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that Id');

  //{title, name, message, tags}

 const UpdatedPost = await postMessage.findByIdAndUpdate(_id, post,{new : true});

 res.json(UpdatedPost);

}

 export const deletePost =   async (req,res) =>{

  const {id} = req.params;
  if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that Id');

  await postMessage.findByIdAndRemove(id);
  console.log('Delete');

  res.json({ message : 'post deleted successfully'})


 }

 export const likePost =async (req,res) => {

  const {id} = req.params;
  if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that Id');

  const post = await PostMessage.findById(id);

  const updatedPost = await PostMessage.findByIdAndUpdate(id, { likeCount: post.likeCount + 1 }, { new: true });
  
  res.json(updatedPost);

 }
 export const dislikePost =async (req,res) => {

  const {id} = req.params;
  
  if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that Id');

  const post = await PostMessage.findById(id);

  const updatedPost = await PostMessage.findByIdAndUpdate(id, { dislikeCount: post.dislikeCount + 1 }, { new: true });
  
  res.json(updatedPost);

 }