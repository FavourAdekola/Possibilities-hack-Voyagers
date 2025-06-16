class User:
    def __init__(self, name):
        self.name = name
        self.career_goal = ""
        self.dream_company = ""
        self.skills = [] # holds a list of skills to be parsed from a resume.

    def parse_skills(self, resume):
        # TODO: implement skill parsing logic.
        pass

    def set_skills_default(self):
        self.skills = ["python", "c++", "c", "rust"]
        self.career_goal = "Embedded System Engineer"
        self.dream_company = "Nvidia"
    
