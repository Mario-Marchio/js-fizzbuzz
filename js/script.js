console.log(`JS OK`);

for( let i = 1 ; i <= 100 ; i++){
    if( i % 3 === 0 ){
        i = `Fizz`;
        console.log(i);
    }
     else if( i % 5 === 0 ){
        i = `Buzz`;
        console.log(i);

    }
    else if( i % 3 === 0 && i % 5 ===0 ){
        i = `FizzBuzz`;
        console.log(i);
    }
    else{
        console.log(i);
    }
}