const users = require("./data/db.users.json");
const posts = require("./data/db.posts.json");
const categories = require("./data/db.category.json");
const comments = require("./data/db.comments.json");

const { UserModel } = require("./app/models/user");
const { PostModel } = require("./app/models/post");
const { CommentModel } = require("./app/models/comment");
const { CategoryModel } = require("./app/models/category");

const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;

(async () => {
  try {

    mongoose.set("strictQuery", true);
    await mongoose.connect(MONGODB_URI);
    console.log("MongoDB connected!!");

    await UserModel.deleteMany({});
    await PostModel.deleteMany({});
    await CommentModel.deleteMany({});
    await CategoryModel.deleteMany({});

    await UserModel.insertMany(users);
    await PostModel.insertMany(posts);
    await CommentModel.insertMany(comments);
    await CategoryModel.insertMany(categories);

    console.log("✅ DATA INSERTED SUCCESSFULLY.");
    console.log("🔁 NOW RUN: npm run dev");
    process.exit(0);
  } catch (err) {
    console.error("❌ DATA INSERTION FAILED:", err);
    process.exit(1);
  }
})();
