import Card from "./card"

export function saveToStorage() {

    let storedData = {}
    const cardContainers = document.querySelectorAll('.cards-container')
    console.log('cardContainers', cardContainers)
    // debugger
    for (let cardContainer of cardContainers) {
        let cardData = {}
        let cards = cardContainer.querySelectorAll('.card')
        console.log('cards', cards)
        for (let card of cards) {
            let cardText = card.lastElementChild.textContent
            cardData[card.id]= cardText
        }
        
        // localStorage.setItem(`${cardContainer.id}`, JSON.stringify(cardData))
        storedData[cardContainer.id] = cardData
        console.log(storedData)
        localStorage.setItem('storedData', JSON.stringify(storedData))
    }

}

export function loadFromStorage() {

    const json = localStorage.getItem('storedData');

    let storedData;

    try {
        storedData = JSON.parse(json);
    } catch(error) {
        console.log(error);
    }

    // console.log(Object.keys(storedData['todo']))
    // console.log(Object.keys(storedData['in progress']))
    // console.log(Object.keys(storedData['done']))
    // console.log(Object.keys(storedData['done']) + Object.keys(storedData['in progress']) + Object.keys(storedData['done']))

    // if (!Object.keys(storedData['todo']) && !Object.keys(storedData['in progress']) && !Object.keys(storedData['done'])) {
    if (!(Object.keys(storedData['done']) + Object.keys(storedData['in progress']) + Object.keys(storedData['done']))) {
        storedData = {
            "todo":
                {"FPLhU28JG1":"Проснуться...\n",
                "tI0qxe5tj8":"Улыбнуться...",
                "S2AFkXXRpw":"Очень сладко потянуться..."}, 
            "in progress":
                {"hXb7uPmQTb":"И закинуть",
                 "5OIxrEi4J8":"Прямо в рот"},
            "done":
                {"gJ7saj5EWU":"Превосходный бутерброд!"}
            }
    }


    if(storedData) {
        Object.keys(storedData).forEach((key) => {
            let cardContainer = document.getElementById(key)
            let cardData = storedData[key]
            Object.keys(cardData).forEach((id) => {
                const card = new Card(cardData[id], id)
                const addContainer = cardContainer.querySelector('.add-container')
                addContainer.parentElement.insertBefore(card.mainField, addContainer)
            })
        })
    } 
}
