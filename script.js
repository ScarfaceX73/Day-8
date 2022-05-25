// 1. https://github.com/rvsp/typescript-oops/blob/master/Practice/Movie.md
// Class - Movie

class Movie {
    constructor(title, studio, rating) {
        this.getTitle = title;
        this.getStudio = studio;
        this.getRating = rating;
    }

    get title() {
        return this.getTitle;
    }

    get studio() {
        return this.getStudio;
    }

    get rating() {
        return this.getRating;
    }

    set rating(x) {
        return this.getRating = x;
    }
}
let movies = [new Movie("Fight Club", "Fox 2000 Pictures", "R"),
new Movie("Titanic", "Paramount Pictures", "PG13"),
new Movie("Aladdin", "Walt Disney", "PG"),
new Movie("Avengers", "Marvel", "PG13"),
new Movie("Avatar", "20th Century Fox", "R")]


let array = [];
let array2 = [];
for (let i = 0; i < movies.length; i++) {
    if ((movies[i].rating) == "PG13") {
        array.push(movies[i].title)
        array2.push(movies[i].studio)
    }

}
console.log(array)
console.log(array2)

// Result: ['Titanic', 'Avengers']   // array
//         ['Paramount Pictures', 'Marvel']   // array2
// ===============================================================================================================================

// 2. https://github.com/rvsp/typescript-oops/blob/master/Practice/class-circle.md
// Circle - Class

class Circle {
    constructor(radius, color) {
        this.getRadius = radius;
        this.getColor = color;
    }
    get radius() {
        return this.getRadius;
    }
    get color() {
        return this.getColor;
    }

    get area() {
        return this.Area();
    }
    Area() {
        return (Math.floor(3.14 * (this.getRadius * this.getRadius)));
    }
    get circum() {
        return this.Circum();
    }
    Circum() {
        return (Math.floor(6.28 * (this.getRadius)));
    }
}
let getCircle = new Circle(7, "blue")
console.log(getCircle.Circum())
console.log(getCircle.Area())
console.log(getCircle.color)

// Result: 43   //Circumference
//         153  //Area
//         blue // Color

// ===============================================================================================================================

// 3. Write a “person” class to hold all the details.

class Person {
    constructor(name, age, gender, education, occupation, maritalStatus) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.education = education;
        this.occupation = occupation;
        this.maritalStatus = maritalStatus;
    }
}
// ===============================================================================================================================

// 4. write a class to calculate uber price.

class uberPrice {
    constructor(distance, price) {
        this._distance = distance;
        this._price = price;
    }

    get amount() {
        return this._price * this._distance;
    }
}

let getUber = new uberPrice(11, 12)

console.log(getUber.amount);

// Result: 132
