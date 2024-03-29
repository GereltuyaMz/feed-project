import PostMessage from "../models/postMessage.js";

// all handlers/logics for our routes
export const getPosts = async (req, res) => {
	// retrieve all the post we have in the database
	try {
		const postMessages = await PostMessage.find();
		console.log(postMessages);
		res.status(200).json(postMessages);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

export const createPost = async (req, res) => {
	const post = req.body;
	const newPost = new PostMessage(post);

	try {
		await newPost.save();
		res.status(200).json(newPost);
	} catch (error) {
		res.status(409).json({ message: error.message });
	}
};
