"use strict";
const jokeContainer = document.getElementById('jokeContainer');
const button = document.getElementById('button');
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
button.addEventListener('click', () => {
    getJoke();
});
