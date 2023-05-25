document.getElementById('textForm').addEventListener('submit', function(event) {
  event.preventDefault(); // ページのリロードを防止

  var text = document.getElementById('text').value;
  var color = document.getElementById('color').value;

  var result = document.getElementById('result');
  result.textContent = text;
  result.style.color = color;
});
