import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import postRoutes from "./routes/post.js";
const app = express();

// reached at localhost:5000/posts
app.use("/posts", postRoutes);
// image size limit
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const CONNECTION_URL =
	"mongodb+srv://memoriesproject:memoriesproject@cluster0.voumc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose
	.connect(CONNECTION_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() =>
		app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
	)
	.catch((error) => console.log(error.message));
