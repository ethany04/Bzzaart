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
        'port': '3306',
        'database': 'compensation'
    }
    connection = mysql.connector.connect(**config)
    cursor = connection.cursor()
    cursor.execute('SELECT art_name, art_url FROM artworks_data')
    results=[{"name": art_name, "img": art_url} for (art_name, art_url) in cursor]
    cursor.close()
    connection.close()
    
    return results

@app.route('/images')
def index() -> str:
    return json.dumps(artworks())


if __name__ == '__main__':
    app.run(host='0.0.0.0')