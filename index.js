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
    //Para cambiar la votación antes de pasar al siguiente chiste: Si cada item.joke que se puntua es igual a joke eso significa que ya se ha puntuado antes, es decir, ya esta dentro del array reportJokes . Para cambiar la puntuación, eliminamos ese elemento del array (1 elemento desde el index que estamos iterando) y añadimos el nuevo elemento con la nueva puntuación como si nunca hubiera sido puntuado.
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
// .then(res => res.json())
//.then((data) => {
//  jokeContainer.textContent = data.joke;
//console.log(data.joke)
/* window.addEventListener("load", () => {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            console.log(position);
            lon = position.coords.longitude;
            lat = position.coords.latitude;


        })
    }
}) */ 
