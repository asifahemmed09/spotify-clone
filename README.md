# 🎵 Spotify Clone - Full Stack Music Streaming Platform

<div align="center">

![Spotify Clone Banner](https://img.shields.io/badge/Spotify-Clone-1DB954?style=for-the-badge&logo=spotify&logoColor=white)

A feature-rich, full-stack music streaming application built with the MERN stack, featuring real-time chat, live activity tracking, and a comprehensive admin dashboard.

[![Live Demo](https://img.shields.io/badge/Live-Demo-success?style=for-the-badge&logo=vercel)](https://spotify-clone-zfvi.onrender.com/)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github)](https://github.com/asifahemmed09/spotify-clone)

[Features](#-features) • [Tech Stack](#-tech-stack) • [Installation](#-installation) • [Usage](#-usage) • [API Documentation](#-api-documentation) • [Contributing](#-contributing)

</div>

---

## ✨ Features

### 🎵 **Music Streaming**
- 🎧 High-quality audio playback
- 📝 Queue management with play next/previous
- 🔄 Seamless album and playlist playback
- ⏯️ Play/pause controls with progress tracking
- 🔊 Volume control

### 💬 **Real-Time Chat**
- 💭 Direct messaging between users
- ⚡ Instant message delivery using Socket.io
- 🟢 Online/offline status indicators
- 📱 Responsive chat interface

### 👥 **Social Features**
- 🎵 Live activity tracking - see what friends are listening to
- 👤 User profiles with avatars
- 🎼 Share music experiences

### 🎨 **User Interface**
- 🌙 Modern dark theme design
- 📱 Fully responsive layout (mobile, tablet, desktop)
- 🎨 Beautiful gradient backgrounds
- ⚡ Smooth animations and transitions
- 🖼️ Album artwork display

### 🛠️ **Admin Dashboard**
- ➕ Upload songs and albums
- 🗑️ Delete songs and albums
- 📊 View platform statistics
- 👥 User management
- 📈 Analytics dashboard

### 🔐 **Authentication**
- 🔑 Secure OAuth authentication via Clerk
- 🔒 Google Sign-In integration
- 👤 User session management
- 🛡️ Protected routes and API endpoints

---

## 🚀 Tech Stack

### **Frontend**
| Technology | Description |
|-----------|-------------|
| ![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black) | UI library for building interactive interfaces |
| ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white) | Type-safe JavaScript |
| ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white) | Fast build tool and dev server |
| ![TailwindCSS](https://img.shields.io/badge/Tailwind-06B6D4?style=flat&logo=tailwindcss&logoColor=white) | Utility-first CSS framework |
| ![Zustand](https://img.shields.io/badge/Zustand-000000?style=flat) | Lightweight state management |
| ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=flat&logo=reactrouter&logoColor=white) | Client-side routing |
| ![Socket.io](https://img.shields.io/badge/Socket.io-010101?style=flat&logo=socketdotio&logoColor=white) | Real-time bidirectional communication |
| ![Clerk](https://img.shields.io/badge/Clerk-6C47FF?style=flat) | Authentication and user management |
| ![shadcn/ui](https://img.shields.io/badge/shadcn/ui-000000?style=flat) | Re-usable component library |

### **Backend**
| Technology | Description |
|-----------|-------------|
| ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white) | JavaScript runtime |
| ![Express](https://img.shields.io/badge/Express-000000?style=flat&logo=express&logoColor=white) | Web application framework |
| ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white) | NoSQL database |
| ![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=flat) | MongoDB object modeling |
| ![Socket.io](https://img.shields.io/badge/Socket.io-010101?style=flat&logo=socketdotio&logoColor=white) | Real-time engine |
| ![Cloudinary](https://img.shields.io/badge/Cloudinary-3448C5?style=flat&logo=cloudinary&logoColor=white) | Media storage and optimization |
| ![Clerk](https://img.shields.io/badge/Clerk-6C47FF?style=flat) | Authentication middleware |


---

## 🛠️ Installation

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **MongoDB** (local or Atlas)
- **Git**

### Clone the Repository

```bash
git clone https://github.com/asifahemmed09/spotify-clone.git
cd spotify-clone
```

---

## ⚙️ Configuration

### 1. Backend Environment Variables

Create a `.env` file in the `backend` directory:

```env
# Server
PORT=8000
NODE_ENV=development

# Database
MONGODB_URI=your_mongodb_connection_string

# Cloudinary (for media storage)
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Clerk Authentication
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# Admin
ADMIN_EMAIL=your_admin_email@example.com
```

### 2. Frontend Environment Variables

Create a `.env` file in the `frontend` directory:

```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
```

---

## 🚀 Running the Application

### Development Mode

#### Option 1: Run Both Frontend and Backend Separately

**Terminal 1 - Backend:**
```bash
cd backend
npm install
npm run dev
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm install
npm run dev
```

#### Option 2: Run from Root (Recommended for Production)

```bash
# Install all dependencies
npm run build

# Start the application
npm start
```

The application will be available at:
- **Frontend:** `http://localhost:3000`
- **Backend:** `http://localhost:8000`

---

## 📊 Database Seeding (Optional)

To populate your database with sample data:

```bash
cd backend

# Seed songs
npm run seed:songs

# Seed albums
npm run seed:albums
```

---

## 🔑 Getting API Keys

### MongoDB Atlas
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free cluster
3. Get your connection string
4. Add it to `MONGODB_URI` in `.env`

### Cloudinary
1. Sign up at [Cloudinary](https://cloudinary.com/)
2. Get your Cloud Name, API Key, and API Secret from the dashboard
3. Add them to your `.env` file

### Clerk
1. Sign up at [Clerk](https://clerk.com/)
2. Create a new application
3. Get your Publishable Key and Secret Key
4. Enable Google OAuth in the Clerk dashboard
5. Add the keys to your `.env` files

---

## 📡 API Documentation

### Authentication
All protected routes require a valid Clerk session token in the `Authorization` header:
```
Authorization: Bearer <token>
```

### Endpoints

#### **Auth**
```http
POST /api/auth/callback
```
Syncs user data from Clerk to MongoDB.

#### **Songs**
```http
GET  /api/songs                    # Get all songs (Admin only)
GET  /api/songs/featured           # Get featured songs
GET  /api/songs/made-for-you       # Get personalized songs
GET  /api/songs/trending           # Get trending songs
```

#### **Albums**
```http
GET  /api/albums                   # Get all albums
GET  /api/albums/:albumId          # Get album by ID with songs
```

#### **Users**
```http
GET  /api/users                    # Get all users (except current user)
GET  /api/users/messages/:userId   # Get messages with a specific user
```

#### **Admin** (Protected - Admin only)
```http
GET    /api/admin/check            # Check admin status
POST   /api/admin/songs            # Upload a new song
DELETE /api/admin/songs/:id        # Delete a song
POST   /api/admin/albums           # Create a new album
DELETE /api/admin/albums/:id       # Delete an album
```

#### **Stats** (Protected - Admin only)
```http
GET  /api/stats                    # Get platform statistics
```

### Socket.io Events

#### **Client → Server**
- `user_connected` - User comes online
- `update_activity` - Update user's current activity
- `send_message` - Send a chat message

#### **Server → Client**
- `users_online` - List of online users
- `activities` - Map of user activities
- `user_connected` - User came online
- `user_disconnected` - User went offline
- `activity_updated` - User activity changed
- `receive_message` - New message received
- `message_sent` - Message sent confirmation

---

## 🎨 Features in Detail

### Music Player
- **Queue System:** Manages playback order of songs
- **Progress Bar:** Visual representation of playback progress
- **Volume Control:** Adjustable volume slider
- **Album View:** Display all songs in an album
- **Play Controls:** Play, pause, next, previous

### Chat System
- **Real-time Messaging:** Instant message delivery
- **Online Status:** See who's currently online
- **Message History:** Persistent chat history
- **User List:** Browse and select users to chat with

### Admin Dashboard
- **Statistics Cards:** Total songs, albums, users, artists
- **Song Management:** Upload with title, artist, audio file, image
- **Album Management:** Create albums and associate songs
- **Delete Operations:** Remove songs or albums

### Activity Feed
- **Live Updates:** Real-time activity from all users
- **Current Song Display:** Shows what each user is listening to
- **Online Indicators:** Green dot for online users

---

## 🔒 Security Features

- ✅ Authentication via Clerk (OAuth 2.0)
- ✅ Protected API routes with middleware
- ✅ Admin authorization checks
- ✅ Secure file uploads to Cloudinary
- ✅ Environment variable configuration
- ✅ CORS configuration
- ✅ Input validation

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the ISC License.

---

## 👨‍💻 Author

**Your Name**
- GitHub: [@YOUR_GITHUB_USERNAME](https://github.com/asifahemmed09)
- LinkedIn: [Your LinkedIn](https://www.linkedin.com/in/asif-ahemmed-2a8760393/)
- Email: asifahemmed.dev@gmail.com

---

## 🙏 Acknowledgments

- [Spotify](https://spotify.com) for design inspiration
- [Clerk](https://clerk.com) for authentication
- [Cloudinary](https://cloudinary.com) for media storage
- [MongoDB](https://mongodb.com) for database
- [shadcn/ui](https://ui.shadcn.com) for UI components

---

## 📞 Support

If you have any questions or need help with setup, please open an issue or contact me directly.

---

<div align="center">

### ⭐ Star this repository if you found it helpful!

</div>
