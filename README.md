# 📦 SubTrack – Backend API

Backend service for **SubTrack**, a subscription management application that helps users track subscriptions, spending, and renewal dates with analytics.

Built using **Node.js, Express, MongoDB**, and **JWT authentication**.

---

[Frontend](https://github.com/Proo2005/subs_front)  
[Vercel](https://subs-front.vercel.app/)  
[Render](https://subs-back.onrender.com)

## 🚀 Features

- User authentication (Register / Login)
- JWT-based protected routes
- Subscription CRUD operations
- Renewal date tracking
- Analytics-ready data (monthly spend, trends)
- Secure API with CORS & environment configs

---

## 🛠 Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB + Mongoose**
- **JWT (Authentication)**
- **bcrypt (Password hashing)**
- **CORS**
- **dotenv**

---


---

## 🔐 Environment Variables

Create a `.env` file in the root directory:

```bash
MONGO_URI=your_mongo_url
JWT_SECRET=your_jwt_token
PORT=500
```

## Clone the repository

```bash
git clone https://github.com/your-username/subtrack-backend.git
cd subtrack-backend
```

## Install dependencies

```bash
npm install
```

## Run the server

```bash
npm run dev

```