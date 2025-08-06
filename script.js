    console.log("=== Task 1: Grade Checker ===");

    let score = 85; // I Can Change this value to test
    if (score >= 90) {
      console.log("A");
    } else if (score >= 80) {
      console.log("B");
    } else if (score >= 70) {
      console.log("C");
    } else {
      console.log("F");
    }

    console.log("\n=== Task 2: Even Numbers from 1 to 10 ===");

    for (let i = 1; i <= 10; i++) {
      if (i % 2 === 0) {
        console.log(i);
      }
    }

    console.log("\n=== Task 3: FizzBuzz from 1 to 20 ===");

    for (let i = 1; i <= 20; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        console.log("fizzBuzz");
      } else if (i % 3 === 0) {
        console.log("fizz");
      } else if (i % 5 === 0) {
        console.log("buzz");
      } else {
        console.log(i);
      }
    }
//array