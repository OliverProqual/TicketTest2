from sqlalchemy.orm import Session
import models, schemas

def create_request(db: Session, request: schemas.RequestCreate):
    db_request = models.Request(
        request_id=request.request_id,
        name=request.name,
        description=request.description,
        urgency=request.urgency,
    )
    db.add(db_request)
    db.commit()
    db.refresh(db_request)
    return db_request
