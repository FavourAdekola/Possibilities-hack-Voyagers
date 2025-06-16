import json

# Used for Analyzing JSON data and Arrays
class Analysis:
    def __init__(self):
        pass
    
    def find_required_skills(self, career_goal, dream_company):
        try:
            # Read career data
            with open("src\data\careers.json", mode="r") as career_file:
                career_data = json.load(career_file)
                
            # Read company data
            with open("src\data\company.json", mode="r") as company_file:
                company_data = json.load(company_file)

            # Find relevant career skills
            career_skills = []
            for career in career_data.get('careers', []):
                if case_insensitive_match(career['job_title'], career_goal):
                    career_skills = [skill.lower().strip() for skill in career['skills']]
                    break

            # Find relevant company role skills
            company_skills = []
            for company in company_data.get('companies', []):
                if case_insensitive_match(company['name'], dream_company):
                    for role in company.get('roles', []):
                        if case_insensitive_match(role['title'], career_goal):
                            company_skills = [skill.lower().strip() for skill in role['skills']]
                            break
                    break

            # Combine skills and remove duplicates
            required_skills = list(set(career_skills + company_skills))
            return [skill.title() for skill in required_skills]  # Convert back to title case
        except Exception as e:
            print(f"Error finding required skills: {e}")
            return []    
    
    # Find courses from a list of course names
    def find_courses(self, course_name_list):
        course_list = []
        course_names = course_name_list.split(",")

        # Read course data
        with open("src\data\course_data.json", mode="r") as course_file:
            course_data = json.load(course_file)

        # Find relevant courses
        for course in course_data.get('courses', []):
            if case_insensitive_match(course['name'], course_names):
                course_list.append(course)
        return course_list



    # Find gap between user skills and required skills
    def find_gap(self, user_skills, required_skills):
        gap = []
        for skill in required_skills:
            if skill not in user_skills:
                gap.append(skill)
        return gap

    # Helper function for case-insensitive matching
    def case_insensitive_match(target, value):
        return target.lower().strip() == value.lower().strip()