
let rootDiv = document.getElementById("root")



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

let data = []

const newInfo = async (name) => {
                const res = await fetch(`https://restcountries.com/v3.1/name/${name}`)
                await res.json().then((promise) => data.push(...promise)) 
}

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
