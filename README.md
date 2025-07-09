# BuzzChat-Real-Time-Chat-Application
A full-stack real-time chat application built with React.js, Node.js, Express, and Socket.io that enables users to join rooms and communicate in real-time.

# ✨ Features

- Real-time messaging - Instant message delivery using WebSocket connections
- Room-based chat - Users can join specific chat rooms
- Online user tracking - See who's currently active in each room
- User-friendly interface - Clean, responsive design with modern UI
- Cross-platform compatibility - Works on desktop and mobile browsers
- Message persistence - Messages remain visible during the session
- Join/leave notifications - Users are notified when someone joins or leaves

# 🛠️ Tech Stack

#Frontend

- React.js - Component-based UI library
- Socket.io-client - Real-time bidirectional communication
- CSS3 - Styling and responsive design
- Query-string - URL parameter parsing

# Backend

- Node.js - JavaScript runtime
- Express.js - Web framework
- Socket.io - Real-time communication
- CORS - Cross-origin resource sharing
- Nodemon - Development server with auto-restart

# 🎮 How to Use

- Access the application at http://localhost:3000
- Enter your name and choose a room name
- Start chatting with other users in the same room
- View online users in the sidebar
- Send messages by typing and clicking Send or pressing Enter
  
# 🏗️ Project Structure

chat-application/  
├── client/  
│   ├── src/  
│   │   ├── components/  
│   │   │   ├── Chat/  
│   │   │   ├── Input/  
│   │   │   ├── Messages/  
│   │   │   ├── TextContainer/  
│   │   │   └── InfoBar/  
│   │   ├── App.js  
│   │   └── index.js  
│   ├── public/  
│   └── package.json  
├── server/  
│   ├── index.js  
│   ├── router.js  
│   ├── users.js  
│   └── package.json  
└── README.md  



