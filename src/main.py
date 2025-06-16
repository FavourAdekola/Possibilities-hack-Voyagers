from user import User
from skill_analysis import find_required_skills, find_gap

if __name__ == "__main__":
    user = User("Favour Adekola")
    user.set_skills_default()
    print(find_required_skills(user.career_goal, user.dream_company))
    print(find_gap(user.skills, find_required_skills(user.career_goal, user.dream_company)))

