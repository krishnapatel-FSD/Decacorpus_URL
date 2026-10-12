from pydantic import BaseModel, EmailStr, Field
from typing import Optional

class ContactSubmissionRequest(BaseModel):
    name: Optional[str] = Field(None, description="User's full name")
    email: Optional[str] = Field(None, description="Contact email address")
    company: Optional[str] = Field(None, description="Company name")
    project: Optional[str] = Field(None, description="What the user wants to build")
    timeline: Optional[str] = Field(None, description="Desired timeline")
    notes: Optional[str] = Field(None, description="Additional context or links")

class ContactSubmissionResponse(BaseModel):
    success: bool
    message: str
    submission_id: str
