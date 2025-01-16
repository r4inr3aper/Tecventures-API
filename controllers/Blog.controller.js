import { Blog } from "../models/Blog.model.js";

const isValidURL = (url) => {
    const urlRegex = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-]*)*\/?$/;
    return urlRegex.test(url);
};

const isValidISODate = (date) => {
    return !isNaN(Date.parse(date)) && new Date(date).toISOString() === date;
};

export const addBlog = async (req, res) => {
    const { title, author, url, imageUrl, date, min, content } = req.body;

    const errors = [];
    if (!title) errors.push({ field: "title", message: "Title is required" });
    if (!author) errors.push({ field: "author", message: "Author is required" });
    if (!url || !isValidURL(url)) errors.push({ field: "url", message: "Valid URL is required" });
    if (!imageUrl) errors.push({ field: "imageUrl", message: "Valid Image URL is required" });
    if (!date || !isValidISODate(date)) errors.push({ field: "date", message: "Valid ISO date is required" });
    if (!min || min <= 0) errors.push({ field: "min", message: "Minutes to read must be greater than 0" });
    if (!content) errors.push({ field: "content", message: "Content is required" });

    if (errors.length > 0) {
        return res.status(400).json({ errors });
    }

    try {
        const newBlog = new Blog({ title, author, url, imageUrl, date, min, content });
        const savedBlog = await newBlog.save();
        res.status(201).json(savedBlog);
    } catch (error) {
        res.status(500).json({ message: "Error adding blog", error: error.message });
    }
};

export const fetchAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.status(200).json(blogs);
    } catch (error) {
        res.status(500).json({ message: "Error fetching blogs", error: error.message });
    }
};

export const fetchBlogById = async (req, res) => {
    const { id } = req.params;
    try {
        const blog = await Blog.findById(id);
        if (!blog) {
            return res.status(404).json({ message: "Blog not found" });
        }
        res.status(200).json(blog);
    } catch (error) {
        res.status(500).json({ message: "Error fetching blog", error: error.message });
    }
};
