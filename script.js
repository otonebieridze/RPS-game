let rock = document.getElementById('rock');
let scissors = document.getElementById('scissors');
let paper = document.getElementById('paper');

let rock1 = document.getElementById('rock1');
let scissors1 = document.getElementById('scissors1');
let paper1 = document.getElementById('paper1');

let tryAgain = document.getElementById('tryAgain');
let chooseContainer = document.getElementById('chooseContainer');

let rock2 = document.getElementById('rock2');
let scissors2 = document.getElementById('scissors2');
let paper2 = document.getElementById('paper2');

let playerResult = document.getElementById('playerResult');
let botResult = document.getElementById('botResult');
let playerRes = 0;
let botRes = 0;

let res = document.getElementById('res');

rock.addEventListener('click', () => {
    rock.style.display = 'none';
    scissors.style.display = 'none';
    paper.style.display = 'none';
    rock1.style.display = 'inherit';
    
    let result = '';
    let random = Math.floor(Math.random() * 3);
    if (random == 0) {
        scissors2.style.display = 'none';
        paper2.style.display = 'none';
        rock2.style.display = 'inherit';
        result = 'Tie!';
        res.textContent = result;
        res.style.color = 'yellow';
        res.style.display = 'inherit';
    } else if (random == 1) {
        paper2.style.display = 'none';
        rock2.style.display = 'none';
        scissors2.style.display = 'inherit';
        result = 'You Win!';
        res.textContent = result;
        res.style.color = 'green';
        res.style.display = 'inherit';
        playerRes++;
        playerResult.textContent = playerRes;
    } else {
        rock2.style.display = 'none';
        scissors2.style.display = 'none';
        paper2.style.display = 'inherit';
        result = 'You Lose!';
        res.textContent = result;
        res.style.color = 'red';
        res.style.display = 'inherit';
        botRes++;
        botResult.textContent = botRes;
    }
    
    tryAgain.style.display = 'inherit';
});
scissors.addEventListener('click', () => {
    rock.style.display = 'none';
    scissors.style.display = 'none';
    paper.style.display = 'none';
    scissors1.style.display = 'inherit';
    
    let random = Math.floor(Math.random() * 3);
    if (random == 0) {
        scissors2.style.display = 'none';
        paper2.style.display = 'none';
        rock2.style.display = 'inherit';
        result = 'You Lose!';
        res.textContent = result;
        res.style.color = 'red';
        res.style.display = 'inherit';
        botRes++;
        botResult.textContent = botRes;
    } else if (random == 1) {
        paper2.style.display = 'none';
        rock2.style.display = 'none';
        scissors2.style.display = 'inherit';
        result = 'Tie!';
        res.textContent = result;
        res.style.color = 'yellow';
        res.style.display = 'inherit';
    } else {
        rock2.style.display = 'none';
        scissors2.style.display = 'none';
        paper2.style.display = 'inherit';
        result = 'You Win!';
        res.textContent = result;
        res.style.color = 'green';
        res.style.display = 'inherit';
        playerRes++;
        playerResult.textContent = playerRes;
    }
    
    tryAgain.style.display = 'inherit';
});
paper.addEventListener('click', () => {
    rock.style.display = 'none';
    scissors.style.display = 'none';
    paper.style.display = 'none';
    paper1.style.display = 'inherit';
    
    let random = Math.floor(Math.random() * 3);
    if (random == 0) {
        scissors2.style.display = 'none';
        paper2.style.display = 'none';
        rock2.style.display = 'inherit';
        result = 'You Win!';
        res.textContent = result;
        res.style.color = 'green';
        res.style.display = 'inherit';
        playerRes++;
        playerResult.textContent = playerRes;
    } else if (random == 1) {
        paper2.style.display = 'none';
        rock2.style.display = 'none';
        scissors2.style.display = 'inherit';
        result = 'You Lose!';
        res.textContent = result;
        res.style.color = 'red';
        res.style.display = 'inherit';
        botRes++;
        botResult.textContent = botRes;
    } else {
        rock2.style.display = 'none';
        scissors2.style.display = 'none';
        paper2.style.display = 'inherit';
        result = 'Tie!';
        res.textContent = result;
        res.style.color = 'yellow';
        res.style.display = 'inherit';
    }
    
    tryAgain.style.display = 'inherit';
});

tryAgain.addEventListener('click', () => {
    tryAgain.style.display = 'none';
    rock1.style.display = 'none';
    scissors1.style.display = 'none';
    paper1.style.display = 'none';
    
    rock2.style.display = 'none';
    scissors2.style.display = 'none';
    paper2.style.display = 'none';
    
    res.style.display = 'none';
    
    rock.style.display = 'inherit';
    scissors.style.display = 'inherit';
    paper.style.display = 'inherit';
});