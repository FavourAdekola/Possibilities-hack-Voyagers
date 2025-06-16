import json

# Used for Analyzing JSON data and Arrays
class Analysis:
    def __init__(self):
        pass
    
    def find_required_skills(self, career_goal, dream_company):
        # Read career data
        with open("src\data\careers.json", mode="r") as career_file:
            career_data = json.load(career_file)
            
        # Read company data
        with open("src\data\company.json", mode="r") as company_file:
            company_data = json.load(company_file)
            
        # Find career skills
        career_skills = []
        for career in career_data.get('careers', []):
            if career['job_title'].lower() == career_goal.lower():
                career_skills = career['skills'].lower()
                break
                
        # Find company role skills
        company_skills = []
        for company in company_data.get('companies', []):
            if company['name'].lower() == dream_company.lower():
                for role in company.get('roles', []):
                    if role['title'].lower() == career_goal.lower():
                        company_skills = role['skills'].lower()
                        break
                break
                
        # Combine skills and remove duplicates
        required_skills = list(set(career_skills + company_skills))
        return required_skills
    
    def find_courses(self, course_name_list):
        course_list = []
        course_names = course_name_list.split(",")
        
        for course in course_names:
            course_list.append(course)
        return course_list

    def find_gap(self, user_skills, required_skills):
        user_skills = user_skills.lower()
        gap = []
        for skill in required_skills:
            if skill not in user_skills:
                gap.append(skill)
        return gap