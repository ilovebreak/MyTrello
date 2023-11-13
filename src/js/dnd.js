// let dragElem = null; //текущий перетаскиваемый элемент

let placeToInsert

 export function startDragCard(){
    console.log('dragstart');
    window.dragElem = this;
  }

  export function endDragCard(){
    console.log('dragend');
    window.dragElem = null;
  }

  export function dragContainerOver(e) {
    // console.log('dragover');
    e.preventDefault();
  }

  export function dragContainerEnter(e) {
    console.log('dragenter');
    e.preventDefault();

    if (!window.placeToInsertExists) {
        let insertBeforeElement = document.elementFromPoint(e.clientX, e.clientY)
        console.log(insertBeforeElement)
        console.log(window.placeToInsertExists)
        console.log('card', insertBeforeElement.classList.contains("card"))
        console.log('add', insertBeforeElement.classList.contains("add-container"))
        console.log('card or add', insertBeforeElement.classList.contains("card") || insertBeforeElement.classList.contains("add-container"))
        if (insertBeforeElement.classList.contains("card") || insertBeforeElement.classList.contains("add-container")) {
            let placeToInsert = document.createElement('div')
            placeToInsert.classList.add("place-to-insert")
            placeToInsert.textContent  ='Drop me here...'
            console.log(window.dragElem.offsetWidth)
            placeToInsert.style.width = window.dragElem.offsetWidth + 'px'
            placeToInsert.style.height = window.dragElem.offsetHeight + 'px'
            insertBeforeElement.parentElement.insertBefore(placeToInsert, insertBeforeElement)
            window.placeToInsertExists = true
        } 
    }

  }

  export function dragContainerLeave() {
     console.log('dragleave');
     console.log(window.placeToInsertExists)
     console.log(document.querySelector('.place-to-insert'))
     if (window.placeToInsertExists) {
        setTimeout(() => {
          window.placeToInsertExists = false
          placeToInsert = document.querySelector('.place-to-insert')
          if (placeToInsert) placeToInsert.remove()
        }, 1000)
     }
  }

  export function dropInContainer(e) {
    console.log('drop');
   
    // this.append(window.dragElem);
    if (window.placeToInsertExists) {
      placeToInsert = document.querySelector('.place-to-insert')
      console.log('place-to-insert', placeToInsert)
      placeToInsert.parentElement.insertBefore(window.dragElem, placeToInsert)
      placeToInsert.remove()
      window.placeToInsertExists = false
    }

  }

