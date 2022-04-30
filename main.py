from flask import Flask, render_template

app = Flask(__name__)

# Routes
@app.route('/')
def home():
    return render_template('index.html')

@app.route('/fennecs')
def fennecs():
    return render_template('fennecs.html')

@app.route('/visualize')
def visualize():
    return render_template('vis.html')

@app.route('/desert')
def desert():
    return render_template('desert.html')
