# main.py
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# CORS設定（Reactと通信するため）
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # 本番では限定すること
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/api/button")
async def button_event(request: Request):
    data = await request.json()
    print("ボタンイベント受信:", data)
    return {"status": "ok", "received": data}
