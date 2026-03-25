from student import Student

class GraduateStudent(Student):
    def __init__(self, name, student_id, thesis_title, grades=None):
        super().__init__(name, student_id, grades)
        self.thesis_title = thesis_title
    
    def get_status(self):
        return "Graduate Student"
    
    def __str__(self):
        return f"{super().__str__()} - Thesis: {self.thesis_title}"