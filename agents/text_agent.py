import os
from typing import List, Dict, Any, Optional
from openai import OpenAI


def generate_story(labels: List[Dict[str, Any]], api_key: Optional[str] = None, model: str = "gpt-3.5-turbo") -> str:
    """
    Generates a short story from image labels using OpenAI API.
    
    Args:
        labels: List of dictionaries containing label descriptions and scores.
                Each dictionary should have 'description' and 'score' keys.
        api_key: Optional OpenAI API key. If not provided, uses OPENAI_API_KEY env variable.
        model: OpenAI model to use (default: "gpt-3.5-turbo")
    
    Returns:
        Generated story as a string.
    
    Raises:
        Exception: If there's an error with the API call.
    """
    # Initialize OpenAI client
    if api_key:
        client = OpenAI(api_key=api_key)
    else:
        # Try to get API key from environment variable
        api_key = os.getenv('OPENAI_API_KEY')
        if not api_key:
            raise ValueError(
                "OpenAI API key not found. Please set OPENAI_API_KEY environment variable "
                "or pass api_key parameter."
            )
        client = OpenAI(api_key=api_key)
    
    # Extract label descriptions
    label_descriptions = [label['description'] for label in labels]
    labels_text = ", ".join(label_descriptions)
    
    # Create prompt for story generation
    prompt = f"""Based on the following objects and scenes detected in an image, write a short, creative story (2-3 paragraphs) that incorporates these elements naturally.

Detected elements: {labels_text}

Please write an engaging story that weaves these elements together in a cohesive narrative. Make it descriptive and vivid."""
    
    try:
        # Generate story using OpenAI
        response = client.chat.completions.create(
            model=model,
            messages=[
                {"role": "system", "content": "You are a creative storyteller who writes engaging, descriptive stories based on visual elements."},
                {"role": "user", "content": prompt}
            ],
            max_tokens=500,
            temperature=0.8
        )
        
        story = response.choices[0].message.content.strip()
        return story
    
    except Exception as e:
        raise Exception(f"Error generating story with OpenAI: {str(e)}")


def generate_story_from_string(labels_string: str, api_key: Optional[str] = None, model: str = "gpt-3.5-turbo") -> str:
    """
    Generates a short story from a comma-separated string of labels.
    
    Args:
        labels_string: Comma-separated string of label descriptions
        api_key: Optional OpenAI API key. If not provided, uses OPENAI_API_KEY env variable.
        model: OpenAI model to use (default: "gpt-3.5-turbo")
    
    Returns:
        Generated story as a string.
    """
    # Convert string to list of dictionaries
    label_list = [{'description': label.strip(), 'score': 0.0} for label in labels_string.split(',')]
    return generate_story(label_list, api_key, model)


if __name__ == "__main__":
    # Example usage
    # Set your OpenAI API key as an environment variable or pass it directly
    example_labels = [
        {'description': 'Mountain', 'score': 0.95},
        {'description': 'Sky', 'score': 0.92},
        {'description': 'Tree', 'score': 0.88},
        {'description': 'Sunset', 'score': 0.85}
    ]
    
    try:
        story = generate_story(example_labels)
        print("Generated Story:")
        print(story)
    except Exception as e:
        print(f"Error: {e}")