let input = document.getElementById("input")
let btn = document.getElementById("btn")
let box = document.getElementById("box")

btn.addEventListener("click", ()=> {
    let URL = `https://api.nationalize.io/?name=${input.value}`

    fetch(URL)
    .then((response) => response.json())
    .then((data) => 
        box.innerHTML += `
        <p>${data.name}</p>
        ${data.country.map(
            (item) => (
                `
            <p>${item.country_id}</p>
            <p>${Math.floor(item.probellity)}</p>
            `
            )
        )}
        `
    )
    input.value = ""
})