const warriorsGames = [{
    awayTeam: {
      team: 'Golden State',
      points: 119,
      isWinner: true
    },
    homeTeam: {
      team: 'Houston',
      points: 106,
      isWinner: false
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 105,
      isWinner: false
    },
    homeTeam: {
      team: 'Houston',
      points: 127,
      isWinner: true
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 126,
      isWinner: true
    },
    awayTeam: {
      team: 'Houston',
      points: 85,
      isWinner: false
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 92,
      isWinner: false
    },
    awayTeam: {
      team: 'Houston',
      points: 95,
      isWinner: true
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 94,
      isWinner: false
    },
    homeTeam: {
      team: 'Houston',
      points: 98,
      isWinner: true
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 115,
      isWinner: true
    },
    awayTeam: {
      team: 'Houston',
      points: 86,
      isWinner: false
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 101,
      isWinner: true
    },
    homeTeam: {
      team: 'Houston',
      points: 92,
      isWinner: false
    }
  }
]

// const ulParent = document.createElement('ul');
// for (let game of warriorsGames){
//   const {awayTeam, homeTeam} = game;
//   const {team:aTeam, points:aPoints} = awayTeam;
//   const {team:hTeam, points:hPoints} = homeTeam;
//   const gameLi = document.createElement('li');
//   const teamNames = `${aTeam} @ ${hTeam}`;
//   let scoreLine;
//   if(aPoints>hPoints){
//     scoreLine = `<b>${aPoints}</b>-${hPoints}`;
//   } else{
//     scoreLine = `${aPoints}-<b>${hPoints}</b>`;
//   }
//   const warriors = hTeam === 'Golden State'?homeTeam:awayTeam;
//   gameLi.classList.add(warriors.isWinner?'win':'loss');
//   gameLi.innerHTML = `${teamNames} ${scoreLine}`
//   ulParent.appendChild(gameLi);
// }
// document.body.prepend(ulParent);


const makeChart = (games,targetTeam)=>{
const ulParent = document.createElement('ul');
for (let game of games){
  const gameLi = document.createElement('li');
  gameLi.innerHTML = getScoreLine(game);
  gameLi.classList.add(isWinner(game,targetTeam)?'win':'loss');
  ulParent.appendChild(gameLi);
}
return ulParent;
}

const isWinner = ({awayTeam, homeTeam},targetTeam)=>{
  const target = homeTeam.team === targetTeam?homeTeam:awayTeam;
  return target.isWinner;
}

const getScoreLine = ({awayTeam, homeTeam})=> {
  const {team:aTeam, points:aPoints} = awayTeam;
  const {team:hTeam, points:hPoints} = homeTeam;
  const teamNames = `${aTeam} @ ${hTeam}`;
  let scoreLine;
  if(aPoints>hPoints){
    scoreLine = `<b>${aPoints}</b>-${hPoints}`;
  } else{
    scoreLine = `${aPoints}-<b>${hPoints}</b>`;
  }
  return `${teamNames} ${scoreLine}`;
}

const gsSection = document.querySelector('#gs');
const chart1 = makeChart(warriorsGames, 'Golden State');
gsSection.appendChild(chart1);

const hrSection = document.querySelector('#hr');
const chart2 = makeChart(warriorsGames, 'Houston');
hrSection.appendChild(chart2);

const form = document.querySelector('#f');
form.addEventListener('submit', function(e){
  e.preventDefault();
  const input1 = document.querySelector('#h');
  const input2 = document.querySelector('#g');
  const home = document.querySelector('#dd');
  const homeTeam = home.value.trim();
  const awayTeam = homeTeam === 'Golden State'? 'Houston':'Golden State';
  const awayPoints = parseInt(input1.value.trim());
  const homePoints = parseInt(input2.value.trim());
  const newGame = {
    awayTeam: {
      team: awayTeam,
      points: awayPoints,
      isWinner: awayPoints>homePoints
    },
    homeTeam: {
      team: homeTeam,
      points: homePoints,
      isWinner: homePoints>awayPoints
    }
  };
  warriorsGames.push(newGame);
  updateCharts();
form.reset();
});

const updateCharts = () => {
  gsSection.innerHTML = " ";
  hrSection.innerHTML = " ";
  const chart1 = makeChart(warriorsGames, 'Golden State');
  gsSection.appendChild(chart1);
  const chart2 = makeChart(warriorsGames, 'Houston');
  hrSection.appendChild(chart2);
}
