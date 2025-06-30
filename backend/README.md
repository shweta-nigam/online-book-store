# 📚 Online book store (ReadGala) – Backend

Welcome to **ReadGala**, an online bookstore backend built with Node.js, Express, and prisma.  
This project handles the core REST API logic for managing books, users, orders, and reviews.

> ⚠️ This README is only for the backend.  
> The frontend (if any) is located in the `frontend/` folder and is for personal learning.

## features 
user auth (with api key generation(for only admin))
CRUD operation for book
Order creation and tracking
Book review and rating 

##  Tech Stack

- Node.js + Express
- Prisma ORM
- bcryptjs (password hashing)
- jsonwebtoken
- dotenv
- nodemailer
- cors
- cookie-parser

##  Getting Started

Follow these steps to run the backend locally.

### 1️⃣ Clone the repository
git clone https://github.com/shweta-nigam/online-book-store.git
cd backend

### 2️⃣ Install dependencies
npm install

### 3️⃣ Setup .env
Copy the .env.example → .env and add your real credentials.

### 4️⃣ Run database migrations
npx prisma migrate dev

### 5️⃣ Start server

For development:
npm run dev

For production:
npm start

Server runs on: http://localhost:5000

## Postman Collection
To test the API easily, import our Postman collection:

ReadGala.postman_collection.json

In Postman:

Go to File → Import
Select the JSON file
Use the saved requests to test your API endpoints 




