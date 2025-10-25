```markdown
# 💬 Chat Video Application

A real-time chat (and lightweight video-capable) application built with React + Vite on the frontend and Node.js + Express on the backend. Real-time messaging and presence are powered by Socket.IO; authentication uses JWT; images are uploaded to Cloudinary; the database is MongoDB. The project ships a theme switcher, responsive UI, and a compact global state using Zustand.

This file is a proposed, corrected and expanded README to replace the previous README in the repository.

---

## 🚀 Key features

- Real-time messaging with Socket.IO (presence, typing, online users)
- JWT authentication with secure password hashing (bcrypt)
- Private and group chats
- Image uploads (Cloudinary)
- Theme switcher (DaisyUI/Tailwind) — multiple themes
- Global state with Zustand
- Human-friendly timestamps (Day.js)
- Responsive UI for mobile and desktop

---

## 🛠 Tech stack

- Frontend: React, Vite, Tailwind CSS, DaisyUI
- Backend: Node.js, Express
- Real-time: Socket.IO
- Database: MongoDB (Atlas or self-hosted)
- Auth: JWT, bcrypt
- Media: Cloudinary
- State management: Zustand
- Date handling: Day.js

---

## 📸 Screenshots

(Existing screenshots referenced in the repo)
- Signup / Login:
  - https://res.cloudinary.com/dxgzgmmnp/image/upload/v1745260929/jjlfbtcxwmhkqn1pbtib.png
  - https://res.cloudinary.com/dxgzgmmnp/image/upload/v1745260943/uqmbevd3oak38wwia4zs.png
- Chat UI:
  - https://res.cloudinary.com/dxgzgmmnp/image/upload/v1745260917/jkumoppkl6w1p7uokqc0.png
- Theme selection:
  - https://res.cloudinary.com/dxgzgmmnp/image/upload/v1745260960/loz3iev66zlb0sb9jafz.png

---

## 📁 Repository structure (what's in this repo)

Top-level layout and where to find things:

chat-video-application/
├── backend/                      # Backend server (Express + Socket.IO)
│   ├── package.json
│   └── src/
│       ├── controllers/
│       │   ├── auth.controller.js
│       │   └── message.controller.js
│       ├── lib/
│       │   ├── cloudinary.js
│       │   ├── db.js
│       │   ├── socket.js
│       │   └── utils.js
│       ├── middleware/
│       │   └── auth.middleware.js
│       ├── models/
│       │   ├── message.model.js
│       │   └── user.model.js
│       ├── routes/
│       │   ├── auth.route.js
│       │   └── message.route.js
│       ├── seeds/
│       │   └── user.seed.js
│       └── index.js
├── frontend/                     # Frontend app (React + Vite)
│   ├── package.json
│   ├── public/
│   │   ├── avatar.png
│   │   ├── logo-1.svg
│   │   ├── logo.svg
│   │   └── vite.svg
│   └── src/
│       ├── components/
│       │   ├── ChatContainer.jsx
│       │   ├── ChatHeader.jsx
│       │   ├── MessageInput.jsx
│       │   ├── Navbar.jsx
│       │   ├── NoChatSelected.jsx
│       │   ├── Sidebar.jsx
│       │   └── skeletons/
│       │       ├── MessageSkeleton.jsx
│       │       └── SidebarSkeleton.jsx
│       ├── constants/
│       ├── lib/
│       │   ├── axios.js
│       │   └── utils.js
│       ├── pages/
│       │   ├── HomePage.jsx
│       │   ├── LoginPage.jsx
│       │   ├── ProfilePage.jsx
│       │   └── SignUpPage.jsx
│       ├── store/
│       │   ├── useAuthStore.js
│       │   ├── useChatStore.js
│       │   └── useThemeStore.js
│       ├── App.jsx
│       ├── main.jsx
│       └── index.css
├── .gitignore
├── README.md                     # <- this file
└── package.json                  # (optional root scripts / meta)

Note: The frontend also contains its own README at frontend/README.md with Vite notes.

---

## ⚙️ Environment variables

Create a .env file in the backend folder (backend/.env) with values similar to:

MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/chat_db?retryWrites=true&w=majority
PORT=5001
JWT_SECRET=your_super_secret_jwt_key

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

(Optional)
FRONTEND_URL=http://localhost:5173
CORS_ORIGINS=http://localhost:5173

Keep secrets out of source control. Use deployment platform secret management in production.

---

## 🔧 Local development (step-by-step)

1. Clone the repository
```bash
git clone https://github.com/tert-del/chat-video-application.git
cd chat-video-application
```

2. Backend (run the API + socket server)
```bash
cd backend
npm install
# Development (watch mode) if available:
npm run dev
# or to run normally:
npm start
```

3. Frontend (run the UI)
```bash
cd frontend
npm install
npm run dev
```

- Typical ports: Vite frontend http://localhost:5173, backend http://localhost:5001
- If ports differ, update FRONTEND_URL or axios baseURL in frontend/src/lib/axios.js.

---

## 🧭 Production build & deployment

Frontend:
```bash
cd frontend
npm run build
# deploy the contents of frontend/dist to your static host (Netlify, Vercel, S3, etc.)
```

Backend:
- Ensure backend environment variables are set in your hosting environment.
- Start the backend with `npm start` or use a process manager (PM2) or containerize with Docker.

Optional: Serve the frontend build from the backend by copying frontend/dist into backend/public (or similar) and configuring Express static hosting.

---

## 🔌 API (high-level)

These are representative endpoints — check backend/src/routes for exact paths and request/response shapes:

- POST /api/auth/signup — register new user
- POST /api/auth/login — log in and receive JWT
- GET /api/messages/:conversationId — fetch messages for a conversation
- POST /api/messages — create a message (text and/or image url)

Real-time flows use Socket.IO events (connect, disconnect, send_message, receive_message, user_online, user_offline). Review backend/src/lib/socket.js and frontend socket usage for specifics.

---

## ☁️ Cloudinary

- The backend uses Cloudinary for image uploads. Ensure CLOUDINARY_* env vars are set and backend/lib/cloudinary.js initializes with them.
- Frontend uploads should POST to a backend endpoint that handles the Cloudinary upload (avoid embedding Cloudinary keys in client code).

---

## 🧪 Seeding and sample data

- A seed script exists at backend/src/seeds/user.seed.js — run it manually or wire it into an npm script to populate sample users for testing.

---

## ❗ Troubleshooting

- MongoDB connection errors: check MONGODB_URI, username/password, and Atlas IP whitelist (or use SRV and open access for dev).
- JWT auth issues: confirm JWT_SECRET is set and both frontend and backend use the same auth flows.
- Cloudinary errors: verify cloud name and API key/secret.
- Socket.IO connection issues: confirm correct socket path, CORS, and that frontend points to the correct backend socket URL.
- Port conflicts: adjust PORT in backend/.env or Vite dev server port in frontend/vite.config.js.

---

## ✅ Contributing

Contributions welcome — please:
1. Open an issue describing the change if it's non-trivial.
2. Create a branch for your PR: feature/..., fix/..., etc.
3. Add tests or steps to reproduce your fix if applicable.
4. Follow consistent code style (prettier / eslint if configured).

---

## 📜 License

Add a LICENSE file to the repository and reference it here (e.g., MIT). If you want me to add a LICENSE file, tell me which license to use.

---

## 📫 Maintainer / Contact

Maintainer: tert-del — https://github.com/tert-del

---

## Notes & next steps

- This README corrects the project name, clone URL, and folder naming (previous README referenced another repo/name).
- If you want, I can:
  - produce a ready-to-commit patch that replaces README.md
  - add a LICENSE file
  - add or update backend/frontend npm scripts in package.json if needed
  - update frontend README to include auth / running info
Please tell me which of the above you'd like me to prepare next.
```
```
