from sqlalchemy import Column, Integer, String, Text, Enum
from database import Base
import enum

class UrgencyEnum(str, enum.Enum):
    high = "high"
    medium = "medium"
    low = "low"

class Request(Base):
    __tablename__ = "requests"

    id = Column(Integer, primary_key=True, index=True)
    request_id = Column(String(50), unique=True, index=True, nullable=False)
    name = Column(String(100), nullable=False)
    description = Column(Text, nullable=False)
    urgency = Column(Enum(UrgencyEnum), nullable=False)
