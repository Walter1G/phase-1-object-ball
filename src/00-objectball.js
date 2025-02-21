function gameObject() {
    return {
      home: {
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: {
          "Alan Anderson": {
            number: 0,
            shoe: 16,
            points: 22,
            rebounds: 12,
            assists: 12,
            steals: 3,
            blocks: 1,
            slamDunks: 1,
          },
          "Reggie Evans": {
            number: 30,
            shoe: 14,
            points: 12,
            rebounds: 12,
            assists: 12,
            steals: 12,
            blocks: 12,
            slamDunks: 7,
          },
          "Brook Lopez": {
            number: 11,
            shoe: 17,
            points: 17,
            rebounds: 19,
            assists: 10,
            steals: 3,
            blocks: 1,
            slamDunks: 15,
          },
          "Mason Plumlee": {
            number: 1,
            shoe: 19,
            points: 26,
            rebounds: 12,
            assists: 6,
            steals: 3,
            blocks: 8,
            slamDunks: 5,
          },
          "Jason Terry": {
            number: 31,
            shoe: 15,
            points: 19,
            rebounds: 2,
            assists: 2,
            steals: 4,
            blocks: 11,
            slamDunks: 1,
          },
        },
      },
      away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
          "Jeff Adrien": {
            number: 4,
            shoe: 18,
            points: 10,
            rebounds: 1,
            assists: 1,
            steals: 2,
            blocks: 7,
            slamDunks: 2,
          },
          "Bismak Biyombo": {
            number: 0,
            shoe: 16,
            points: 12,
            rebounds: 4,
            assists: 7,
            steals: 7,
            blocks: 15,
            slamDunks: 10,
          },
          "DeSagna Diop": {
            number: 2,
            shoe: 14,
            points: 24,
            rebounds: 12,
            assists: 12,
            steals: 4,
            blocks: 5,
            slamDunks: 5,
          },
          "Ben Gordon": {
            number: 8,
            shoe: 15,
            points: 33,
            rebounds: 3,
            assists: 2,
            steals: 1,
            blocks: 1,
            slamDunks: 0,
          },
          "Brendan Haywood": {
            number: 33,
            shoe: 15,
            points: 6,
            rebounds: 12,
            assists: 12,
            steals: 22,
            blocks: 5,
            slamDunks: 12,
          },
        },
      },
    };
  }
  
  
  function homeTeamName() {
    const gameData = gameObject();
    return gameData.home.teamName;
  }

  
function numPointsScored(playerName) {
    const gameData = gameObject();
    for (const team in gameData) {
      if (gameData[team].players[playerName]) {
        return gameData[team].players[playerName].points;
      }
    }
    return null; 
  }
  
  
  function shoeSize(playerName) {
    const gameData = gameObject();
    for (const team in gameData) {
      if (gameData[team].players[playerName]) {
        return gameData[team].players[playerName].shoe;
      }
    }
    return null; 
  }
  
  
  function teamColors(teamName) {
    const gameData = gameObject();
    for (const team in gameData) {
      if (gameData[team].teamName === teamName) {
        return gameData[team].colors;
      }
    }
    return null; 
  }
  
 
  function teamNames() {
    const gameData = gameObject();
    return [gameData.home.teamName, gameData.away.teamName];
  }
  
  // Function to get an array of player jersey numbers for a team
  function playerNumbers(teamName) {
    const gameData = gameObject();
    const team = gameData.home.teamName === teamName ? 'home' : 'away';
    const players = gameData[team].players;
    return Object.values(players).map((player) => player.number);
  }
  
  
  function playerStats(playerName) {
    const gameData = gameObject();
    for (const team in gameData) {
      if (gameData[team].players[playerName]) {
        return gameData[team].players[playerName];
      }
    }
    return null; 
  }
  
  
  function bigShoeRebounds() {
    const gameData = gameObject();
    let largestShoeSize = -1;
    let playerWithLargestShoe = null;
    
    for (const team in gameData) {
      const players = gameData[team].players;
      for (const playerName in players) {
        const player = players[playerName];
        if (player.shoe > largestShoeSize) {
          largestShoeSize = player.shoe;
          playerWithLargestShoe = player;
        }
      }
    }
    
    return playerWithLargestShoe ? playerWithLargestShoe.rebounds : null;
  }
  
  
  console.log(numPointsScored("Alan Anderson"));
  console.log(shoeSize("Alan Anderson"));
  console.log(teamColors("Brooklyn Nets"));
  console.log(teamNames());
  console.log(playerNumbers("Brooklyn Nets"));
  console.log(playerStats("Alan Anderson")); 
  console.log(bigShoeRebounds()); 
  const gameData = gameObject();
  console.log(gameData);