fizzbuzz();
function fizzbuzz() {
    let i = 1;
    while (i <= 100) {
        if (Number.isInteger(i / 3) && Number.isInteger(i / 5)) {
            console.log("FizzBuzz")
            i = i+1
        }
        else if (Number.isInteger(i / 3)) {
            console.log("Fizz")
            i = i+1
        }
        else if (Number.isInteger(i / 5)) {
            console.log("Buzz")
            i = i+1
        }
        else {
            console.log(i);
            i = i+1;
        }
    }
}