const menu = {
    _courses: {
        appetizers: [],
        mains: [],
        desserts: [],
    },
    get appetizers()  {
        return this._courses.appetizers;
    },
    get mains() {
        return this._courses.mains;
    },
    get desserts() {
        return this._courses.desserts;
    },
    set appetizers(apps) {
        this._courses.appetizers = apps;
    },
    set mains(main) {
        this._courses.mains = main;
    },
    set desserts(dess) {
        this._courses.desserts = dess;
    },
    get courses() {
        return _courses;
    },
    addDishToCourse(courseName, dishName, dishPrice) {
        const dish = {
            name: dishName,
            price: dishPrice,
        };
        return this._courses[courseName].push(dish);
    },
    getRandomDishFromCourse(courseName) {
        const dishes = this._courses[courseName];
        const randomIndex = Math.floor(Math.random() * dishes.length);
        return dishes[randomIndex];
    },
    generateRandomMeal() {
        const appetizer = this.getRandomDishFromCourse('appetizers');
        const main = this.getRandomDishFromCourse('mains');
        const dessert = this.getRandomDishFromCourse('desserts');
        const totalPrice = appetizer.price + main.price + dessert.price;
        return `Your meal is ${appetizer.name}, ${main.name}, and ${dessert.name}. The total price is ${totalPrice}.`;
    }
}

menu.addDishToCourse('appetizers', 'salad', 4.00);
menu.addDishToCourse('appetizers', 'soup', 3.00);
menu.addDishToCourse('appetizers', 'wings', 8.00);

menu.addDishToCourse('mains', 'steak', 18.00);
menu.addDishToCourse('mains', 'salmon', 17.00);
menu.addDishToCourse('mains', 'chicken', 16.00);

menu.addDishToCourse('desserts', 'ice cream', 5.00);
menu.addDishToCourse('desserts', 'cake', 6.00);
menu.addDishToCourse('desserts', 'cookie', 4.00);

let meal = menu.generateRandomMeal()
console.log(meal)