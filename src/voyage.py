from analysis import Analysis
from gemini_portal import getCourses
import json

class Voyage:
    def __init__(self, user):
        self.analysis = Analysis()
        self.user = user
        self.career_goal = user.career_goal
        self.dream_company = user.dream_company
        self.skill_gap = self.analysis.find_gap(user.skills, self.analysis.find_required_skills(user.career_goal, user.dream_company))
        self.course_list = self.generate_course_list()
    
    def generate_course_list(self):
        prompt = f"I want to be a {self.career_goal} at {self.dream_company}!"
        # get all course names from course_data.json
        course_data = []
        with open("src\data\course_data.json", mode="r") as course_file:
            course_data = json.load(course_file)
            course_names = [course['name'] for course in course_data]

        return getCourses(self.skill_gap, course_names, prompt)

    def to_dict(self):
        return {
            'career_goal': self.career_goal,
            'dream_company': self.dream_company,
            'skill_gap': self.skill_gap,
            'course_list': self.course_list
        }


