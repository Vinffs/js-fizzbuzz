let i, result;

for (i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    let divFizzBuzz = document.createElement('div')
    divFizzBuzz.classList.add('numBox', 'bgFizzBuzz')
    document.getElementById('fizzBuzzContainer').appendChild(divFizzBuzz);
  } else if (i % 3 === 0) {
    let divFizz = document.createElement('div')
    divFizz.classList.add('numBox', 'bgFizz')
    document.getElementById('fizzBuzzContainer').appendChild(divFizz);
  } else if (i % 5 === 0) {
    let divBuzz = document.createElement('div')
    divBuzz.classList.add('numBox', 'bgBuzz')
    document.getElementById('fizzBuzzContainer').appendChild(divBuzz);
  } else {
    let divNumber = document.createElement('div')
    divNumber.classList.add('numBox', 'bgNumber')
    document.getElementById('fizzBuzzContainer').appendChild(divNumber);
  }

}
