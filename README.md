# ⚙️ Tecventures API

Backend API for the **Tecventures** platform — built with **Express.js** and **MongoDB**.

---

## 🚀 Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB (Mongoose)
- **Auth:** JWT-based Authentication
- **Other:** CORS, dotenv, Morgan, etc.

---

## 📁 Folder Structure

```text
Tecventures-API/
├── controllers/         # Request handlers and business logic
├── models/              # Mongoose schemas and models
├── routes/              # API route definitions
├── middleware/          # Auth & error handling middleware
├── utils/               # Utility functions (e.g., token helpers)
├── config/              # DB config and environment setup
├── .env.example         # Example environment variables
├── server.js            # Entry point of the application
└── package.json         # Project metadata and dependencies
```

## 🛠 Getting Started

```bash
# Clone the repository
git clone https://github.com/r4inr3aper/Tecventures-API.git

cd Tecventures-API

# Install dependencies
npm install

# Create a .env file based on .env.example and fill in the required fields

# Start the server
npm run dev
```

The site will be available at http://localhost:3000.

## 📝 License

This project is open source and available under the MIT License.

