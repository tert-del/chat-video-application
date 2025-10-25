# Chat Video Application

A modern, real-time chat application built with React, Node.js, and Socket.io. Features include user authentication, real-time messaging, image sharing, online status indicators, and a beautiful responsive UI with dark/light theme support.

## 🚀 Features

### Core Functionality
- **Real-time Messaging**: Instant message delivery using Socket.io
- **User Authentication**: Secure signup/login with JWT tokens
- **Image Sharing**: Upload and share images in conversations
- **Online Status**: See who's online with real-time indicators
- **Profile Management**: Update profile pictures and view account information

### UI/UX Features
- **Responsive Design**: Works seamlessly on desktop and mobile
- **Dark/Light Theme**: Toggle between themes with persistent storage
- **Modern UI**: Beautiful gradient designs and smooth animations
- **Loading States**: Skeleton loaders and smooth transitions
- **Toast Notifications**: User-friendly feedback messages

### Technical Features
- **State Management**: Zustand for efficient state management
- **Real-time Updates**: Socket.io for live communication
- **Image Upload**: Cloudinary integration for image storage
- **Database**: MongoDB with Mongoose ODM
- **Security**: JWT authentication with protected routes

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling framework
- **Zustand** - State management
- **Socket.io Client** - Real-time communication
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client
- **Lucide React** - Icon library
- **React Hot Toast** - Notifications
- **Day.js** - Date manipulation

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **Socket.io** - Real-time communication
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication
- **Bcryptjs** - Password hashing
- **Cloudinary** - Image storage
- **CORS** - Cross-origin resource sharing
- **Cookie Parser** - Cookie handling

## 📁 Project Structure

