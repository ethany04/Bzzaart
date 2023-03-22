from typing import List, Dict
from flask import Flask
import mysql.connector
import json

app = Flask(__name__)

def artworks() -> List[Dict]:
    config = {
        'user': 'root',
        'password': 'root',
        'host': 'db',
        'port': '5000',
        'database': 'compensation'
    }
    connection = mysql.connector.connect(**config)
    cursor = connection.cursor()
    cursor.execute('SELECT * FROM artworks_data')
    results=[{artwork_id: art_url} for (artwork_id, art_url) in cursor]
    cursor.close()
    connection.close()
    
    return results

@app.route('/')
def index() -> str:
    return json.dumps({'artworks': artworks()})


if __name__ == '__main__':
    app.run(host='0.0.0.0')