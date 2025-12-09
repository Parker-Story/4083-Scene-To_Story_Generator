import time
import random

def generate_story(labels):
    """
    MOCK version of the Text Generation Agent.
    It takes a list of labels and returns a fake story.
    """
    print(f"--- [MOCK TEXT AGENT] Generating story for: {labels} ---")
    
    # 1. Simulate "Thinking" Time
    time.sleep(2)
    
    # 2. Create a fake story using the labels
    # We join the labels into a string to make it look dynamic
    labels_string = ", ".join(labels[:3]) # Just take the first 3 labels
    
    story_templates = [
        f"Once upon a time, there was a {labels_string}. It was a beautiful day and everything was peaceful.",
        f"In a world dominated by {labels_string}, one hero stood up to make a difference.",
        f"The mystery of the {labels_string} had puzzled scientists for decades, until today."
    ]
    
    # Pick a random story
    fake_story = random.choice(story_templates)
    
    print("--- [MOCK TEXT AGENT] Story created. ---")
    
    return fake_story