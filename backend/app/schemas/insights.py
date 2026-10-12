from pydantic import BaseModel
from typing import List, Optional

class Article(BaseModel):
    id: int
    title: str
    meta: str
    excerpt: str
    filter_key: str
    card_label: str
    image_url: str

class InsightsResponse(BaseModel):
    total: int
    articles: List[Article]
