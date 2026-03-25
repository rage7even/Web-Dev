class Book:
    def __init__(self, title, author, isbn, is_ava):
        self.title = title
        self.author = author
        self.isbn = isbn
        self.is_ava = is_ava
    
    def borrow(self):
        if self.is_ava:
            self.is_ava = False
            return True
        
        return False
    
    def return_book(self):
        self.is_ava = True
        return True
    
    def get_info(self):
        status = "Available" if self.is_ava else "Borrowed"
        return f"{self.title} by {self.author} ({self.isbn} - {status})"
    
    def __str__(self):
        status = "Available" if self.is_ava else "Borrowed"
        return f"{self.title} by {self.author} ({self.isbn} - {status})"

class EBook(Book):
    def __init__(self, title, author, isbn, file_size_mb, format, is_ava = True):
        super().__init__(title, author, isbn, is_ava)
        self.file_size_mb = file_size_mb
        self.format = format
    
    def borrow(self):
        return True
    
    def get_info(self):
        return f"{self.title} - EBook ({self.format}, {self.file_size_mb} MB)"
    
    def __str__(self):
        status = "Available" if self.is_available else "Borrowed"
        return f"{self.title} by {self.author} ({self.isbn}) - {status} [Ebook]"