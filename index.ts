const jokeContainer = document.getElementById('jokeContainer') as HTMLElement
const button = document.getElementById('button') as HTMLElement
const scoreButtons = document.querySelector('.scoreButtons') as HTMLElement

function getJoke() {
    fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(res => res.json())
    .then((data) => {
        jokeContainer.textContent = data.joke;
        console.log(data.joke)
    });
}   
getJoke();

const url: string = 'https://api.chucknorris.io/jokes/random';
const options = {
	method: 'GET',
	headers: {
		accept: 'application/json',
	}
};

function getChuckNorrisJoke() {
    fetch (url, options)
    .then(res => res.json())
    .then((data) => {
        jokeContainer.textContent = data.value;
        console.log(data.value)
    })
}

button.addEventListener('click', () => {
    let randomNumber: number = Math.random();
    console.log(randomNumber);
    (randomNumber > 0.5) ? getJoke() : getChuckNorrisJoke()
});

interface ReportJokes {
    joke: string | undefined;
    score: number;
    date: string;
}[]

const reportJokes: ReportJokes[] = [];

function scores(number: number): void {
    let vote: HTMLElement | null = document.getElementById('jokeContainer');
    let joke: string | undefined = vote?.innerHTML;

    reportJokes.forEach((item, index) => {
        if (item.joke === joke) {
            reportJokes.splice(index, 1);
        }
    });

    let score: number = number;
    let date: string = new Date().toISOString();
   
    let scoredJoke: ReportJokes = { joke, score, date };

    reportJokes.push(scoredJoke);
    console.log(reportJokes);
}

const meteoContainer = document.getElementById("meteoContainer") as HTMLElement;
const icon = document.getElementById("icon") as HTMLImageElement;
const temperature = document.getElementById("temperature") as HTMLElement;

let weatherUrl = 'https://weatherapi-com.p.rapidapi.com/current.json?q=Barcelona';
const weatherOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'db2e2e4041msha3eb1791ee4709dp1a47bbjsn10faeb9c2251',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

async function getWeather() {
    try {
        const response = await fetch(weatherUrl, weatherOptions);
        const result = await response.json();
        temperature.textContent = result.current.temp_c + ' ºC';
        icon.src = result.current.condition.icon;
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}
getWeather();
