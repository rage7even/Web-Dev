from graduate import GraduateStudent
from undergraduate import UndergraduateStudent
from utils import calculate_class_avg, get_students_by_grade, get_top_student

def input_grades():
    grades = []
    cnt = int(input())

    for i in range(cnt):
        grade = float(input())
        grades.append(grade)
    
    return grades

def main():
    total_students = int(input())