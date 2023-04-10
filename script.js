const teamsContainer = document.getElementById("teams-container");

fetch("teams.json")
  .then(response => response.json())
  .then(data => {
    data.teams.forEach(team => {
      const teamCard = document.createElement("div");
      teamCard.className = "team-card";

      const teamLogo = document.createElement("img");
      teamLogo.className = "team-logo";
      teamLogo.src = `${team.icon}`;
      teamCard.appendChild(teamLogo);

      const teamName = document.createElement("div");
      teamName.className = "team-name";
      teamName.textContent = team.name;
      teamCard.appendChild(teamName);

      teamCard.addEventListener("click", () => {
        window.location.href = `team.html?team=${encodeURIComponent(
          team.name
        )}`;
      });

      teamsContainer.appendChild(teamCard);
    });
  })
  .catch(error => console.error(error));

// search
const allData = $.get("teams.json")

// Customise your search function here, perhaps use a RegEx
function match(a, b) {
  return a.toLowerCase().startsWith(b.toLowerCase())
}

// This just filters the data using the search function above
function getData(search) {
  const data = allData.responseJSON && allData.responseJSON.team|| [];
  return data.reduce(
    (acc, s) => match(s.firstName, search) ? (acc || []).concat(s) : acc,
    []
  );
}

// Abstracting this into another function to keep the code clean
function renderteams(team) {
  return `
    <div class="profile">
      <img src="${team.icon}">
      <div id="display">
        <h1 id="name" style="font-size:50px">${team.Name}</h1>
      </div>
    </div>
  `;
}

// Get results when a search is made
// Could use `$('#search').on('keyup', function ...)` for better response, instead of waiting
//   for the user to press ENTER
$('#search').change(function(e) {
  $('#teams-container').html(getData($(e.currentTarget).val()).map(renderteams).join())
})