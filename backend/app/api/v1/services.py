from fastapi import APIRouter, status, HTTPException
from app.schemas.services import ServicesListResponse, ServiceDetail
from app.services.content_data import SERVICES_DATA

router = APIRouter()

@router.get("/services", response_model=ServicesListResponse, status_code=status.HTTP_200_OK)
async def get_all_services():
    services_list = [ServiceDetail(**item) for item in SERVICES_DATA]
    return ServicesListResponse(
        total=len(services_list),
        services=services_list
    )

@router.get("/services/{service_id}", response_model=ServiceDetail, status_code=status.HTTP_200_OK)
async def get_service_by_id(service_id: int):
    for item in SERVICES_DATA:
        if item["id"] == service_id:
            return ServiceDetail(**item)
    raise HTTPException(status_code=404, detail=f"Service with id {service_id} not found")
