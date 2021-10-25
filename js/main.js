const grid = document.querySelector('.container .grid');

for (let i = 1; i <=100; i++) {
    const box = document.createElement('div');
    box.classList.add('box');
    if(i % 3 == 0 && i % 5 == 0) {
        box.append('fizzbuzz');
        box.classList.add('box-15');
    }
    else if (i % 3 == 0) {
        box.append('fizz');
        box.classList.add('box-3');
    }
    else if (i % 5 == 0) {
        box.append('buzz');
        box.classList.add('box-5');
    }
    else {
        box.append(i)
    }
    grid.append(box);
}