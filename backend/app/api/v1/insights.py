from fastapi import APIRouter, status
from app.schemas.insights import InsightsResponse, Article
from app.services.content_data import ARTICLES_DATA

router = APIRouter()

@router.get("/insights", response_model=InsightsResponse, status_code=status.HTTP_200_OK)
async def get_all_articles():
    article_list = [Article(**item) for item in ARTICLES_DATA]
    return InsightsResponse(
        total=len(article_list),
        articles=article_list
    )
