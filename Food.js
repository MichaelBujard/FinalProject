const Food = {

    FoodTypes = {
        Breakfast: "Breakfast",
        Lunch: "Lunch",
        Dinner: "Dinner",
        AllDay: "AllDay",
    },
    
    foodType,
    name,
    price,
    inStock,

    // constructor
    constructor(name, foodType, price) {
        this.foodType = foodType;
        this.name = name;
        this.price = price;
        this.inStock = true;
    },

    // setters
    set setName(name) {
        this.name = name;
    },
    set setPrice(price) {
        this.price = price;
    },
    set setOutOfStock() {
        this.inStock = false;
    },
    set setInStock() {
        this.inStock = true;
    },

    // getters
    get getName () {
        return this.name;
    },
    get getprice() {
        return this.price;
    },
    get inStock() {
        return this.inStock;
    }
};