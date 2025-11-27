from fastapi import FastAPI
from ai.problem_generator import llm_problem_generation
from ai.solution_generator import llm_solution_generation
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class HumanMessage(BaseModel):
    human_message : str

@app.get("/")
async def root():
    return {"message" : "Hello World!"}

@app.post("/generate/problem/")
def generate_problem(payload : HumanMessage):
    res = llm_problem_generation(payload.human_message)
    return res

@app.post("/generate/solution/{problem_json}")
def generate_solution(problem_json:str):
    res = llm_solution_generation(problem_json)
    return res