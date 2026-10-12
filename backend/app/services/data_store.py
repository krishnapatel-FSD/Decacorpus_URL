import uuid
from typing import Dict, List, Any
from app.schemas.contact import ContactSubmissionRequest, ContactSubmissionResponse
from app.schemas.poll import PollVoteRequest, PollVoteResponse

class MemoryDataStore:
    def __init__(self):
        self.contact_submissions: List[Dict[str, Any]] = []
        # Initial poll voting counts for 4 options
        self.poll_votes: Dict[int, int] = {0: 14, 1: 28, 2: 9, 3: 17}

    def save_contact_submission(self, req: ContactSubmissionRequest) -> ContactSubmissionResponse:
        submission_id = str(uuid.uuid4())[:8]
        entry = {
            "id": submission_id,
            "name": req.name,
            "email": req.email,
            "company": req.company,
            "project": req.project,
            "timeline": req.timeline,
            "notes": req.notes
        }
        self.contact_submissions.append(entry)
        
        name_str = f", {req.name}" if req.name and req.name.strip() else ""
        msg = f"Thanks{name_str}. We’ll be in touch."
        
        return ContactSubmissionResponse(
            success=True,
            message=msg,
            submission_id=submission_id
        )

    def record_poll_vote(self, req: PollVoteRequest) -> PollVoteResponse:
        opt = req.option_index
        if opt in self.poll_votes:
            self.poll_votes[opt] += 1
            
        total = sum(self.poll_votes.values())
        percentages = {
            k: round((v / total) * 100, 1) if total > 0 else 0.0
            for k, v in self.poll_votes.items()
        }
        
        return PollVoteResponse(
            success=True,
            message="Vote recorded successfully.",
            selected_option=opt,
            total_votes=total,
            breakdown=self.poll_votes,
            percentages=percentages
        )

data_store = MemoryDataStore()
