# 🎵 Moody Player

Moodio is a **full-stack music player app** that detects a user’s **facial expression in real-time** and recommends songs based on their mood.  

It combines **AI-powered emotion detection** with a **custom-built music player**, letting users experience music that matches how they feel.  

---

## ✨ Features
- 🎭 **Facial Expression Detection** using `face-api.js`
- 🎶 **Mood-based Song Recommendations** (happy, sad, neutral, surprised, etc.)
- ▶️ **Custom Music Player** with Play/Pause (one active track at a time)
- ☁️ **Audio Upload & Storage** using ImageKit CDN
- 📱 **Responsive UI** with modern design
- ⚡ Built with **React (frontend)** and **Express + MongoDB (backend)**

---

## 🛠️ Tech Stack

### Frontend
- React.js (Vite)
- face-api.js (facial expression recognition)
- Axios
- CSS (responsive, modern)

### Backend
- Node.js
- Express.js
- MongoDB
- Multer (file upload handling)
- ImageKit (cloud audio storage)

---

## 📂 Folder Structure
```
Moodio/
│── frontend/           # React app
│   ├── src/
│   │   ├── components/
│   │   │   ├── FacialExpression.jsx
│   │   │   ├── FacialExpression.css
│   │   │   ├── MoodySongs.jsx
│   │   │   ├── MoodySongs.css
│   │   │   ├── Loader.jsx
│   │   ├── App.jsx
│   │   ├── App.css
│   ├── public/
│   │   └── models/     # face-api.js models
│   └── .env
│
│── backend/
│   ├── server.js
│   ├── src/
│   │   ├── app.js
│   │   ├── db/db.js
│   │   ├── model/songs.model.js
│   │   ├── routes/song.routes.js
│   │   ├── service/storage.service.js
│   └── .env
│
└── README.md
```

---

## ⚡ Getting Started

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/moody-player.git
cd moodio
```

### 2️⃣ Install dependencies

Frontend:
```bash
cd frontend
npm install
```

Backend:
```bash
cd backend
npm install
```

### 3️⃣ Setup environment variables

Create `.env` file inside **backend/**:
```env
PORT=3000
MONGO_URI=your_mongodb_uri
IMAGEKIT_PUBLIC_KEY=your_public_key
IMAGEKIT_PRIVATE_KEY=your_private_key
IMAGEKIT_URL_ENDPOINT=your_url_endpoint
```

### 4️⃣ Add FaceAPI models

Download models (`tiny_face_detector`, `face_expression_model`) and place them inside:
```
frontend/public/models/
```

### 5️⃣ Run the app

Start backend:
```bash
cd backend
npm run dev
```

Start frontend:
```bash
cd frontend
npm run dev
```

Frontend runs on 👉 [http://localhost:5173](http://localhost:5173)  
Backend runs on 👉 [http://localhost:3000](http://localhost:3000)  

---

## 🚀 Future Improvements
- ⏱️ Real-time automatic mood detection (continuous tracking)
- 🎚️ Add progress bar + seek controls in player
- 🎧 Integrate **Spotify API** for dynamic playlists
- 👤 Add user accounts + favorites
- 🌐 Deploy on **Vercel (frontend)** + **Render/Heroku (backend)**

---

## 🤝 Contributing
Pull requests are welcome!  
For major changes, please open an issue first to discuss what you’d like to improve.  

---

## 📜 License
This project is licensed under the [MIT License](LICENSE).  

---

## 👨‍💻 Author
Built with ❤️ by **Piyush Raj**
