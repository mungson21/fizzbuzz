// var i = 1

// while(i < 21) {
//     console.log(i);
//     i++;

//     if (i==2) {
//         console.log('test');
//     } else {
        
//     }
// } 



// for(var i = 1; i < 20; i++) {
//     console.log(i);
//     // var fizz = i % 3 == 0;

//     if(i==(i % 3 == 0)) {
//         console.log('test');
//     } else {
//     }
// }

// var i = 1;
// var buzz = i % 5 == 0;
// var fizzBuzz = fizz && buzz;
// var fizz = i % 3 == 0;


// while(i<41) {
//     console.log(i);
//     i++;

    
// }

// for (i=1; i<21; i++) {
//     if (i % 3 == 0) {
//         console.log('Fizz')
//     } else if (i % 5 == 0) {
//         console.log('Buzz')
//     } else if (i % 3 && 5 == 0) {
//         console.log('FizzBuzz')
//     } else {
//         console.log(i)
//     }
// }

for (i=1; i<101; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log('FizzBuzz')
    } else if (i % 3 == 0) {
        console.log('Fizz')
    } else if (i % 5 == 0) {
        console.log('Buzz')
    } else {
        console.log(i)
    }
}