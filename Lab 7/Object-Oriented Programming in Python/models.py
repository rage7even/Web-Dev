class Animal:
    def __init__(self, name, age, color):
        self.name = name
        self.age = age
        self.color = color
    
    def speak(self):
        return f"{self.name} makes a sound."
    
    def info(self):
        return f"Name: {self.name}, Age: {self.age}, Color: {self.color}"

    def __str__(self):
        return f"{self.__class__.__name__}({self.name}, {self.age}, {self.color})"
    
class Dog(Animal):
    def __init__(self, name, age, color, breed):
        super().__init__(name, age, color)
        self.breed = breed
    
    def speak(self):
        return f"{self.name} says: Woof woof!"
    
    def fetch(self):
        return f"{self.name} is fetching the bail."
    
    def __str__(self):
        return f"Dog(Name: {self.name}, Age: {self.age}, Color: {self.color}, Breed: {self.breed})"
    
class Cat(Animal):
    def __init__(self, name, age, color, indoor):
        super().__init__(name, age, color)
        self.indoor = indoor
    
    def speak(self):
        return f"{self.name} says: Meow!"

    def climb(self):
        return f"{self.name} is climbing the furniture."

    def __str__(self):
        return f"Cat(Name: {self.name}, Age: {self.age}, Color: {self.color}, Indoor: {self.indoor})"