from pydantic import BaseModel
from typing import List, Tuple

class ServiceDetail(BaseModel):
    id: int
    name: str
    short_line: str
    chip_label: str
    overview: str
    list_1_title: str
    list_1_items: List[str]
    list_2_title: str
    list_2_items: List[str]
    pull_quote: str
    key_features: List[str]
    technologies: List[str]

class ServicesListResponse(BaseModel):
    total: int
    services: List[ServiceDetail]
