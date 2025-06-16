def find_gap(user_skills, required_skills):
    gap = []
    for skill in required_skills:
        if skill not in user_skills:
            gap.append(skill)
    return gap

def find_required_skills(career_goal, dream_company):
    # TODO: implement skill analysis logic.
    pass