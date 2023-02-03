from fastapi import FastAPI , Request , Form , UploadFile, File, Body
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles
from fastapi.responses import HTMLResponse , RedirectResponse
import json
import os
import shutil

app = FastAPI()

app.mount("/static", StaticFiles(directory="static"), name="static")
templates = Jinja2Templates(directory="templates")

@app.get("/",response_class=HTMLResponse)
def root(request:Request):
    context={'request':request}
    return templates.TemplateResponse('index.html',context)


@app.post("/file_uploader")
async def file_uploader(files: UploadFile = File(...) , name: str = Form(...)):

    extension = name.split('.')[-1]

    print(name)

    with open('static/user_uploads/input.'+ extension , 'wb') as buffer:
        shutil.copyfileobj(files.file, buffer)

    return "OK Done"