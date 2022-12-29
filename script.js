// Exercises XP Ninja

// Exercise 1 : Checking The BMI

// 1. Create two objects, each object should hold a person’s details.
// 2. Each object should also have a key which value is a function (ie. A method), that calculates the Body Mass Index (BMI) of each person
const person1 = {
    fullName: 'John Smith',
    mass: 100,
    height: 1.87,
    bmi: function() {
        return this.mass / Math.pow(this.height, 2)
    }
}

const person2 = {
    fullName: 'Emma Smith',
    mass: 65,
    height: 1.67,
    bmi: function() {
        return this.mass / Math.pow(this.height, 2)
    }
}

// 3. Outside of the objects, create a JS function that compares the BMI of both objects.
function compareBMI(p1, p2) {
    return p1.bmi() > p2.bmi() ? p1 : p2
}
// 4. Display the name of the person who has the largest BMI.
console.log(`${compareBMI(person1, person2).fullName} has the largest BMI`)


// Exercise 2 : Grade Average

// 1. Create a function called findAvg(gradesList) that takes an argument called gradesList.
// 2. Your function must calculate and console.log the average.
// 3. If the average is above 65 let the user know they passed
// 4.If the average is below 65 let the user know they failed and must repeat the course.
// Bonus Try and split parts 1,2 and 3,4 of this exercise to two separate functions.

function findAvg(gradesList) {
    let total = 0
    for (const grade of gradesList)
        total += grade
    
    return total / gradesList.length
}

function checkAvg(avg) {
    if(avg > 65)
        console.log(`You passed! Your average is ${avg}`)
    else
        console.log(`Your average is ${avg} so you failed and you have to repeat the course.`)
}

// Test
const grades = [76, 90, 50, 72, 38, 99, 87, 80]
const avg = findAvg(grades)
checkAvg(avg)