from fastapi import FastAPI
import psycopg2
import os
from datetime import datetime, timezone
from pathlib import Path
from dotenv import load_dotenv
from fastapi.middleware.cors import CORSMiddleware

load_dotenv()
connection_string = os.getenv("DB_CONNECTION_STRING")

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/shop")
def get_shop():
    conn = psycopg2.connect(connection_string)
    with conn.cursor() as cur:
        cur.execute("""
            SELECT pc1, pc2, pc3, log_date
            FROM shop_log
            WHERE log_date <= %s
            ORDER BY log_date DESC
            LIMIT 1
        """, (datetime.now(timezone.utc),))

        row = cur.fetchone()

    conn.close()

    if not row:
        return {"error": "No shop log found"}
    
    return {
        "pc1": row[0],
        "pc2": row[1],
        "pc3": row[2],
        "log_date": row[3].isoformat()
    }
