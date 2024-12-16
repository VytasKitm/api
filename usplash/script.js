

// let rootDiv = document.getElementById("root")





// let input = document.createElement("input")
// let infoCountry = document.createElement("h3")
// let infoCapital = document.createElement("h4")
// let flag = document.createElement("img")
// let button = document.createElement("button")
// let body = document.querySelector("body")

// button.textContent = "Ieskoti"
// button.setAttribute("id","input")
// body.style.backgroundColor = "grey"


// rootDiv.appendChild(input)
// rootDiv.appendChild(button)
// rootDiv.appendChild(infoCountry)
// rootDiv.appendChild(infoCapital)
// rootDiv.appendChild(flag)

// let data = []

// const newInfo = async (name) => {
//                 const res = await fetch(`https://restcountries.com/v3.1/name/${name}`)
//                 await res.json().then((promise) => data.push(...promise)) 
// }

// console.log(data)


// button.addEventListener("click", () => {
//         let capitals
//         let infoCapital = document.querySelectorAll("h4")
//         let infoCountry = document.querySelectorAll("h3")
//         let flag = document.querySelectorAll("img")
//         if (infoCapital) {
//                 for(let i of infoCapital) {
//                         i.remove()
//                 }
//         }
//         if (infoCountry) {
//                 for(let i of infoCountry) {
//                         i.remove()
//                 }
//         }
//         if (flag) {     
//                 for(let i of flag) {
//                         i.remove()
//                 }
//         }
//         fetch(`https://restcountries.com/v3.1/name/${input.value}`)
//                         .then((response) => response.json())
//                         .then((data) => {
//                                 for (let country of data) {
//                                         let infoCountry = document.createElement("h3")
//                                         let infoCapital = document.createElement("h4")
//                                         let flag = document.createElement("img")
//                                         infoCountry.textContent = country.name.common
//                                         capitals = country.capital
//                                         if (capitals != null) {
//                                                for (let capital of capitals) {
//                                                 infoCapital.textContent += capital + ". "
//                                                 }
//                                         }
//                                         else {
//                                                 infoCapital.textContent = "Informacijos apie sostine nera."
//                                         }
                                        
//                                         if (country.flags.png.length > 0) {
//                                                 flag.setAttribute("src",`${country.flags.png}`)
//                                         }
//                                         else {
//                                                 console.log("Veliavos nera")
//                                         }
//                                         rootDiv.appendChild(infoCountry)
//                                         rootDiv.appendChild(infoCapital)
//                                         rootDiv.appendChild(flag)
//                                         }        
//                         })
// })               .then((response) => response.json())
  


const rootDiv = document.getElementById("root")
const mainDiv = document.createElement("div")
const input = document.createElement("input")
const button = document.createElement("button")

mainDiv.classList.add("mainDiv")
button.textContent = "Ieskoti photo"

const gallerySize = 6

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
                rootDiv.append(mainDiv)   
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
                        rootDiv.append(mainDiv)
                }
        }
        catch (error) {
                alert.apply("Tokiu nuotrauku nerasta")
        }

}

button.addEventListener("click", searchPhoto)
document.addEventListener('DOMContentLoaded', showPhoto)
rootDiv.append(input, button, mainDiv)