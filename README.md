# 🎟️ TicketTest2

Hi team, here is my proof of concept for the ticketing system, a **FastAPI + SQLAlchemy backend** and a **modern JavaScript frontend**.Nothing much while we wait on getting together to design the real thing, but just an idea of how we could go about implementing using this tech stack. Below is a setup guide for this kind of project with these tools.

---

## 📂 Project Structure
```
fullstack2/
│── backend/         # FastAPI + SQLAlchemy app
│── frontend/        # React app
```

---

## ⚙️ Backend Setup (FastAPI + SQLAlchemy)

### 1️⃣ Create and activate a virtual environment
**Windows (CMD/PowerShell):**
```bash
python -m venv .venv
.venv\Scripts\activate
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

- `main` = the `main.py` file, fastAPI entrypoint
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

Frontend runs at 👉 [http://localhost:5173](http://localhost:5173)  

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
