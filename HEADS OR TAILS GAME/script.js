 const rslt = document.getElementById('rslt');
    const win = document.getElementById('win')
    const lose = document.getElementById('lose')
    const reset = document.querySelector('.reset')

    const resultsWinLose = JSON.parse(localStorage.getItem('resultsWinLose')) || {
        win : 0,
        lose : 0,
    }

    function makeGuess(playerGuess) {
      let number = Math.random();
      let results = number < 0.5 ? 'heads' : 'tails';

      if (playerGuess === results) {
        rslt.textContent = 'result: you won 🎉';
        resultsWinLose.win++
        win.textContent = `wins: ${resultsWinLose.win}`
      } else {
        rslt.textContent = 'result: you lost 😢';
        resultsWinLose.lose++
        lose.textContent = `loses: ${resultsWinLose.lose}`
      }
      localStorage.setItem('resultsWinLose', JSON.stringify( resultsWinLose))
    }

    reset.addEventListener('click', () => {
      resultsWinLose.lose = 0
      resultsWinLose.win = 0
      lose.textContent = `loses: ${resultsWinLose.lose}`
      win.textContent = `wins: ${resultsWinLose.win}`
      localStorage.setItem('resultsWinLose', JSON.stringify( resultsWinLose))
    })

    win.textContent = `Your wins: ${resultsWinLose.win}`;

    lose.textContent = `your loses: ${resultsWinLose.lose}`;
