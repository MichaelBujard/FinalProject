const Beverage = {
    name,
    size,
    price,
    sizes = ["small", "medium", "large"],

    constructor(name, price) {
        this.name = name;
        this.price = price;
        this.size = size;
    },
    //setters
    set setName(name) {
        this.name = name;
    },
    set setPrice(price) {
        this.price = price;
    },
    // getters
    get getName() {
        return this.name;
    },
    get getPrice() {
        return this.price + "C";
    }
};