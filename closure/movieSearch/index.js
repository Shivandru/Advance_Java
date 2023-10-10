let searchBtn = document.querySelector(".search");
let rootElement = document.querySelector("#container");
async function getData(){
    try {
        let inpMovie = document.querySelector("#searchMovie").value;
        let res = await fetch(`https://www.omdbapi.com/?apikey=182639cd&s=${inpMovie}`)
        let data = await res.json();
        printData(data.Search)
    } catch (error) {
        console.error("Data Not Found")
    }
}

document.querySelector("#searchMovie").addEventListener("input", function(){
    debouceSearch()
})

function debouce(func, delay){
    let timer;
    return function(){
        clearTimeout(timer);
        timer = setTimeout(()=>{
            func()
        },delay)
    }
}

let debouceSearch = debouce(getData, 500);

function printData(data){
    rootElement.textContent = "";
    data.forEach(({Poster, Title, Type, Year})=>{
        let movieCard = document.createElement("div");
        movieCard.className = "card";
        let moviePoster = document.createElement("img");
        moviePoster.src = Poster;
        let movieTitle = document.createElement("p");
        movieTitle.textContent = `Movie Name: ${Title}`;
        let movieType = document.createElement("p");
        movieType.textContent = Type;
        let movieYear = document.createElement("p");
        movieYear.textContent = Year;
        movieCard.append(moviePoster, movieTitle, movieType, movieYear)
        rootElement.append(movieCard)
    })
}