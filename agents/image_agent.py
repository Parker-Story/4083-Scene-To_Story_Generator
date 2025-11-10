import os
from google.cloud import vision

# Set Google API credentials
os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = 'visionapi-477417-dca3fea94a84.json'

def detect_labels(path):
    """Detects labels in the file and returns them as a list of dictionaries."""
    client = vision.ImageAnnotatorClient()

    with open(path, "rb") as image_file:
        content = image_file.read()

    image = vision.Image(content=content)
    response = client.label_detection(image=image)
    labels = response.label_annotations

    if response.error.message:
        raise Exception(
            "{}\nFor more info on error messages, check: "
            "https://cloud.google.com/apis/design/errors".format(response.error.message)
        )

    # Convert labels to a list of dictionaries for text_agent
    label_list = [{"description": label.description, "score": label.score} for label in labels]
    return label_list


