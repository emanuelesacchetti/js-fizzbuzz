const containerDom = document.querySelector('.container');


for (let i = 1; i <= 100; i++) {

    if (i % (3 * 5) == 0){
        const squareDom = document.createElement('div');
        squareDom.classList.add('square');
        squareDom.classList.add('bg-red');
        squareDom.append('FizzBuzz');
        containerDom.append(squareDom);      
    } else if (i % 3 == 0) {
        const squareDom = document.createElement('div');
        squareDom.classList.add('square');
        squareDom.classList.add('bg-green');
        squareDom.append('Fizz');
        containerDom.append(squareDom);
    } else if (i % 5 == 0){
        const squareDom = document.createElement('div');
        squareDom.classList.add('square');
        squareDom.classList.add('bg-yellow');
        squareDom.append('Buzz');
        containerDom.append(squareDom);
    } else {
        const squareDom = document.createElement('div');
        squareDom.classList.add('square');
        squareDom.classList.add('bg-blue');
        squareDom.append(i);
        containerDom.append(squareDom);
    }
   
}
