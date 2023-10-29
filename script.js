document.addEventListener("DOMContentLoaded", function () {
  let helpTimeout; // Declare this variable at the top of your script

  setTimeout(function () {
  document.getElementById('splashScreen').classList.add('hidden');
  document.getElementById('console').classList.remove('hidden');
  
  // Add the welcome message to the 'output' div
  document.getElementById('output').innerHTML += "Welcome to ksnarf.dev OS. This interface will allow you to search, execute and download data related to ksnarf.dev services and builds. We hope this simplified interface helps show you our approach to services; while we may not be the flashiest, what we build works (or at least so we hope).<br>Here are some of the commands you can use:<br>fivem = to see a list of active and in-progress fivem modules<br>";
  
  // Set the focus to the input field after the welcome message
  document.getElementById('input').focus();
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
      
      if (command === 'fivem') {
        let projectLinks = 'Fivem Projects:<br>';
        fivemProjects.forEach(project => {
            projectLinks += `<a href="${project.url}" target="_blank" style="color:green;">${project.name}</a><br>`;
        });
        output.innerHTML += projectLinks;
    }

      }
  });
});

document.querySelectorAll('.command-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const command = e.target.getAttribute('data-command');
        document.getElementById('input').value = command;

        // Trigger the command - can be modified based on your requirements
        if (command === 'fivem') {
            document.getElementById('output').innerHTML += 'List of active and in-progress fivem modules<br>'; 
        }
        if (command === 'ls'
        // Add more command checks as needed
    });
});

const fivemProjects = [
    {
        name: "Project 1",
        url: "https://example1.com"
    },
    {
        name: "Project 2",
        url: "https://example2.com"
    },
    // ... add more projects as needed
];