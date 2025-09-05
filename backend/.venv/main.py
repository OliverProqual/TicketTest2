from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session
import models, schemas, crud, database
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

models.Base.metadata.create_all(bind=database.engine)

def get_db():
    db = database.SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.post("/requests/", response_model=schemas.RequestOut)
def create_request(request: schemas.RequestCreate, db: Session = Depends(get_db)):
    return crud.create_request(db, request)

@app.get("/requests/", response_model=list[schemas.RequestOut])
def get_requests(db: Session = Depends(get_db)):
    return db.query(models.Request).all()
