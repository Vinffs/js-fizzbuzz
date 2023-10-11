for (let i = 1; i <= 100; i++) {
  let box = document.createElement('div')

  if (i % 15 === 0) {
    box.classList.add('bgFizzBuzz')
    box.innerText = `FizzBuzz`;
  } else if (i % 3 === 0) {
    box.classList.add('bgFizz')
    box.innerText = `Fizz`;
  } else if (i % 5 === 0) {
    box.classList.add('bgBuzz')
    box.innerText = `Buzz`;
  } else {
    box.classList.add('bgNumber')
    box.innerText = `${i}`;
  }
  box.classList.add('numBox', 'd-flex', 'justify-content-center', 'align-items-center', 'fw-bold');
  document.getElementById('fizzBuzzContainer').appendChild(box)
}
