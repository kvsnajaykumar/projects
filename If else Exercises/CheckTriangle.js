function checkTriangleType(side1, side2, side3) {
    if (side1 === side2 && side2 === side3) {
        return "Equilateral Triangle";
    } else if (side1 === side2 || side1 === side3 || side2 === side3) {
        return "Isosceles Triangle";
    } else {
        return "Scalene Triangle";
    }
}

console.log(checkTriangleType(5, 5, 5));
console.log(checkTriangleType(3, 4, 4));
console.log(checkTriangleType(7, 4, 9));