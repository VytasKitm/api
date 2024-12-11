
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

let img = document.createElement("img")
let button = document.createElement("button")

button.textContent = "kava"

rootDiv.append(img, button)

// button.addEventListener("click",() => {
//         fetch("https://dog.ceo/api/breeds/image/random")
//                 .then((response) => response.json())
//                 .then((data) => img.setAttribute("src",data.message))
// })


button.addEventListener("click",() => {
        fetch("https://coffee.alexflipnote.dev/random.json")
                .then((response) => response.json())
                .then((data) => img.setAttribute("src",data.file))
})