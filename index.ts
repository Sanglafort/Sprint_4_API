    
const jokeContainer = document.getElementById('jokeContainer') as HTMLElement
const button = document.getElementById('button') as HTMLElement

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

button.addEventListener('click', () => {
    getJoke();
});


