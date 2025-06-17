from openai import OpenAI
import env

client = OpenAI(api_key=env.getKeyOpenAI())

def getCourses(list_of_skills, courses, user):
    context = formatContext(user)
    response = client.chat.completions.create(model="gpt-4.1",
    messages = [
    {
        "role": "system",
        "content": (
            "You are a one-function LLM assistant that suggests courses based on the user's skillset, goals, and background. "
            "You must output ONLY a single list of course names, separated by commas, with NO spaces between entries. "
            "There must be NO extra words, explanation, or formatting. Just the list."
        )
    },
    {
        "role": "user",
        "content": (
            "Given the following data:\n\n"
            "1. Available courses: {courses}\n"
            "2. User context: {context}\n"
            "3. User-provided skills: {list_of_skills}\n\n"
            "Recommend a SEQUENTIAL list of 5 to 9 courses (ordered from beginner to advanced) that the user should take to be well-prepared for their target role. "
            "Tailor the recommendations to their background and demographics as described in the context. "
            "Ensure the course list reflects a natural knowledge progression appropriate for their current skills and target goal.\n\n"
            "**Important Output Format**:\n"
            "- Output ONLY a comma-separated list of course names, with NO spaces\n"
            "- Do NOT add any text, bullet points, or formatting\n"
            "- Output must be valid for direct programmatic parsing using split(',')"
        )
    }
    ])
    output = response.choices[0].message.content
    print(output)
    return output

# TODO: format the user data however we need to pass to the LLM; get instance variables from User class
def formatContext(user_data):
    # logic here
    return user_data