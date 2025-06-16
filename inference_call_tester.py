import chatportal
import geminiportal

# Call the OpenAI API

desired_career = "UX/Frontend Developer"
test_skillset = ["html, css, react, javascript, figma"]
test_courseset = ["Intro to python", "intro to react", "frontend programming", "rocket science", "user experience and design", 
                  "fullstack development", "artificial intelligence", "intro to machine learning", "linear algebra", "multivariable calculus", "web design", 
                  "software design", "object oriented programming", "Figma essentials", "information management", "psychology of design", "color theory", "Bootstrapping with Angular"]
user = f"I want to be a {desired_career}!"

def main():
    geminiportal.getCourses(test_skillset, test_courseset, user)

if __name__ == "__main__":
    main()