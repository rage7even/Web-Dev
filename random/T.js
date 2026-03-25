const input = "rect 10 20";
const parts = input.split(' ')

class Shape {
    area() {
        return 0;
    }
}

class Rectangle extends Shape {
    constructor(height, width) {
        super();
        this.height = height;
        this.width = width;
    }
    area(){
        return this.height * this.width;
    }
}

class Circle extends Shape {
    constructor(side) {
        super();
        this.side = side;
    }

    area(){
        return this.side * this.side;
    }
}

let shape;

if(parts[0] === 'rect') {
    const h = Number(parts[1]);
    const w = Number(parts[2]);
    shape = new Rectangle(h, w);
}
else if(parts[0] === 'circle') {
    const s = Number(parts[1]);
    shape = new Circle(s);
}

console.log(shape.area());

const arr = [1 , 2, 3, 3, 4, 5, 6, 7, 8, 9, 10];
const seen = new Set(arr);
const arr2 = [...seen]

console.log(arr2);