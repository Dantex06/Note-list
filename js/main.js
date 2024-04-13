const createButton = document.querySelector('.note__button');
const lists = document.querySelector('.note__lists');
const modal = document.querySelector('.modal');

function randomColorStyle(list){
    const listColors= {
        0: "#444c5c",
        1: "#ce5a57",
        2: "#78a5a3",
        3: "#e1b16a",
        4: "#aaaaaa",
        5: "#ff7251",
        6: "#9b2948"
    }

    const color =  Math.floor(Math.random() * Object.keys(listColors).length);
    list.style.backgroundColor = listColors[color];
    return list;
}

function createNote(){
    let title = document.querySelector('.create__title');
    let description = document.querySelector('.create__description');
    const list = document.createElement("div");
    list.classList.add('note__list')
    list.innerHTML = `
                <div class="note__list-close">
                </div>
                <div class="note__list-title">
                    ${title.value}
                </div>
                <div class="note__list-description">
                    ${description.value}
                </div>
    `
    const closeButton = list.querySelector('.note__list-close');
    closeButton.addEventListener("click", ()=>{
        list.remove();
    })

    lists.appendChild(randomColorStyle(list));
    modal.classList.remove("modal--show");
    document.querySelector('.create__title').value = '';
    document.querySelector('.create__description').value = '';
}


createButton.addEventListener("click", ()=> {
    modal.classList.add("modal--show");
    const closeModal = modal.querySelector('.close__modal-button');
    const createModal = modal.querySelector('.create__modal-button');

    createModal.removeEventListener("click", createNote)
    createModal.addEventListener("click", createNote)

    closeModal.addEventListener("click", ()=>{
        document.querySelector('.create__title').value = '';
        document.querySelector('.create__description').value = '';
        modal.classList.remove("modal--show")
    });


})

