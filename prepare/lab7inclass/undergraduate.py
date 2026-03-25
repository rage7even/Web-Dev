from student import Student

class UndergraduateStudent(Student):
    def __init__(self, name, student_id, year, grades=None):
        super().__init__(name, student_id, grades)
        self.year = year
    
    def get_status(self):
        return f"Undergraduate - Year {self.year}"
    
    def __str__(self):
        return f"{super().__str__()} - Year: {self.year}"