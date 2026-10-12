from fastapi import APIRouter, status
from app.schemas.poll import PollVoteRequest, PollVoteResponse
from app.services.data_store import data_store

router = APIRouter()

@router.post("/poll/vote", response_model=PollVoteResponse, status_code=status.HTTP_200_OK)
async def vote_in_poll(vote_data: PollVoteRequest):
    return data_store.record_poll_vote(vote_data)
