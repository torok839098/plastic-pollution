from flask import Flask, render_template, jsonify
import json
from pymongo import MongoClient

app = Flask(__name__, template_folder='templates', static_folder='static')

client = MongoClient('mongodb://localhost:27017/')
db = client['plastic_pollution']
collection = db['recycled_plastic']

@app.route('/')
def main_page():
    return render_template('main.html')

@app.route('/recyclecharts')
def index():
    return render_template('index.html')

@app.route('/recycledata')
def get_recycle_data():
    recycle_data = list(collection.find({}, {'_id' : False}))
    return jsonify(recycle_data)

@app.route('/bagcounter')
def get_bag_counter():
    return render_template('counter.html')

if __name__ == '__main__':
    app.run(debug=True)

