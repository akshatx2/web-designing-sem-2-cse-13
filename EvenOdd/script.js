function checkEvenOdd() {
  const input = document.getElementById('numInput').value;
  const result = document.getElementById('result');

  if (input === '') {
    result.textContent = 'Please enter a number.';
    result.className = '';
    return;
  }

  const num = parseInt(input);

  if (num % 2 === 0) {
    result.textContent = num + ' is Even ';
    result.className = 'even';
  } else {
    result.textContent = num + ' is Odd ';
    result.className = 'odd';
  }
}