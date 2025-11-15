from fastapi import FastAPI
from ai.problem_generator import llm_problem_generation
from ai.solution_generator import llm_solution_generation

app = FastAPI()

@app.get("/")
async def root():
    return {"message" : "Hello World!"}

@app.post("/generate/problem{human_message}")
def generate_problem(human_message:str):
    res = llm_problem_generation(human_message)
    return res

@app.post("/generate/solution{problem_json}")
def generate_solution(problem_json:str):
    res = llm_solution_generation(problem_json)
    return res