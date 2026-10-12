from fastapi import APIRouter, status
from app.schemas.contact import ContactSubmissionRequest, ContactSubmissionResponse
from app.services.data_store import data_store

router = APIRouter()

@router.post("/contact", response_model=ContactSubmissionResponse, status_code=status.HTTP_201_CREATED)
async def submit_contact_form(request_data: ContactSubmissionRequest):
    return data_store.save_contact_submission(request_data)
