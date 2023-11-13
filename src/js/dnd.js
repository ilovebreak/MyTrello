// let dragElem = null; //текущий перетаскиваемый элемент

 export function startDragCard(){
    console.log('dragstart');
    window.dragElem = this;
    // setTimeout (()=> {
    // //   this.classList.add('hide');
    // }, 0);
  }

  export function endDragCard(){
    console.log('dragend');
    window.dragElem = null;
    // this.classList.remove('hide');
  }

  export function dragContainerOver(e) {
    // console.log('dragover');
    e.preventDefault();

    // this.classList.add('hover');
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


    // this.classList.add('hover');
  }

  export function dragContainerLeave() {
     console.log('dragleave');
     console.log(window.placeToInsertExists)
     console.log(document.querySelector('.place-to-insert'))
     const placeToInsert = document.querySelector('.place-to-insert')
     if (window.placeToInsertExists) {
        setTimeout(() => {
          window.placeToInsertExists = false
          const placeToInsert = document.querySelector('.place-to-insert')
          if (placeToInsert) placeToInsert.remove()
          console.log('place-to-insert', document.querySelector('.place-to-insert'))
        }, 500)
     }
    // this.classList.remove('hover');
  }

  export function dropInContainer(e) {
    console.log('drop');
    // console.log(this)
    // console.log(typeof(this))
    // console.log('caretPositionFromPoint', document.caretPositionFromPoint)
    // console.log('caretRangeFromPoint', document.caretRangeFromPoint)
    
    // if (document.caretPositionFromPoint) {
    
    //     let range = document.caretPositionFromPoint(e.clientX, e.clientY);
    //     let textNode = range.offsetNode;
    //     let offset = range.offset;
    //     console.log(textNode, offset);
    
    // }  else if (document.caretRangeFromPoint) {

    //     let range = document.caretRangeFromPoint(e.clientX, e.clientY);
    //     let textNode = range.startContainer;
    //     let offset = range.startOffset;
    //     console.log(textNode, offset);
        
    // }

    // console.log(e.target)
    
    this.append(window.dragElem);
    // this.classList.remove('hover');
  }


// let dragElem

// export function onMouseMove (e) {
//     e.target.style.left = e.clientY + 'px';
//     e.target.style.top = e.clientY + 'px';
// }

// export function onMouseDown(e) {
//     e.preventDefault();
//     console.log(e.target)
//     if (!e.target.classList.contains('card-text')) {
//         actualElement = e.target
//     } else {
//         actualElement = e.target.parentElement
//     }

//     actualElement.style.position = 'absolute'
        
//     onMouseMove(e)
//     // e.target.style.left = e.pageX - e.target.offsetWidth / 2 + 'px';
//     // e.target.style.top = e.pageY - e.target.offsetHeight / 2 + 'px';
//     document.body.appendChild(actualElement)
//     actualElement.style.zIndex = 1000

// }

// export function onMouseUp (e) {
//     e.target.removeEventListener('mouseup', onMouseUp);
//     e.target.removeEventListener('mousemove', onMouseMove);
//     // document.onmousemove = null;
//     // ball.onmouseup = null;
// }