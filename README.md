# 🛒 E-Commerce Platform (Node.js + Express + MongoDB)

This is a **basic E-Commerce Platform** built using **Node.js, Express, MongoDB, and EJS**, following the **MVC architecture**.

---

## 🌐 Live Project URL

🔗 https://nodejs-exam-er7b.onrender.com

---

## 🚀 Features

- User Authentication (Login / Signup)
- Role-Based Access (Admin / User)
- Product Management
- Category Management
- Image Upload
- JWT Authentication
- MVC Architecture

---

## 🏗 Project Structure

```

├── config
│ └── db.js
│
├── controllers
│ ├── category.controller.js
│ ├── product.controller.js
│ └── user.controller.js
│
├── middlewares
│ ├── imageUpload.js
│ ├── isAuth.js
│ └── userRole.js
│
├── models
│ ├── category.model.js
│ ├── product.model.js
│ └── user.model.js
│
├── routes
│ ├── category.route.js
│ ├── product.route.js
│ └── user.route.js
│
├── views
│ ├── pages
│ │ ├── add-category.ejs
│ │ ├── add-product.ejs
│ │ ├── edit-category.ejs
│ │ ├── edit-product.ejs
│ │ ├── login.ejs
│ │ ├── signup.ejs
│ │ └── view-category.ejs
│ │
│ └── partials
│ ├── footer.ejs
│ ├── header.ejs
│ └── index.ejs
│
├── uploads
│ └── (uploaded product images)
│
├── public
│ └── assets
│
├── .env
├── .env.example
├── index.js
├── package.json
└── README.md

```

---

## 🔐 Default Admin Credentials

Email: admin@gmail.com  
Password: 1234

⚠️ Change credentials in production.

---

## ⚙️ Environment Variables

Create a `.env` file:

PORT=3000  
MONGO_URI=your_mongodb_connection_string  
JWT_SECRET=your_secret_key

---

## ▶️ How to Run

1. npm install
2. npm start
3. Open: http://localhost:3000

---

## 🧪 Tech Stack

- Node.js
- Express
- MongoDB
- EJS
- JWT

---

## 📌 Author

Devanshi Parekh