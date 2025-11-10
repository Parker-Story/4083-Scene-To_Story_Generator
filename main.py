# main.py
from agents.image_agent import detect_labels
from agents.text_agent import generate_story

def main():
    # Choose your sample image
    image_path = "data/sample_images/1.jpg"

    print("🔍 Extracting labels from image...")
    labels = detect_labels(image_path)
    print("✅ Labels extracted:", [label["description"] for label in labels])

    print("\n✍️ Generating story from labels...")
    story = generate_story(labels)
    print("\n📖 Generated Story:\n")
    print(story)

if __name__ == "__main__":
    main()
