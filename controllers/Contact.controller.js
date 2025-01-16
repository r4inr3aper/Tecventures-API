import { Contact } from "../models/Contact.model.js";

const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

export const addContact = async (req, res) => {
    const { first_name, last_name, email, message } = req.body;

    const errors = [];
    if (!first_name) errors.push({ field: "first_name", message: "First name is required" });
    if (!last_name) errors.push({ field: "last_name", message: "Last name is required" });
    if (!email || !isValidEmail(email)) errors.push({ field: "email", message: "Valid email is required" });
    if (!message) errors.push({ field: "message", message: "Message is required" });

    if (errors.length > 0) {
        return res.status(400).json({ errors });
    }

    try {
        const newContact = new Contact({ first_name, last_name, email, message });
        const savedContact = await newContact.save();
        res.status(201).json(savedContact);
    } catch (error) {
        res.status(500).json({ message: "Error saving contact message", error: error.message });
    }
};

export const fetchAllContact = async (req, res) => {
    try {
        const messages = await Contact.find();
        res.status(200).json(messages);
    } catch (error) {
        res.status(500).json({ message: "Error fetching contact messages", error: error.message });
    }
};
