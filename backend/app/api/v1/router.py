from fastapi import APIRouter
from app.api.v1 import contact, poll, services, insights

api_router = APIRouter()

api_router.include_router(contact.router, tags=["Contact"])
api_router.include_router(poll.router, tags=["Poll"])
api_router.include_router(services.router, tags=["Services"])
api_router.include_router(insights.router, tags=["Insights"])
