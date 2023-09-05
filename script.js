document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    document.getElementById('splashScreen').classList.add('hidden');
    document.getElementById('console').classList.remove('hidden');
    document.getElementById('input').focus();
  }, 3000);

  const input = document.getElementById('input');
  const output = document.getElementById('output');

  input.addEventListener('keydown', function (e) {
    if (e.key === "Enter") {
      e.preventDefault();
      const command = input.value;
      input.value = '';

      if (command === 'help') {
        output.innerHTML += 'Available commands: help<br>';
      } else {
        output.innerHTML += 'Unknown command<br>';
      }
    }
  });
});