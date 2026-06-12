
const colorBox = document.getElementById('colorBox');
const buttons = document.querySelectorAll('.color-btn');

buttons.forEach(button => {
  button.addEventListener('click', function() {
    const targetColor = this.getAttribute('data-color');
    colorBox.style.backgroundColor = targetColor;
  });
});
