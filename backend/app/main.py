from fastapi import FastAPI
from app.database import Base, engine
from app.models import user, task
from app.routes import auth, tasks

Base.metadata.create_all(bind=engine)

app = FastAPI(title="TaskFlow API")

app.include_router(auth.router, prefix="/auth", tags=["Auth"])
app.include_router(tasks.router, prefix="/tasks", tags=["Tasks"])

@app.get("/")
def root():
    return {"message": "TaskFlow Backend is running"}
