const api_key = "94d6ddd93db63868c339b12a2610f37e";

async function getMovies(){
    try {
        //cria uma variavel que recebe uma busca do site de filmes
        let response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`);

        //cria uma variavel que armazena a resposta em formato json
        let data = await response.json();

        //chama um função responsável por mostrar os dados no html passando
        //o json data para ela
        displayMovies(data.results);
    } catch (error) {
        console.log (error)
        
    }
}
//função para mostrar os filmes
function displayMovies(movies){
    let movieElement = document.getElementById('movieContainer');
    movieElement.innerHTML = "";
    movies.forEach(movie => {
        movieElement.innerHTML = `<h2>${movie.title} <h2>`
    })
}