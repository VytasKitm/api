
// const newPhoto = fetch("https:\/\/images.dog.ceo\/breeds\/pekinese\/n02086079_2209.jpg")
// console.log(newPhoto)


// const newPhoto = async () => {
//         try {
//         const res = await fetch("https://dog.ceo/api/breeds/image/random")
//         const data = await res.json()
//         console.log(data)
//         }
//         catch (error) {
//         console.error(error)
//         }
//         // .then((response) => {
//         //         return response.json()
//         // })
//         // .then((data) => console.log(data))
// }

// newPhoto()
// fetch("https://dog.ceo/api/breeds/image/random")
//         .then((response) => response.json())
//         .then((data) => console.log(data))

let rootDiv = document.getElementById("root")

// let img = document.createElement("img")
// let button = document.createElement("button")

// button.textContent = "kava"

// rootDiv.append(img, button)

// button.addEventListener("click",() => {
//         fetch("https://dog.ceo/api/breeds/image/random")
//                 .then((response) => response.json())
//                 .then((data) => img.setAttribute("src",data.message))
// })


// button.addEventListener("click",() => {
//         fetch("https://coffee.alexflipnote.dev/random.json")
//                 .then((response) => response.json())
//                 .then((data) => img.setAttribute("src",data.file))
// })



let input = document.createElement("input")
let infoCountry = document.createElement("h3")
let infoCapital = document.createElement("h4")
let flag = document.createElement("img")
let button = document.createElement("button")
let body = document.querySelector("body")

button.textContent = "Ieskoti"
button.setAttribute("id","input")
body.style.backgroundColor = "grey"


rootDiv.appendChild(input)
rootDiv.appendChild(button)
rootDiv.appendChild(infoCountry)
rootDiv.appendChild(infoCapital)
rootDiv.appendChild(flag)


// const newInfo = async (name) => {
//                 const res = await fetch(`https://restcountries.com/v3.1/name/${name}`)
//                 const data = await res.json()
//                 return data
// }

button.addEventListener("click", () => {
        let capitals
        let infoCapital = document.querySelectorAll("h4")
        let infoCountry = document.querySelectorAll("h3")
        let flag = document.querySelectorAll("img")
        if (infoCapital) {
                for(let i of infoCapital) {
                        i.remove()
                }
        }
        if (infoCountry) {
                for(let i of infoCountry) {
                        i.remove()
                }
        }
        if (flag) {     
                for(let i of flag) {
                        i.remove()
                }
        }
        fetch(`https://restcountries.com/v3.1/name/${input.value}`)
                        .then((response) => response.json())
                        .then((data) => {
                                for (let country of data) {
                                        let infoCountry = document.createElement("h3")
                                        let infoCapital = document.createElement("h4")
                                        let flag = document.createElement("img")
                                        infoCountry.textContent = country.name.common
                                        capitals = country.capital
                                        if (capitals != null) {
                                               for (let capital of capitals) {
                                                infoCapital.textContent += capital + ". "
                                                }
                                        }
                                        else {
                                                infoCapital.textContent = "Informacijos apie sostine nera."
                                        }
                                        
                                        if (country.flags.png.length > 0) {
                                                flag.setAttribute("src",`${country.flags.png}`)
                                        }
                                        else {
                                                console.log("Veliavos nera")
                                        }
                                        rootDiv.appendChild(infoCountry)
                                        rootDiv.appendChild(infoCapital)
                                        rootDiv.appendChild(flag)
                                        }        
                        })
})