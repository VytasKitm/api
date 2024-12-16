
const rootDiv = document.getElementById("root")
const mainDiv = document.createElement("div")
const input = document.createElement("input")
const button = document.createElement("button")
const inputDiv = document.createElement("div")

inputDiv.classList.add("inputDiv")
mainDiv.classList.add("mainDiv")
button.textContent = "Ieskoti photo"

const gallerySize = 2

async function showPhoto() {
        for (let i = 0; i < gallerySize; i++) {
                const res = await fetch(`https://api.unsplash.com/photos/random/?client_id=eDd7jbs1BRuXc0DRGfHq5kEHHUQ-BDZoQzaM8BfFN0U`)
                const data =  await res.json()
                const imgDiv = document.createElement("div")
                imgDiv.classList.add("imgDiv")
                const img = document.createElement("img")
                img.src = data.links.download
                imgDiv.append(img)
                mainDiv.append(imgDiv)   
        }   
}

async function searchPhoto() {
        const search = input.value
        const images = Array.from(document.getElementsByClassName("imgDiv"))
        for (let div of images) {
                div.remove()
        }
        try {
                const res = await fetch(`https://api.unsplash.com/search/photos?page=1&query=${search}&per_page=${gallerySize}&client_id=eDd7jbs1BRuXc0DRGfHq5kEHHUQ-BDZoQzaM8BfFN0U`)
                const data =  await res.json()
                for (let i in data.results) {
                        const imgDiv = document.createElement("div")
                        imgDiv.classList.add("imgDiv")
                        const img = document.createElement("img")
                        img.src = data.results[i].links.download
                        imgDiv.append(img)
                        mainDiv.append(imgDiv)
                }
        }
        catch (error) {
                alert.apply("Tokiu nuotrauku nerasta")
        }

}

button.addEventListener("click", searchPhoto)
document.addEventListener('DOMContentLoaded', showPhoto)
inputDiv.append(input, button)
rootDiv.append(inputDiv, mainDiv)