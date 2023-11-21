"use strict";
const jokeContainer = document.getElementById('jokeContainer');
const button = document.getElementById('button');
const scoreButtons = document.querySelector('.scoreButtons');
// Conseguir chistes al azar con FETCH y .THEN
function getJoke() {
    fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json'
        }
    })
        .then(res => res.json())
        .then((data) => {
        jokeContainer.textContent = data.joke;
        console.log(data.joke);
    });
}
getJoke();
// Conseguir chistes al azar de Chuck Norris con las variables URL y OPTIONS definidas fuera de la funcion
const url = 'https://api.chucknorris.io/jokes/random';
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
    }
};
function getChuckNorrisJoke() {
    fetch(url, options)
        .then(res => res.json())
        .then((data) => {
        jokeContainer.textContent = data.value;
        console.log(data.value);
    });
}
// Visualizar chistes de Chuck Norris o de los "dad jokes" de forma totalmente aleatoria
button.addEventListener('click', () => {
    let randomNumber = Math.random();
    console.log(randomNumber);
    (randomNumber > 0.5) ? getJoke() : getChuckNorrisJoke();
});
[];
const reportJokes = [];
function scores(number) {
    let vote = document.getElementById('jokeContainer'); //para encontrar el chiste en el document HTML...
    let joke = vote === null || vote === void 0 ? void 0 : vote.innerHTML; //...si se encuentra sera un string y si no se encuentra sera undefined (el signo de interrogación '?' significa que es variable opcional)
    //Para cambiar la votación antes de pasar al siguiente chiste: Si cada item.joke que se puntua es igual a joke eso significa que ya se ha puntuado antes, es decir, ya esta dentro del array reportJokes . Para cambiar la puntuación, eliminamos ese elemento del array (1 elemento desde el index que estamos iterando) y añadimos el nuevo elemento con la nueva puntuación.
    reportJokes.forEach((item, index) => {
        if (item.joke === joke) {
            reportJokes.splice(index, 1);
        }
    });
    let score = number;
    let date = new Date().toISOString();
    // Creamos la variable scoredJoke que sera la que (tomando como modelo el interface ReportJokes) vaya añadiendo elementos al array reportJokes
    let scoredJoke = { joke, score, date };
    reportJokes.push(scoredJoke);
    console.log(reportJokes);
}
