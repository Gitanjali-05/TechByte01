from flask import *
from flask_cors import *
import requests

app=Flask(__name__)
CORS(app)

@app.before_request
def handle_preflight():
    if request.method == "OPTIONS":
        res = Response()
        res.headers['X-Content-Type-Options'] = '*'
        return res
        

@app.route("/firebaseproxy", methods=["GET","POST"])
def proxy():
    data=request.json
    print(data)
    requests.post('https://frosthacks-900b4-default-rtdb.firebaseio.com/message_list.json', json=data)
    return 'Test'

if __name__=='__main__':
    app.run(host='0.0.0.0', port=5000)