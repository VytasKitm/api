

const rootDiv = document.getElementById("root")
const mainDiv = document.createElement("div")
const input = document.createElement("input")
const button = document.createElement("button")
const poster = document.createElement("div")
const inputDiv = document.createElement("div")

inputDiv.classList.add("inputDiv")
poster.classList.add("poster")
mainDiv.classList.add("mainDiv")
button.textContent = "Search Art"



async function searchArt() {
        const search = input.value
        const res = await fetch(`https://openaccess-api.clevelandart.org/api/artworks/?q=${search}&limit=20&has_image=1`)
        const data =  await res.json()
        const posters = Array.from(document.getElementsByClassName("poster"))
        console.log(posters)
        for (let div of posters) {
                div.remove()
        }
                for (let i in data.data) {
                        console.log(data.data[i])
                        const poster = document.createElement("div")
                        poster.classList.add("poster")
                        const imgDiv = document.createElement("div")
                        imgDiv.classList.add("imgDiv")
                        const img = document.createElement("img")
                        const title = document.createElement("h3")
                        const author = document.createElement("h4")
                        const year = document.createElement("h4")
                        img.src = data.data[i].images.web.url
                        year.textContent = `Year: ${data.data[i].creation_date}`
                        for (let j in data.data[i].creators){
                              author.textContent += `Authors: ${data.data[i].creators[j].description}`
                        }
                        title.textContent = `Title: ${data.data[i].title}`
                        imgDiv.append(img)
                        poster.append(imgDiv, year, author, title)
                        mainDiv.append(poster)
                        rootDiv.append(mainDiv)
                }      
}

function random(min,max) {
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}


async function showArt() {
        const rand = random(20,1000)
        const res = await fetch(`https://openaccess-api.clevelandart.org/api/artworks/?limit=20&has_image=1&skip=${rand}`)
        const data =  await res.json()
        const posters = Array.from(document.getElementsByClassName("poster"))
        console.log(posters)
        for (let div of posters) {
                div.remove()
        }
                for (let i in data.data) {
                        console.log(data.data[i])
                        const poster = document.createElement("div")
                        poster.classList.add("poster")
                        const imgDiv = document.createElement("div")
                        imgDiv.classList.add("imgDiv")
                        const img = document.createElement("img")
                        const title = document.createElement("h3")
                        const author = document.createElement("h4")
                        const year = document.createElement("h4")
                        img.src = data.data[i].images.web.url
                        year.textContent = `Year: ${data.data[i].creation_date}`
                        for (let j in data.data[i].creators){
                              author.textContent += `Authors: ${data.data[i].creators[j].description}`
                        }
                        title.textContent = `Title: ${data.data[i].title}`
                        imgDiv.append(img)
                        poster.append(imgDiv, year, author, title)
                        mainDiv.append(poster)
                        rootDiv.append(mainDiv)
                }      
}


button.addEventListener("click", searchArt)
document.addEventListener('DOMContentLoaded', showArt)
inputDiv.append(input, button)
rootDiv.append(inputDiv, mainDiv)