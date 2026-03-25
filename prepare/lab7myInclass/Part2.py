class Product:
    def __init__(self, name, price, qty):
        self.name = name
        self.price = price
        self.qty = qty
    
    def get_total_val(self):
        return self.price * self.qty
    
    def __str__(self):
        return f"Product: {self.name}, Price: {self.price}"

class DiscountProduct(Product):
    def __init__(self, name, price, qty, discount):
        super().__init__(name, price, qty)
        self.discount = discount
    
    def get_total_val(self):
        total = self.price * self.qty
        return total * (1 - self.discount)

def main():
    product1 = Product("Laptop", 250000,2)
    product2 = DiscountProduct("IPhone", 10000, 1, 0.2)

    print(product1)
    print("Total val:", product1.get_total_val())

    print(product2)
    print("Total val with discount", product2.get_total_val())

if __name__ == "__main__":
    main()
