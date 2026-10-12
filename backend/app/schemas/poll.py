from pydantic import BaseModel, Field
from typing import Dict

class PollVoteRequest(BaseModel):
    poll_id: str = Field(default="bottleneck_poll", description="ID of the poll")
    option_index: int = Field(..., ge=0, le=3, description="Index of selected option (0 to 3)")

class PollVoteResponse(BaseModel):
    success: bool
    message: str
    selected_option: int
    total_votes: int
    breakdown: Dict[int, int]
    percentages: Dict[int, float]
