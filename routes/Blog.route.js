import express from "express";
import { addBlog, fetchAllBlogs, fetchBlogById } from "../controllers/Blog.controller.js";

const router = express.Router();

router.post("/add", addBlog);
router.get("/", fetchAllBlogs);
router.get("/:id", fetchBlogById);

export default router;