```
chat-video-application/
├── backend/
│   ├── src/
│   │   ├── controllers/          # Request handlers
│   │   │   ├── auth.controller.js
│   │   │   └── message.controller.js
│   │   ├── lib/                  # Utility libraries
│   │   │   ├── cloudinary.js
│   │   │   ├── db.js
│   │   │   ├── socket.js
│   │   │   └── utils.js
│   │   ├── middleware/           # Custom middleware
│   │   │   └── auth.middleware.js
│   │   ├── models/               # Database models
│   │   │   ├── message.model.js
│   │   │   └── user.model.js
│   │   ├── routes/               # API routes
│   │   │   ├── auth.route.js
│   │   │   └── message.route.js
│   │   ├── seeds/                # Database seeds
│   │   │   └── user.seed.js
│   │   └── index.js              # Server entry point
│   ├── package.json
│   └── package-lock.json
├── frontend/
│   ├── src/
│   │   ├── components/           # React components
│   │   │   ├── ChatContainer.jsx
│   │   │   ├── ChatHeader.jsx
│   │   │   ├── MessageInput.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── NoChatSelected.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   └── skeletons/        # Loading components
│   │   ├── pages/                # Page components
│   │   │   ├── HomePage.jsx
│   │   │   ├── LoginPage.jsx
│   │   │   ├── ProfilePage.jsx
│   │   │   └── SignUpPage.jsx
│   │   ├── store/                # State management
│   │   │   ├── useAuthStore.js
│   │   │   ├── useChatStore.js
│   │   │   └── useThemeStore.js
│   │   ├── lib/                  # Utility functions
│   │   │   ├── axios.js
│   │   │   └── utils.js
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── public/                   # Static assets
│   ├── package.json
│   └── vite.config.js
├── package.json                  # Root package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud instance)
- Cloudinary account (for image storage)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/tert-del/chat-video-application.git
   cd chat-video-application
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   
   Create a `.env` file in the `backend` directory:
   ```env
   PORT=5001
   MONGODB_URI=mongodb://localhost:27017/chat-app
   JWT_SECRET=your-jwt-secret-key
   CLOUDINARY_CLOUD_NAME=your-cloudinary-cloud-name
   CLOUDINARY_API_KEY=your-cloudinary-api-key
   CLOUDINARY_API_SECRET=your-cloudinary-api-secret
   NODE_ENV=development
   ```

4. **Start the development servers**

   **Option 1: Start both servers simultaneously**
   ```bash
   npm run dev
   ```

   **Option 2: Start servers individually**
   
   Backend (Terminal 1):
   ```bash
   cd backend
   npm run dev
   ```
   
   Frontend (Terminal 2):
   ```bash
   cd frontend
   npm run dev
   ```

5. **Access the application**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:5001

## 📱 Usage

### Authentication
1. **Sign Up**: Create a new account with email and password
2. **Login**: Sign in with your credentials
3. **Profile**: Update your profile picture and view account information

### Chat Features
1. **Start Chatting**: Select a user from the sidebar to start a conversation
2. **Send Messages**: Type text messages and press Enter or click Send
3. **Share Images**: Click the image icon to upload and share images
4. **Online Status**: See which users are currently online
5. **Filter Users**: Toggle "Show online only" to filter online users

### UI Features
1. **Theme Toggle**: Switch between light and dark themes
2. **Responsive Design**: Works on desktop, tablet, and mobile devices
3. **Real-time Updates**: Messages appear instantly without page refresh

## 🔧 API Endpoints

### Authentication Routes (`/app/api/auth`)
- `POST /signup` - Create new user account
- `POST /login` - User login
- `POST /logout` - User logout
- `GET /check` - Check authentication status
- `PUT /update-profile` - Update user profile

### Message Routes (`/app/api/messages`)
- `GET /users` - Get all users for sidebar
- `GET /:id` - Get messages with specific user
- `POST /send/:id` - Send message to specific user

## 🗄️ Database Schema

### User Model
```javascript
{
  email: String (required, unique),
  fullName: String (required),
  password: String (required, minlength: 6),
  profilePic: String (default: ""),
  createdAt: Date,
  updatedAt: Date
}
```

### Message Model
```javascript
{
  senderId: ObjectId (ref: User),
  receiverId: ObjectId (ref: User),
  text: String,
  image: String,
  createdAt: Date,
  updatedAt: Date
}
```

## 🔒 Security Features

- **JWT Authentication**: Secure token-based authentication
- **Password Hashing**: Bcrypt for secure password storage
- **Protected Routes**: Middleware to protect sensitive endpoints
- **CORS Configuration**: Proper cross-origin resource sharing setup
- **Input Validation**: Server-side validation for all inputs

## 🎨 Styling & UI

- **Tailwind CSS**: Utility-first CSS framework
- **Custom Components**: Reusable React components
- **Responsive Design**: Mobile-first approach
- **Dark Mode**: Complete dark/light theme support
- **Animations**: Smooth transitions and hover effects
- **Loading States**: Skeleton loaders for better UX

## 🚀 Deployment

### Production Build
```bash
npm run build
```

### Environment Variables for Production
- Set `NODE_ENV=production`
- Configure production MongoDB URI
- Set up production Cloudinary credentials
- Configure CORS for production domain

### Deployment Options
- **Frontend**: Vercel, Netlify, or any static hosting
- **Backend**: Heroku, Railway, DigitalOcean, or AWS
- **Database**: MongoDB Atlas or self-hosted MongoDB

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 🐛 Troubleshooting

### Common Issues

1. **MongoDB Connection Error**
   - Ensure MongoDB is running
   - Check the connection string in `.env`

2. **Socket.io Connection Issues**
   - Verify CORS configuration
   - Check if both frontend and backend are running

3. **Image Upload Issues**
   - Verify Cloudinary credentials
   - Check file size limits

4. **Authentication Problems**
   - Clear browser cookies
   - Check JWT secret configuration

## 📞 Support

For support and questions, please open an issue in the repository or contact the development team.

---

**Built with ❤️ using React, Node.js, and Socket.io**
