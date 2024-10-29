import sqlite3

import psycopg2
from flask import Flask, redirect, render_template, request

app = Flask(__name__)



@app.route('/', methods=['POST', 'GET'])
def index():
    return render_template('index.html')

@app.route('/expirience/', methods=['POST', 'GET'])
def expir():
    return render_template('index1.html')

@app.route('/about/', methods=['POST', 'GET'])
def about():
    return render_template('index2.html')

@app.route('/systems/', methods=['POST', 'GET'])
def systems():
    return render_template('index3.html')


@app.route('/tok/', methods=['POST', 'GET'])
def tok():
    return render_template('index5.html')
@app.route('/vakasnii/', methods=['POST', 'GET'])
def vakasnii():
    return render_template('index6.html')
@app.route('/vint/', methods=['POST', 'GET'])
def vint():
    return render_template('index7.html')

app.run()
