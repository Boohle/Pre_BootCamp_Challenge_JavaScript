// TASK 1 Answer...........................................................................

// x = 0
// y = 1
// Print the value of x
// Print the value of y
// x = x + 3
// y = y + x
// Print the value of x
// Print the value of y


// answer........................................................................................
// part 1

    let x = 0;
    let y = 1;

    console.log(x);
    console.log(y);

// Part 2

    let X = x + 3;
    let Y = y + X;

    console.log(X);
    console.log(Y);


// TASK 2 Question........................................................................

// x = 1 + 1 * 2
// y = (1 + 1) * 2
// z = 1 + ( 1 * 2 )
// a =  1 + 1 * 2 / 2
// b =  (1 + 1 * 2 ) /  2

// answer................................................................................

    let Resultx = 1 + 1 * 2;
    let Resulty = (1 + 1) * 2;
    let Resultz = 1 + ( 1 * 2 );
    let Resulta =  1 + 1 * 2 / 2;
    let Resultb =  (1 + 1 * 2 ) /  2;

    console.log(Resultx);
    console.log(Resulty);
    console.log(Resultz);
    console.log(Resulta);
    console.log(Resultb);

// TASK 3 Question.........................................................................
// Write a function that takes 2 numbers as input. If either of the numbers is 65, OR if the sum of the numbers is 65 then return true. Otherwise return false

// Answer...............................................................................

    const always = 65;
    let numOne = 6;
    let numTwo = 45;

    let sum = numOne + numTwo ;

    if (sum === always || numOne === always || numTwo === always){
        console.log("true");
    }else{
        console.log("false");
    };




// TASK 4 Question...............................................................
// Write a function that takes 2 numbers as input. If either of the numbers is 3 AND the sum of the numbers contains a 3 then return true. Otherwise return false

// Answer...............................................................................
    const alwaysNow = 3;
    let InputOne = 3;
    let InputTwo = 0;

    let Newsum = InputOne + InputTwo ;

    if (InputOne === alwaysNow && Newsum === alwaysNow ){
        console.log("true");
    }else if (InputTwo === alwaysNow && Newsum === alwaysNow ){
        console.log("true");
    }else {
        console.log("false");
    };



// TASK 5 Question...............................................................
// Write a function that takes in three numbers. These numbers represent the lengths of the sides of a triangle. The function should return the area of a triangle.

// Answer...............................................................................
    let b = 4;
    let h = 4;

    let area = (b*h)/2;
    console.log(area);




// TASK 6 Question...............................................................
// White a function that takes in three numbers and returns the maximum number. Do this without using any builtin methods. Write your own logic from scratch.

// Bonus: How can you change the code so it can take in any number of numbers?

// Answer...............................................................................

    const array = [37,500,15];

    array.sort();

    array.sort((a,b) => a-b);

    const max = array[array.length-1];
    console.log(max);

  


// TASK 7 Question...............................................................
// Write a function that takes in a number representing the temperature in Celsius and returns the temperature in Fahrenheit. Write another function that does the opposite (Fereignheit to Celsius)

// Answer...............................................................................
// Part 1
        function ConvertToF(celsius) 
        {
        let TempC = celsius;
        let ToFar = TempC * 9 / 5 + 32;
        let msg = TempC + '\xB0C is ' + ToFar + ' \xB0F.';
            console.log(msg);
        }

        // Part 2
        function ConvertToC(fahrenheit) 
        {
        var TempF = fahrenheit;
        var ToCels = (TempF - 32) * 5 / 9;
        var NewMsg = TempF + '\xB0F is ' + ToCels + '\xB0C.';
            console.log(NewMsg);
        } 
        ConvertToF(30);
        ConvertToC(90);





// TASK 8 Question...............................................................
// Make a function to convert any number into hours and minutes. (For example, 71 will become “1 hour, 11 minutes”; 133 will become “2 hours, 13 minutes”.)

// Answer...............................................................................
    function timeConverter(n) {
        let num = 71;
        let hours = (num / 60);
        let remainhours = Math.floor(hours);
        let minutes = (hours - remainhours) * 60;
        let remainingminutes = Math.round(minutes);
        return num + " minutes = " + remainhours + " hour(s) and " + remainingminutes + " minute(s).";
        } 
        
        console.log(timeConverter());




// TASK 9 Question...............................................................
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.

// Answer...............................................................................
    let numbs = function (n) {
        let sum = 0;
        for (let i = 1; i < n; i++) {
            if ((i % 3 == 0) || (i % 5 == 0)) {
                sum += i;
            }
        }
    };

    numbs(10);

    console.log(sum);



// TASK 10 Question...............................................................
// Write a function that takes in a string and then prints out all the vowels in the string. Make sure it can deal with capital letters and small letters.

// Answer...............................................................................
    let Alpha = "aeiouAEIOU";
    let words = "hellO bootcampers";

    let results = "";
    for (i = 0; i < words.length; i++){
        if(Alpha.indexOf(words[i]) >= 0) results += words[i];

    }
    console.log(results);




// TASK 11 Question...............................................................
// Make a function that takes two strings as input, and outputs the common characters/letters that they 

// Answer...............................................................................
function CommonAlphas(string1, string2) {
    let string1ToArray = Array.from(string1);
    let string2ToArray = Array.from(string2);

let SomeLet = string2ToArray.filter(value => {
    return string1ToArray.indexOf(value) != -1;
});

console.log(`Common letters: ${SomeLet}`);
}

CommonAlphas('bootstrap', 'boocampers');

   

// TASK 12 Question...............................................................
// This task isn’t compulsory but we’ll be impressed if you do it.

// Can you make a user interface for each of the previous tasks? You’ll need HTML and CSS to do it.

// Answer...............................................................................