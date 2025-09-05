from pydantic import BaseModel
from enum import Enum

class UrgencyEnum(str, Enum):
    high = "high"
    medium = "medium"
    low = "low"

class RequestCreate(BaseModel):
    request_id: str
    name: str
    description: str
    urgency: UrgencyEnum

class RequestOut(RequestCreate):
    id: int

    class Config:
        orm_mode = True
