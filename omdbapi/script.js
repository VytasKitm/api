

const rootDiv = document.getElementById("root")
const mainDiv = document.createElement("div")
const input = document.createElement("input")
const button = document.createElement("button")
const poster = document.createElement("div")
const inputDiv = document.createElement("div")
const buttonPageLeft = document.createElement("button")
const buttonPageRight = document.createElement("button")

buttonPageLeft.innerHTML = "&larr;"
buttonPageRight.innerHTML = "&rarr;"
inputDiv.classList.add("inputDiv")
poster.classList.add("poster")
mainDiv.classList.add("mainDiv")
button.textContent = "Search movie"

let page = 1

buttonPageLeft.addEventListener("click", () => {
        if (page > 1) {
                page--
        }
        showMovie()
})

buttonPageRight.addEventListener("click", ()=> {
        page++
        showMovie()
})

async function showMovie() {
        const search = input.value
        const res = await fetch(`http://www.omdbapi.com/?apikey=181f27e2&s=${search}&page=${page}`)
        const data =  await res.json()
        const posters = Array.from(document.getElementsByClassName("poster"))
        for (let div of posters) {
                div.remove()
        }
        if (data.Response == "True") {
                for (let i in data.Search) {
                        const poster = document.createElement("div")
                        poster.classList.add("poster")
                        const imgDiv = document.createElement("div")
                        imgDiv.classList.add("imgDiv")
                        const img = document.createElement("img")
                        const title = document.createElement("h3")
                        const year = document.createElement("h4")
                        img.src = data.Search[i].Poster
                        year.textContent = data.Search[i].Year
                        title.textContent = data.Search[i].Title
                        imgDiv.append(img)
                        poster.append(imgDiv, year, title)
                        mainDiv.append(poster)
                        rootDiv.append(mainDiv)
                }
        }
        else {
                alert("Tokio filmo nera.")
        }  
        
}



button.addEventListener("click", showMovie)
// document.addEventListener('DOMContentLoaded', ())
inputDiv.append(input, button, buttonPageLeft,buttonPageRight)
rootDiv.append(inputDiv, mainDiv)