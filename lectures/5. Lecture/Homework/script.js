var result;

for(var i = 0; i < 100; i++) {
    result = '';

    if (!(i % 3)) {
        result += 'Fizz';
    }

    if (!(i % 5)) {
        result += 'Buzz';
    }

    console.log(result || i);
}