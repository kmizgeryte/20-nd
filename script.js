// BASE URL = https://open-long-puck.glitch.me

// Sukurkite puslapį, index.html, kurį užkrovus atsiranda lentelė su visais automobiliais iš base URL.
// Sukurkite papildomą puslapį, add.html, kuriame būtų forma su dviem inputais - brand ir model; šie paduotų su post'u informaciją į base url (formatas: objektas su dviem properties: brand ir model).
// Sukurkite notification - t.y. sėkmingai užpildžius formą ir gavus patvirtinimą, turi virš formos rašyti, kad duomenys sėkmingai išsaugoti; o jei blogai - išmesti errorą.
// Sukurkite navigaciją, kad galėtumėte tarp puslapių vaikščioti ir patikrinkite ar įrašyti duomenys atsivaizduoja :)

const API_URL ="https://open-long-puck.glitch.me"
const tbody = document.querySelector("tbody")

const loadData = () => {
    return fetch(API_URL).then(resp => resp.json())
}

const printData = (data) => {
    data.map(x => {
        const row = document.createElement("tr")
        row.innerHTML =
        `
        <td>
        <img src="${x.image}" alt="" class="image">
        </td>
        <td>${x.brand}</td>
        <td>${x.model}</td>
        `
        tbody.append(row)
    })
    console.log(data)
}

loadData()
.then(printData)
.catch(error => console.log(error.message))

// add.js?
const loadDataAndPrint = () => {
    loadData()
        .then(printData)
        .catch(error => console.log(error.message));
}

// Užkrauti duomenis iš API ir atvaizduoti
// loadDataAndPrint();
