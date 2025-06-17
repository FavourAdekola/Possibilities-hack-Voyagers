import unittest
from src.skill_analysis import find_gap, find_required_skills
from src.user import User

class TestSkillAnalysis(unittest.TestCase):
    def setUp(self):
        # Create test user
        self.user = User("Test User")
        self.user.skills = ["Python", "C++", "Git"]
        self.user.career_goal = "Embedded Systems Engineer"
        self.user.dream_company = "Nvidia"

    def test_find_gap(self):
        """Test the find_gap function with various skill sets"""
        # Test with no gap
        user_skills = ["Python", "C++", "Git"]
        required_skills = ["Python", "C++", "Git"]
        self.assertEqual(find_gap(user_skills, required_skills), [])

        # Test with some missing skills
        user_skills = ["Python", "C++"]
        required_skills = ["Python", "C++", "Git", "CUDA"]
        self.assertEqual(set(find_gap(user_skills, required_skills)), set(["Git", "CUDA"]))

        # Test with case sensitivity
        user_skills = ["python", "C++"]
        required_skills = ["Python", "C++", "Git"]
        self.assertEqual(set(find_gap(user_skills, required_skills)), set(["Git"]))

        # Test with empty skill lists
        user_skills = []
        required_skills = ["Python", "C++"]
        self.assertEqual(set(find_gap(user_skills, required_skills)), set(["Python", "C++"]))

    def test_find_required_skills(self):
        """Test the find_required_skills function"""
        # Test with valid career goal and company
        required_skills = find_required_skills(self.user.career_goal, self.user.dream_company)
        self.assertTrue("CUDA" in required_skills)
        self.assertTrue("Jetson Platform Development" in required_skills)
        self.assertTrue("Power Optimization" in required_skills)

        # Test with invalid career goal
        invalid_career = find_required_skills("Nonexistent Role", "Nvidia")
        self.assertEqual(invalid_career, [])

        # Test with invalid company
        invalid_company = find_required_skills("Embedded Systems Engineer", "Nonexistent Company")
        self.assertEqual(invalid_company, [])

    def test_skill_case_sensitivity(self):
        """Test that skill matching is case-insensitive"""
        # Test career goal matching
        skills = find_required_skills("embedded systems engineer", "Nvidia")
        self.assertTrue("CUDA" in skills)

        # Test company matching
        skills = find_required_skills("Embedded Systems Engineer", "nvidia")
        self.assertTrue("CUDA" in skills)

if __name__ == '__main__':
    unittest.main()
