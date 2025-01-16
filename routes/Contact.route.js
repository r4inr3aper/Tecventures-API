import express from "express";
import { addContact, fetchAllContact } from "../controllers/Contact.controller.js";

const contactRouter = express.Router();

contactRouter.post("/add", addContact);
contactRouter.get("/", fetchAllContact);

export default contactRouter;
