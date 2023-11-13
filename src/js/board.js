import Card from "./card"
import { dragContainerEnter, dragContainerLeave, dragContainerOver, dropInContainer } from "./dnd"


function hideAddContainer(addContainer, textBox, addButton, cancelButton) {
    addContainer.classList.remove('inputview')
    cancelButton.classList.add('hidden')
    textBox.classList.add('hidden')
    addButton.classList.remove('inputview')
    addButton.textContent = "+ Add another card"
}

function showAddContainer(addContainer, textBox, addButton, cancelButton) {
    addContainer.classList.add('inputview')
    cancelButton.classList.remove('hidden')
    textBox.classList.remove('hidden')
    textBox.value = ''
    addButton.classList.add('inputview')
    addButton.textContent = "Save"
}

export default class Board {
    constructor() {
        this.board = document.querySelector('.board')
        this.cardContainers = document.querySelectorAll('.cards-container')
        this.addButtons = document.querySelectorAll('.add-button')
        this.addContainers = document.querySelectorAll('.add-containers')
        for (let addButton of this.addButtons) {
            addButton.addEventListener('click', this.onAddButtonClick)
        }
        this.cancelButtons = document.querySelectorAll('.cancel-button')
        for (let cancelButton of this.cancelButtons) {
            cancelButton.addEventListener('click', this.onCancelButtonClick)
        }

        for (let container of this.cardContainers) {
            container.addEventListener('dragover', dragContainerOver); 
            container.addEventListener('dragenter', dragContainerEnter); 
            container.addEventListener('dragleave', dragContainerLeave); 
            container.addEventListener('drop', dropInContainer); 
        }
    }

        onAddButtonClick(e) {
            const textBox = e.target.parentElement.previousElementSibling
            const addContainer = e.target.closest('.add-container')
            const cancelButton = e.target.nextElementSibling
            if (e.target.classList.contains('inputview')) {
                if (textBox.value) {
                    const card = new Card(textBox.value)
                    addContainer.parentElement.insertBefore(card.mainField, addContainer)
                }
                hideAddContainer(addContainer, textBox, e.target, cancelButton)
            } else {
                showAddContainer(addContainer, textBox, e.target, cancelButton)
            }
        }

        onCancelButtonClick(e) {
            const textBox = e.target.parentElement.previousElementSibling
            const addContainer = e.target.closest('.add-container')
            const addButton = e.target.previousElementSibling
            hideAddContainer(addContainer, textBox, addButton, e.target)
        }

}