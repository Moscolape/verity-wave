# VerityWave – AI Image & Video Detection Dashboard

An AI-powered media detection dashboard built with **React**, **TypeScript**, and **Tailwind CSS**.  
This application allows users to upload images or videos and receive a simulated AI detection score with structured UI feedback (loading, success, and error states).

---

## 🚀 Live Demo

> 
https://verity-wave.netlify.app

---

## 📌 Project Overview

VerityWave is a frontend dashboard that simulates AI-based detection of images and videos.  
Users can upload media files, preview them, and receive a detection score representing the likelihood of AI generation.

The goals of this project, or rather, the objectives I had in mind were to demonstrate:

- Component-driven architecture
- Clean state management
- Async handling with realistic UI states
- Scalable frontend structure
- Production-level UI/UX thinking

---

## 🧱 Tech Stack

- React (Vite)
- TypeScript
- Tailwind CSS
- React Router DOM

---

## 📁 Project Structure

The project is structured to reflect real-world scalable frontend architecture:
src/
│
├── components/
│ ├── layout/
│ │ ├── AppLayout.tsx
│ │ ├── Navbar.tsx
│ │ └── Sidebar.tsx
│ ├── ErrorState.tsx
│ ├── Loader.tsx
│ ├── PreviewCard.tsx
│ ├── ResultCard.tsx
│ └── UploadZone.tsx
│
├── pages/
│ └── Dashboard.tsx
│
├── hooks/
│ └── useDetection.ts
│
├── services/
│ └── mockApi.ts
│
├── types/
│ └── index.ts
│
├── constants/
│ └── assets.ts
│
└── App.tsx


---

## 🧠 Architectural Decisions

### 1. Component Separation
UI elements were broken into reusable components to ensure:
- Reusability across pages
- Easier maintenance
- Clear separation of concerns

---

### 2. Custom Hook (`useDetection`)
Detection logic was abstracted into a custom hook to:
- Isolate business logic from UI
- Manage async state (loading, result, error)
- Improve reusability and testability

---

### 3. Mock API Layer
A service layer (`mockApi.ts`) was introduced to simulate backend behavior:
- Decouples UI from API logic
- Allows easy replacement with real backend endpoints
- Simulates realistic delays and failure cases

---

### 4. Controlled UI States
The application uses explicit UI states:

- `idle`
- `ready`
- `processing`
- `success`
- `error`

This ensures predictable rendering and better UX consistency.

---


## 🎯 Key Features

- 📤 File upload (image & video support)
- 👁️ Live preview before processing
- ⚙️ Simulated AI detection API
- ⏳ Loading / processing state feedback
- ❌ Error handling with retry option
- 📊 Result visualization with score breakdown
- 🧭 Sidebar navigation with active route highlighting
- ⚡ Lazy-loaded dashboard (code splitting)

---


## ⚡ Performance Optimizations

- Lazy loading of routes using `React.lazy`
- Code splitting with `Suspense`
- Object URL cleanup for uploaded files
- Minimal re-renders through state isolation

---


## 🔮 Future Improvements

If extended into a production system, the following enhancements would be added:

### 🔗 Backend Integration
- Replace mock API with real AI inference service
- Add authentication and user sessions

### ☁️ Cloud Storage
- Integrate AWS S3 or Cloudinary for file uploads

### 📊 Detection History
- Store past results per user
- Add filtering and search

### 🔐 Authentication System
- Login / signup flow
- Protected routes

### 🚀 Performance Enhancements
- Video optimization and lazy loading
- Caching previous results
- Pagination for history logs


---

## 🧪 Running the Project

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build