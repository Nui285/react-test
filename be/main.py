# main.py
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
import uvicorn

app = FastAPI()

# CORS設定（Reactと通信するため）
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # 本番では限定すること
    allow_methods=["*"],
    allow_headers=["*"],
)

# Reactのbuildフォルダを静的ファイルとしてマウント
app.mount("/static", StaticFiles(directory="./fe/build/static"), name="static")

# index.html をトップページとして返す
@app.get("/")
def serve_index():
    return FileResponse("./fe/build/index.html")

# その他のすべてのパスを index.html に返す（Reactがルーティングを担当）
@app.get("/{full_path:path}")
def catch_all(full_path: str):
    return FileResponse("./fe/build/index.html")

@app.post("/api/button")
async def button_event(request: Request):
    data = await request.json()
    print("ボタンイベント受信:", data)
    return {"status": "ok", "received": data}


if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8000)