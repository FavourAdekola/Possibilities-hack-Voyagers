import google.generativeai as genai
#import env

# Load API key
#genai.configure(api_key=env.getKeyGemini())
genai.configure(api_key="AIzaSyBWLly21doEE306kwXaFk71Whxa4DUOf6A")

# Initialize model
model = genai.GenerativeModel("gemini-2.0-flash")

def getCourses(list_of_skills, courses, user):
    context = formatContext(user)

    # Construct prompt text (Gemini doesn't use roles)
    prompt = (
        "You are a one-function LLM assistant that suggests courses based on the user's skillset, goals, and background. "
        "You must output ONLY a single list, separated by commas"
        "There must be NO extra words, explanation, or formatting. Just the list.\n\n"
        "Given the following data:\n\n"
        f"1. Available courses: {courses}\n"
        f"2. User context: {context}\n"
        f"3. User-provided skills: {list_of_skills}\n\n"
        "Recommend a SEQUENTIAL list of 5 to 9 courses (ordered from beginner to advanced) that the user should take to be well-prepared for their target role. "
        "The list should follow a pattern: the courses in the beginning form a foundation for the role. The courses in the middle and end dive into the nuances and required knowledge for the role."
        "Tailor the recommendations to their background and demographics as described in the context. "
        "Ensure the course list reflects a natural knowledge progression appropriate for their current skills and target goal.\n\n"
        "**Important Output Format**:\n"
        "- Output ONLY a comma-separated list of course names, with NO spaces\n"
        "- Do NOT add any text, bullet points, or formatting\n"
        "- Output must be valid for direct programmatic parsing using split(',')"
    )

    response = model.generate_content(prompt)
    output = response.text.strip()

    print(output)
    return output

def getProjectCheckpoint(list_of_courses):
    prompt = (
        "You are a one-function LLM assistant that suggests TWO names and ONE description: one course name, one assignment title based on the provided list of courses, and a description of the generated project (the second name)."
        "You must output ONLY TWO names and ONE description, the first name being the name of the chosen course, and the second name being a good project or assignment based on the courses leading up to and including that course."
        "The description must be a reasonably-sized text description that describes the project (second name) in detail."
        "Provide the two names and description (three total objects) as a comma separated list. The description must have spaces between the words."
        "A 'mid-point check' is a project or assignment that is placed somewhere near or at the middle of a course list that evaluates a student's understanding of the content up to that point."
        f"Given this list of courses {list_of_courses}, please provide TWO names and ONE description: a course such that a 'mid-point check' would be well placed after it, the name of the project or assignment" 
        "that takes concepts from all the courses leading up to and including the chosen course name, as well as a detailed but brief description of the project name."
    )

    response = model.generate_content(prompt)
    output = response.text.strip()

    print(output)
    return output

# TODO: format the user data however we need to pass to the LLM; get instance variables from User class
def formatContext(user_data):
    # logic here
    return user_data