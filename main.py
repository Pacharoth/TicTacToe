from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles

from fastapi.templating import Jinja2Templates
app = FastAPI()
app.mount("/public", StaticFiles(directory="public"), name="public")
templates = Jinja2Templates(directory="views")
@app.get("/", response_class=HTMLResponse)
async def page_tic_tac_toe(request: Request):
    return templates.TemplateResponse("tictactoe.html", {"request": request})
