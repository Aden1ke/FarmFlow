# 🚜 FarmFlow

A farm-themed Kanban task management app built with React and Firebase. FarmFlow helps farmers and agricultural teams track tasks across plots, crops, and growing seasons — with real-time sync, drag-and-drop boards, and a calendar view for due dates.

---

## 🌱 Project Overview

FarmFlow is a project built to master React fundamentals, Firebase backend integration, and production-quality UI/UX. It is adapted from the TaskNest project template with a focus on agricultural workflows.

**Stack:** React, Firebase Firestore, Firebase Auth, dnd-kit, Vite

---

## ✨ Features

- **Kanban board** — drag and drop tasks between columns (To Do, In Progress, Done)
- **Multiple boards** — one board per plot or crop (e.g. Maize Plot, Tomato Greenhouse)
- **Farm task cards** — each card includes crop type, due date, and urgency tag
- **Color tagging** — green for healthy, red for overdue, amber for at-risk
- **Calendar view** — see all tasks plotted against their due dates
- **User authentication** — each farmer sees only their own boards
- **Real-time sync** — changes appear instantly via Firebase Firestore
- **Full CRUD** — create, read, update, and delete tasks and boards

---

## 🗂️ Project Structure

```
FarmFlow/
├── public/
├── src/
│   ├── components/
│   │   ├── Board.jsx         # Main board — holds all columns
│   │   ├── Column.jsx        # Single column with task list
│   │   └── TaskCard.jsx      # Individual task card
│   ├── pages/
│   │   ├── Login.jsx         # Firebase Auth login page
│   │   └── Dashboard.jsx     # All boards for a user
│   ├── firebase/
│   │   └── config.js         # Firebase project config
│   ├── App.jsx
│   └── main.jsx
├── .env                      # Firebase keys (never commit this)
├── .gitignore
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js v18+
- A Firebase project (free Spark plan is enough)

### Installation

```bash
# Clone the repo
git clone https://github.com/yourusername/farmflow.git
cd farmflow

# Install dependencies
npm install

# Start the dev server
npm run dev
```

### Firebase Setup

1. Go to [firebase.google.com](https://firebase.google.com) and create a project
2. Enable **Firestore Database** and **Authentication** (Email/Password)
3. Copy your Firebase config into a `.env` file:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

---

## 🗃️ Firestore Schema

```
users/
  {userId}/
    boards/
      {boardId}/
        name: "Maize Plot"
        createdAt: timestamp
        tasks/
          {taskId}/
            title: "Water seedlings"
            column: "In Progress"
            cropType: "Maize"
            dueDate: timestamp
            urgency: "healthy" | "at-risk" | "overdue"
            createdAt: timestamp
```

---

## 📦 Dependencies

| Package             | Purpose                   |
| ------------------- | ------------------------- |
| `react`             | UI framework              |
| `vite`              | Build tool and dev server |
| `firebase`          | Firestore + Auth backend  |
| `@dnd-kit/core`     | Drag and drop engine      |
| `@dnd-kit/sortable` | Sortable list utilities   |

---

## 🌍 Deployment

This app is deployed on **Vercel**.

```bash
npm run build
# Then push to GitHub and connect repo to Vercel
```

Make sure to add your `.env` variables in the Vercel project settings under Environment Variables.

---

## 📄 License

MIT — free to use and adapt.
