import os
import base64
from flask import Flask, request, jsonify
from flask_cors import CORS

# ==========================================
# SECTION 1: AGENT IMPORTS
# ==========================================

# [INSTRUCTION]: Use Mock agents for testing, Real agents for production.
# Ensure mock_image_agent.py and mock_text_agent.py are in the same folder.
import mock_image_agent as image_agent
import mock_text_agent as text_agent

app = Flask(__name__)
CORS(app) 

UPLOAD_FOLDER = 'temp_images'
if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)

# ==========================================
# SECTION 2: HELPER FUNCTION
# ==========================================
def save_image_from_request(request):
    """
    Smart function to handle standard File uploads.
    Returns the path to the saved file.
    """
    image_path = os.path.join(UPLOAD_FOLDER, "current_image.jpg")

    # CASE A: Standard File Upload (Multipart/Form-Data)
    # This matches the formData.append("image_input", ...) in your frontend
    if 'image_input' in request.files:
        print("--- Detecting Mode: Standard File Upload ---")
        file = request.files['image_input']
        file.save(image_path)
        return image_path
    
    # CASE B: Base64 String (Fallback for other modes)
    data = request.get_json(silent=True)
    if data and 'image' in data:
        print("--- Detecting Mode: Base64 String ---")
        image_data = data['image']
        if "," in image_data:
            image_data = image_data.split(",")[1]
        with open(image_path, "wb") as fh:
            fh.write(base64.b64decode(image_data))
        return image_path

    return None

# ==========================================
# SECTION 3: THE ENDPOINT
# ==========================================

@app.route('/api/generate-story', methods=['POST'])
def generate_story_endpoint():
    print("\n--- New Request Received ---")

    try:
        # 1. SAVE THE IMAGE
        file_path = save_image_from_request(request)
        
        if not file_path:
            return jsonify({"error": "No image found. Send as file with key 'image_input'."}), 400
            
        print(f"Image successfully saved to: {file_path}")

        # 2. CALL IMAGE AGENT
        print("Step 1: Analyzing Image...")
        detected_labels = image_agent.detect_labels(file_path)
        print(f"Result: {detected_labels}")

        # 3. CALL TEXT AGENT
        print("Step 2: Generating Story...")
        # We pass the list of labels to the text agent
        story = text_agent.generate_story(detected_labels)
        print("Story Generated.")

        # 4. CLEAN UP
        if os.path.exists(file_path):
            os.remove(file_path)

        # 5. SEND RESPONSE
        return jsonify({
            "success": True,
            "labels": detected_labels,
            "story": story
        })

    except Exception as e:
        print(f"ERROR: {e}")
        return jsonify({"success": False, "error": str(e)}), 500

if __name__ == '__main__':
    # Runs the server on port 5000
    app.run(debug=True, port=5000)