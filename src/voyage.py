from analysis import find_gap, find_required_skills   

class Voyage:
    def __init__(self, user):
        self.user = user
        self.career_goal = user.career_goal
        self.dream_company = user.dream_company
        self.skill_gap = find_gap(user.skills, find_required_skills(user.career_goal, user.dream_company))
        self.course_list = []
