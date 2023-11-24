"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const jokeContainer = document.getElementById('jokeContainer');
const button = document.getElementById('button');
const scoreButtons = document.querySelector('.scoreButtons');
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
button.addEventListener('click', () => {
    let randomNumber = Math.random();
    console.log(randomNumber);
    (randomNumber > 0.5) ? getJoke() : getChuckNorrisJoke();
});
[];
const reportJokes = [];
function scores(number) {
    let vote = document.getElementById('jokeContainer');
    let joke = vote === null || vote === void 0 ? void 0 : vote.innerHTML;
    reportJokes.forEach((item, index) => {
        if (item.joke === joke) {
            reportJokes.splice(index, 1);
        }
    });
    let score = number;
    let date = new Date().toISOString();
    let scoredJoke = { joke, score, date };
    reportJokes.push(scoredJoke);
    console.log(reportJokes);
}
const meteoContainer = document.getElementById("meteoContainer");
const icon = document.getElementById("icon");
const temperature = document.getElementById("temperature");
let weatherUrl = 'https://weatherapi-com.p.rapidapi.com/current.json?q=Barcelona';
const weatherOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'db2e2e4041msha3eb1791ee4709dp1a47bbjsn10faeb9c2251',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
};
function getWeather() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(weatherUrl, weatherOptions);
            const result = yield response.json();
            temperature.textContent = result.current.temp_c + ' ºC';
            icon.src = result.current.condition.icon;
            console.log(result);
        }
        catch (error) {
            console.error(error);
        }
    });
}
getWeather();
