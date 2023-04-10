const teamDetailsContainer = document.getElementById("team-details");

const urlParams = new URLSearchParams(window.location.search);
const teamName = urlParams.get("team");

fetch("teams.json")
  .then(response => response.json())
  .then(data => {
    const team = data.teams.find(team => team.name === teamName);

    const teamDetails = document.createElement("div");

    const teamIcon = document.createElement("img");
    teamIcon.src = `${team.icon}`;
    teamDetails.appendChild(teamIcon);

    const teamNameElement = document.createElement("h1");
    teamNameElement.textContent = team.name;
    teamDetails.appendChild(teamNameElement);

    const playerCountElement = document.createElement("p");
    playerCountElement.textContent = `Player Count: ${team.players.length}`;
    teamDetails.appendChild(playerCountElement);

    const topBatsmanElement = document.createElement("p");
    topBatsmanElement.textContent = `Top Batsman: ${team.topBatsman}`;
    teamDetails.appendChild(topBatsmanElement);

    const topBowlerElement = document.createElement("p");
    topBowlerElement.textContent = `Top Bowler: ${team.topBowler}`;
    teamDetails.appendChild(topBowlerElement);

    const championshipWonCountElement = document.createElement("p");
    championshipWonCountElement.textContent = `Championship Won Count: ${team.championshipsWon}`;
    teamDetails.appendChild(championshipWonCountElement);

    const playersContainer = document.createElement("div");
    playersContainer.className = "players-container";

    team.players.forEach(player => {
      const playerCard = document.createElement("div");
      playerCard.className = "player-card";

      const playerPhoto = document.createElement("img");
      playerPhoto.className = "player-photo";
      playerPhoto.src = `${player.photo}`;
      playerCard.appendChild(playerPhoto);

      const playerName = document.createElement("div");
      playerName.className = "player-name";
      playerName.textContent = player.fullName;
      playerCard.appendChild(playerName);
      
      const playerTeam = document.createElement("div");
      playerTeam.className = "player-team";
      playerTeam.textContent = teamName;
      playerCard.appendChild(playerTeam);

      const playerPrice = document.createElement("div");
      playerPrice.className = "player-price";
      playerPrice.textContent = "Price: " + player.price;
      playerCard.appendChild(playerPrice);

      const playerStatus = document.createElement("div");
      playerStatus.className = "player-status";
      playerStatus.textContent = "Status: " + player.playingStatus;
      playerCard.appendChild(playerStatus);

      const playerRole = document.createElement("div");
      playerRole.className = "player-role";
      playerRole.textContent = "Role: " + player.role;
      playerCard.appendChild(playerRole);

      playerCard.addEventListener("click", function() {
        window.location.href = "player.html?id=" + player.id;
      });
      

      playersContainer.appendChild(playerCard);
    });

    teamDetails.appendChild(playersContainer);
    teamDetailsContainer.appendChild(teamDetails);
  })
  .catch(error => console.error(error));
