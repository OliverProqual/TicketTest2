# 🎟️ TicketTest2

A **full-stack project** with a **FastAPI + SQLAlchemy backend** and a **modern JavaScript frontend** (npm-based).

---

## 📂 Project Structure
```
fullstack2/
│── backend/         # FastAPI + SQLAlchemy app
│── frontend/        # React/Vue/Next/etc. app (npm-based)
│── requirements.txt # Python backend dependencies
│── package.json     # Frontend dependencies
```

---

## ⚙️ Backend Setup (FastAPI + SQLAlchemy)

### 1️⃣ Create and activate a virtual environment
**Windows (CMD/PowerShell):**
```bash
python -m venv venv
venv\Scripts\activate
```

**Mac/Linux (bash/zsh):**
```bash
python3 -m venv venv
source venv/bin/activate
```

---

### 2️⃣ Install dependencies
```bash
pip install -r requirements.txt
```

This will install:
- **FastAPI** (API framework)  
- **Uvicorn** (ASGI server)  
- **SQLAlchemy** (database ORM)  

---

### 3️⃣ Run the backend server
```bash
uvicorn main:app --reload
```

- `main` = your `main.py` file (adjust if needed)  
- `app` = the FastAPI instance inside `main.py`  

Backend runs at 👉 [http://localhost:8000](http://localhost:8000)  

---

## 🎨 Frontend Setup (npm)

### 1️⃣ Navigate to the frontend folder
```bash
cd frontend
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Run the frontend
```bash
npm run dev
```

Frontend runs at 👉 [http://localhost:3000](http://localhost:3000)  

---

## 🔄 Adding New Dependencies

### ➕ Python (backend)
```bash
pip install <package>
pip freeze > requirements.txt
git add requirements.txt
git commit -m "Update requirements.txt"
git push
```

### ➕ JavaScript (frontend)
```bash
cd frontend
npm install <package>
git add package.json package-lock.json
git commit -m "Update frontend dependencies"
git push
```

---

## 🤝 Contributing
1. Fork the repo  
2. Create a feature branch (`git checkout -b feature/my-feature`)  
3. Commit your changes (`git commit -m "Add new feature"`)  
4. Push to the branch (`git push origin feature/my-feature`)  
5. Open a Pull Request  

---

## 📜 License
MIT License © 2025 OliverProqual
