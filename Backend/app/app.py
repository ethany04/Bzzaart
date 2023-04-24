from typing import List, Dict
from flask import Flask
import mysql.connector
import json

app = Flask(__name__)

def imagesForSwipe() -> List[Dict]:
    config = {
        'user': 'root',
        'password': 'root',
        'host': 'db',
        'port': '3306',
        'database': 'compensation'
    }
    connection = mysql.connector.connect(**config)
    cursor = connection.cursor()
    cursor.execute('SELECT art_name, art_url, artist_id FROM artworks_data')
    results=[{"name": art_name, "img": art_url, "artist_id": artist_id} for (art_name, art_url, artist_id) in cursor]
    cursor.close()
    connection.close()
    
    return results

def getArtistPfp() -> List[Dict]:
    config = {
        'user': 'root',
        'password': 'root',
        'host': 'db',
        'port': '3306',
        'database': 'compensation'
    }
    connection = mysql.connector.connect(**config)
    cursor = connection.cursor()
    cursor.execute('SELECT artwork_id, art_name, art_url, artist_id FROM artworks_data')
    results=[{"artwork_id": artwork_id, "name": art_name, "img": art_url, "artist_id": artist_id} for (artwork_id, art_name, art_url, artist_id) in cursor]
    for r in results:
        aid = r["artist_id"]
        cursor.execute(f'SELECT profile_pic_url FROM artists_data WHERE artist_id = {aid}')
        print(cursor)
        pfp=[{"pfp": profile_pic_url} for (profile_pic_url) in cursor]
        r["pfp"] = pfp[0]["pfp"][0]

    cursor.close()
    connection.close()
    print(results)
    return results

@app.route('/images')
def index() -> str:
    return json.dumps(getArtistPfp())


if __name__ == '__main__':
    app.run(host='0.0.0.0')