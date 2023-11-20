    
const jokeContainer = document.getElementById('jokeContainer') as HTMLElement
const button = document.getElementById('button') as HTMLElement

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
        console.log(data.joke)
    });
}   
getJoke();

// Conseguir chistes al azar de Chuck Norris con las variables URL y OPTIONS definidas fuera de la funcion
const url: string = 'https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random';
const options = {
	method: 'GET',
	headers: {
		accept: 'application/json',
		'X-RapidAPI-Key': 'db2e2e4041msha3eb1791ee4709dp1a47bbjsn10faeb9c2251',
		'X-RapidAPI-Host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com'
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

// Visualizar chistes de Chuck Norris o de los "dad jokes" de forma totalmente aleatoria
button.addEventListener('click', () => {
    let randomNumber: number = Math.random();
    console.log(randomNumber);
    (randomNumber > 0.5) ? getJoke() : getChuckNorrisJoke()
});


