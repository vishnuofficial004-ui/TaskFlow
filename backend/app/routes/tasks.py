from fastapi import APIRouter

router = APIRouter()

@router.get("/")
def dummy_tasks():
    return {"message": "Tasks route working"}
