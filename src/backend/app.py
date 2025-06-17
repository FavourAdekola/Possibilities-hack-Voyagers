from flask import Flask, jsonify, request
from flask_cors import CORS
from src.analysis import Analysis
from src.user import User
from src.voyage import Voyage

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

default_user = User("Favour Adekola")
default_user.set_user_default()

default_voyage = Voyage(default_user)

@app.route('/api/user', methods=['GET'])
def get_user():
    """Get user information by name from query parameter"""
    try:
        return jsonify(user.to_dict())
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/voyage', methods=['GET'])
def get_voyage():
    """Get voyage information by name from query parameter"""
    try:
        return jsonify(voyage.to_dict())
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)
