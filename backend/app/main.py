from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.database import Base, engine
from app.models import user, task
from app.routes import auth, tasks
from app.core.error_handler import global_exception_handler
from fastapi import Request


Base.metadata.create_all(bind=engine)

app = FastAPI(title="TaskFlow API")
app.add_exception_handler(Exception, global_exception_handler)


app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # React frontend
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router, prefix="/auth", tags=["Auth"])
app.include_router(tasks.router, prefix="/tasks", tags=["Tasks"])

@app.get("/")
def root():
    return {"message": "TaskFlow Backend is running"}
