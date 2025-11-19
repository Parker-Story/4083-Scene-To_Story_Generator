import time

def detect_labels(path):
    """
    MOCK version of the Google Cloud Vision function.
    It mimics the 'detect_labels' function but costs $0.
    """
    print(f"--- [MOCK IMAGE AGENT] Processing image at: {path} ---")

    # 1. Simulate the delay of sending data to Google Cloud
    # (Real API calls usually take 1-3 seconds)
    time.sleep(1.5) 

    # 2. Define the Fake Data
    # These are the labels Google Cloud WOULD return for a picture of a dog.
    mock_labels = [
        "Dog",
        "Park",
        "Grass",
        "Tree",
        "Playing",
        "Mammal",
        "Vertebrate",
        "Golden Retriever"
    ]

    print("--- [MOCK IMAGE AGENT] Labels found:", mock_labels)
    
    # CRITICAL: We RETURN the list so your API can use it.
    return mock_labels