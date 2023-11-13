import { startDragCard, endDragCard } from "./dnd"

export default class Card {
    constructor(text, id) {
        this.mainField = document.createElement('div')
        this.mainField.classList.add("card")
        this.mainField.draggable = 'true'
        if (!id) {
            this.mainField.id = this.getRandomID()
        } else {
            this.mainField.id = id
        } 

        this.deleteButton = document.createElement('div')
        this.deleteButton.className = ("delete-card hidden")
        this.deleteButton.addEventListener('click', this.deleteCard)

        this.cardText = document.createElement('div')
        this.cardText.classList.add("card-text")
        // this.cardText.contenteditable="true" //пользователю разрешено изменять текст карточки
        this.cardText.textContent = text

        this.mainField.appendChild(this.deleteButton)
        this.mainField.appendChild(this.cardText)

        // появляющийся крестик
        this.mainField.addEventListener('mouseenter', this.showDeleteButton)
        this.mainField.addEventListener('mouseleave', this.hideDeleteButton)
        
        // dnd
        this.mainField.addEventListener('dragstart', startDragCard)
        this.mainField.addEventListener('dragend', endDragCard)
        // this.mainField.addEventListener('mouseup', onMouseUp)

    }   

    showDeleteButton(e) {
        e.target.firstChild.classList.remove('hidden')
    }

    hideDeleteButton(e) {
        e.target.firstChild.classList.add('hidden')
    
    }

    deleteCard(e) {
        e.target.parentElement.remove()
    }

    getRandomID() {
        let result = ''
        let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXZabcdefghijklmnopqrstuvwxz0123456789'
        for (let i = 0; i < 10; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length))
        }
        return result
    }
}