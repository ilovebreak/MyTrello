console.log('app.js is bundled')

import Board from "./board"
import { saveToStorage, loadFromStorage } from "./localStorage"
// import { dragContainerEnter, dragContainerLeave, dragContainerOver } from "./dnd"

const board = new Board()

// local storage

window.addEventListener('beforeunload', saveToStorage)

document.addEventListener('DOMContentLoaded', loadFromStorage)



// dnd

const cards = document.querySelectorAll('.card'), // перетаскиваемые блоки
    containers = document.querySelectorAll('.cards-container'); // целевые блоки для "бросания" в них перетаскиваемых элементов
window.dragElem = null; //текущий перетаскиваемый элемент
window.placetoInsertExists = false // задаем переменную для того, чтобы место для 

// cards.forEach(card => {
//     card.addEventListener('dragstart', startDragCard)
//     card.addEventListener('dragend', endDragCard)
// })

// containers.forEach(container => {
//     container.addEventListener('dragover', dragContainerOver); 
//     container.addEventListener('dragenter', dragContainerEnter); 
//     container.addEventListener('dragleave', dragContainerLeave); 
//     container.addEventListener('drop', dropInContainer); 
//   })


//   function startDragCard(){
//     console.log('dragstart');
//     dragElem = this;
//     setTimeout (()=> {
//     this.classList.add('hidden');
//     }, 0);
//   }

//  function endDragCard(){
//     console.log('dragend');
//     dragElem = null;
//     // this.classList.remove('hide');
//   }

//  function dragContainerOver(e) {
//     // console.log('dragover');
//     e.preventDefault();
//     // this.classList.add('hover');
//   }

//  function dragContainerEnter(e) {
//     // console.log('dragenter');
//     e.preventDefault();
//     // this.classList.add('hover');
//   }

//   function dragContainerLeave() {
//     //  console.log('dragleave');
//     // this.classList.remove('hover');
//   }

//   function dropInContainer(e) {
//     console.log('drop');
//     console.log(this)
//     // console.log(e.target)
//     console.log(dragElem)
//     this.append(dragElem);
//     // this.classList.remove('hover');
//   }
