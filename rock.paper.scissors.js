let scores = JSON.parse(localStorage.getItem('score')) || { wins: 0, losses: 0, ties: 0 };

updateScoreElement();


function playGame(playerMove) {
  const systemMove = selectSystemMove();
    
  let result = '';
  
  if (playerMove === 'scissors') {
      if (systemMove === 'rock') {
        result = 'you lose';
    } else if (systemMove === 'paper') {
        result = 'you win';
    } else if (systemMove === 'scissors') {
        result = 'Tie';
    }

  } else if (playerMove === 'paper') {
    if (systemMove === 'rock') {
        result = 'you win';
    } else if (systemMove === 'paper') {
        result = 'Tie';
    } else if (systemMove === 'scissors') {
        result = 'you lose';
    }
  } else if (playerMove === 'rock') {
    if (systemMove === 'rock') {
        result = 'Tie';
    } else if (systemMove === 'paper') {
        result = 'you lose';
    } else if (systemMove === 'scissors') {
        result = 'you win';
    }
  }
  
  if(result === 'you win') {
    scores.wins += 1;
  } else if (result === 'you lose') {
    scores.losses += 1;
  } else if (result === 'Tie') {
    scores.ties += 1;
  }
    localStorage.setItem('score', JSON.stringify(scores));

    updateScoreElement();

    document.querySelector('.js-result').innerHTML = result;
    
    document.querySelector('.js-moves').innerHTML = `You 
<img src="images/${playerMove}-emoji.png" class="move-icon"> 
<img src="images/${systemMove}-emoji.png" class="move-icon">
computer`;

  }

  function updateScoreElement() {
    document.querySelector('.js-scores').innerHTML = `Wins: ${scores.wins}, Losses: ${scores.losses}, Ties: ${scores.ties}`;

  }

  function selectSystemMove() {
      const randomNum = Math.random();

      let systemMove = '';

      if (randomNum >= 0 && randomNum < 1/3) {
          systemMove = 'rock';
      } else if (randomNum >= 1/3 && randomNum < 2/3) {
          systemMove = 'paper';
      } else if (randomNum >= 2/3 && randomNum < 1) {
          systemMove = 'scissors';
      }

      return systemMove;
  }