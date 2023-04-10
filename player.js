// player.js

const urlParams = new URLSearchParams(window.location.search);
const playerId = urlParams.get("id");

fetch("teams.json")
  .then(response => response.json())
  .then(data => {
    const players = data.teams
      .flatMap(team => team.players)
      .find(players => players.id === playersId);

    const playerDetailsContainer = document.querySelector("#player-details");

    const playerDetailsTemplate = `
      <div class="player-details">
      <div class="img">
        <img class="player-photo" src="${players.photo}">
      </div>
        <h1 class="player-name">Name:${players.fullName}</h1>
        <p class="player-team">Team:${players.team}</p>
        <p class="player-price">Price:${players.price}</p>
        <p class="player-status">PlayingStatus:${players.playingStatus}</p>
        <p class="player-role">Role${players.role}</p>
      </div>
    `;

    playerDetailsContainer.innerHTML = playerDetailsTemplate;
  })
  .catch(error => console.error(error));


