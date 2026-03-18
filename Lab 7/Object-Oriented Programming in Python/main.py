from models import Animal, Dog, Cat

def show_animals(animals):
    if not animals:
        print("List is empty.")
        return

    print("\n--- Animal List ---")
    for animal in animals:
        print(animal)
        print(animal.info())
        print(animal.speak())
        print("-" * 30)


def main():
    animals = []

    n = int(input("How many animals do you want to create? "))

    for i in range(n):
        print(f"\nAnimal #{i + 1}")
        animal_type = input("Enter type (animal/dog/cat): ").lower()
        name = input("Enter name: ")
        age = int(input("Enter age: "))
        color = input("Enter color: ")

        if animal_type == "dog":
            breed = input("Enter breed: ")
            animal = Dog(name, age, color, breed)

        elif animal_type == "cat":
            indoor_input = input("Is it indoor? (yes/no): ").lower()
            indoor = indoor_input == "yes"
            animal = Cat(name, age, color, indoor)

        else:
            animal = Animal(name, age, color)

        animals.append(animal)

    while True:
        print("\nMenu:")
        print("1 - Show animal list")
        print("2 - Exit")

        choice = input("Choose: ")

        if choice == "1":
            show_animals(animals)
        elif choice == "2":
            print("Goodbye!")
            break
        else:
            print("Invalid choice.")
            

if __name__ == "__main__":
    main()