from fastapi import APIRouter

router = APIRouter()

@router.get("/ping")
def task_ping():
    return {"message": "Task route working"}
