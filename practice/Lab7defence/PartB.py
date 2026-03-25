class Animal:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def speak(self):
        return "Some sound"

    def __str__(self):
        return f"{self.name} is {self.age} years old"

class Dog(Animal):
    def speak(self):
        return "Woof woof!"

class Cat(Animal):
    def speak(self):
        return "Meow meow!"

def main():
    dog = Dog("Rex", 3)
    cat = Cat("Mysyk", 1)

    animals = [dog, cat]

    for animal in animals:
        print(animal)
        print(animal.speak())
        print("\n")

if __name__ == "__main__":
    main()