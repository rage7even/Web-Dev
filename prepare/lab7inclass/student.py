class Student:
    def __init__(self, name, student_id, grades=None):
        self.name = name
        self.student_id = student_id
        self.grades = grades if grades is not None else []
    
    def add_grade(self, grade):
        self.grades.append(grade)
    
    def get_avg(self):
        if not self.grades:
            return 0
        return sum(self.grades) / len(self.grades)
    
    def get_letter_grade(self):
        avg = self.get_avg()

        if 90 <= average <= 100:
            return "A"
        elif 80 <= average <= 89:
            return "B"
        elif 70 <= average <= 79:
            return "C"
        elif 60 <= average <= 69:
            return "D"
        else:
            return "F"
    
    def __str__(self):
        return f"{self.name} ({self.student_id}) - Avg: {self.get_avg():.1f} ({self.get_letter_grade()})"