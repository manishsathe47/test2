const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const teamData = {};

  for (let [key, value] of formData.entries()) {
    if (key.startsWith('player-')) {
      if (!teamData.players) {
        teamData.players = [];
      }
      const playerKey = key.replace('player-', '');
      if (teamData.players.length === 0) {
        teamData.players.push({});
      }
      teamData.players[0][playerKey] = value;
    } else {
      teamData[key] = value;
    }
  }

  const data = JSON.stringify(teamData);
  fetch('teams.json', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: data
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
});
