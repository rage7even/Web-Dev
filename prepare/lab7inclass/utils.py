
def calculate_class_avg(students):

    if not students:
        return 0
    
    total = sum(student.get_avg() for student in students)
    return total / len(students)

def get_top_student(students):
    if not students:
        return None
    
    return max(students, key=lambda student: student.get_avg())

def get_students_by_grade(students, letter):
    return [student for student in students if student.get_letter_grade() == letter]