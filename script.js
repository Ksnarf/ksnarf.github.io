document.addEventListener("DOMContentLoaded", function () {
  let helpTimeout; // Declare this variable at the top of your script

  setTimeout(function () {
    document.getElementById('splashScreen').classList.add('hidden');
    document.getElementById('console').classList.remove('hidden');
    document.getElementById('input').focus();
    
    //Welcome Message
    document.getElementByID('output').innerHTML += "Welcome to ksnarf.dev OS. This interface will allow you to search existing services, execute programs to get more data on each service and see what we are currently working on. We hope this simplified interface helps show you our approach to what we do; while we may not be the flashiest, what we build works <br> Here are some of the commands you can use:<br>fivem= to see a list of active and in-progress fivem modules<br>";
    
    
    // Set a new timeout for the help message
    helpTimeout = setTimeout(function() {
      document.getElementById('output').innerHTML += "Type 'help' to get started or enter the name of the program you want to run.<br>";
    }, 3000);
  }, 3000);

  const input = document.getElementById('input');
  const output = document.getElementById('output');

  input.addEventListener('keydown', function (e) {
    // Cancel the help message timeout if the user starts typing
    clearTimeout(helpTimeout);

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