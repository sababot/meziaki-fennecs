from flask import Flask, render_template

app = Flask(__name__)

# Routes
@app.route('/')
def home():
    return render_template('index.html')

@app.route('/explore')
def explore():
    return render_template('explore.html')

@app.route('/visualize')
def visualize():
    return render_template('vis.html')

if __name__ == '__main__':
    app.run()