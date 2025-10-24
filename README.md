# 💬 Chat Application

A fun real-time chat app with JWT authentication, 32 stunning themes, media uploads via Cloudinary, and smooth UX powered by modern React tools like Zustand, Lucide, and Day.js.

---

## 🚀 Features

- ⚡ **Real-Time Chat** – Using Socket.IO for instant messaging
- 🔐 **JWT Auth** – Signup/login with secure password hashing (bcrypt)
- 🟢 **Online Users Sidebar** – See who’s currently active
- 🧑‍🤝‍🧑 **Private & Group Chats** – Message 1-on-1 with users
- 🖼️ **Image Uploads** – Upload and display images with Cloudinary
- 🎨 **32 Themes** – Customize the look with a built-in theme switcher
- 🪄 **Hot Toasts** – React Hot Toast for snappy feedback
- 🧠 **Zustand for State** – Clean and lightweight global state management
- ⏰ **Day.js** – Display readable timestamps
- 📱 **Responsive UI** – Looks and feels great on all devices

---

## 🖼️ Screenshots

### 🔐 Signup/Login Page

![Signup Screenshot](https://res.cloudinary.com/dxgzgmmnp/image/upload/v1745260929/jjlfbtcxwmhkqn1pbtib.png)
![Login Screenshot](https://res.cloudinary.com/dxgzgmmnp/image/upload/v1745260943/uqmbevd3oak38wwia4zs.png)

&nbsp;

### 💬 Chat Interface

![Chat Screenshot](https://res.cloudinary.com/dxgzgmmnp/image/upload/v1745260917/jkumoppkl6w1p7uokqc0.png)

&nbsp;

### 🎨 Theme Selection (32 options!)

![Themes Screenshot](https://res.cloudinary.com/dxgzgmmnp/image/upload/v1745260960/loz3iev66zlb0sb9jafz.png)

&nbsp;

---

## 🛠️ Tech Stack

| Layer          | Technology                    |
| -------------- | ----------------------------- |
| Frontend       | React, Tailwind CSS, DaisyUI  |
| UI/UX          | Lucide React, React Hot Toast |
| State Mgmt     | Zustand                       |
| Time Display   | Day.js                        |
| Backend        | Node.js, Express.js           |
| Auth/Security  | JWT, bcrypt                   |
| Real-time Chat | Socket.IO                     |
| Image Hosting  | Cloudinary                    |
| Database       | MongoDB                       |

---

## ⚙️ Settings Page – Personalize Your Vibe

Switch between **32 stunning themes** right from the Settings page – all built with DaisyUI.

Themes include:

- ☀️ Light
- 🌙 Dark
- 🐉 Fantasy
- 🧊 Cyberpunk
- 🍁 Autumn
- 🐼 Black/White  
  ...and many more!

All changes apply live!

---

## 📁 Folder Structure

<pre>
chat-application/
├── backend/
|   └── src/
│       ├── controllers/
│       ├── lib/
│       ├── middleware/
│       ├── models/
│       |── routes/
│       |── routes/
|       ├── .env
│       └── index.js
|
├── frontend/
│   ├── public/
│   └── src/
│       ├── components/
│       ├── costants/
│       ├── lib/
│       ├── pages/
│       ├── store/
│       └── App.jsx
├── README.md
└── package.json

</pre>

⚙️Setup .env file

<pre>
MONGODB_URI=mongodb+srv://your_username:your_password@cluster0.ggok6.mongodb.net/chat_db?retryWrites=true&w=majority&appName=Cluster0
PORT=5001
JWT_SECRET=your_super_secret_jwt_key

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
</pre>

### 🔧 Setup Instructions

1. Clone the Repository

   ```shell
   git clone https://github.com/tezivindh/chat-application.git
   cd chat-application
   ```

2. Build the app

   ```shell
   npm run build
   ```

3. Start the app

   ```shell
   npm start
   ```

🤝 Contributing

<p>
Pull requests are welcome! If you’d like to fix a bug or suggest a feature, feel free to fork and submit a PR 🚀</p>
"# chat-video-application" 
