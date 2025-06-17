class User:
    def __init__(self, name):
        self.name = name
        self.career_goal = ""
        self.dream_company = ""
        self.skills = [] 
        self.progress = []
        self.courses = []

    def to_dict(self):
        """Convert user object to dictionary for JSON serialization"""
        return {
            'name': self.name,
            'career_goal': self.career_goal,
            'dream_company': self.dream_company,
            'skills': self.skills,
            'progress': self.progress,
            'courses': self.courses
        }

    def parse_skills(self, resume):
        """Parse skills from resume (to be implemented)"""
        pass

    def set_user_default(self):
        """Set default skills for testing"""
        self.skills = ["Python", "C", "Rust"]
        self.career_goal = "Embedded Systems Engineer"
        self.dream_company = "Nvidia"
