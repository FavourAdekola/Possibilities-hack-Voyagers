class User:
    def __init__(self, name):
        self.name = name
        self.career_goal = ""
        self.dream_company = ""
        self.skills = []

    def parse_skills(self, resume):
        # If there is time we would parse skills from a resume.
        pass

    def set_skills_default(self):
        self.skills = ["Python", "C++", "C", "Rust"]
        self.career_goal = "Embedded Systems Engineer"
        self.dream_company = "Nvidia"
    
