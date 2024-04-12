const createButton = document.querySelector('.note__button');
const lists = document.querySelector('.note__lists');
const modal = document.querySelector('.modal');

function createNote(){
    let title = document.querySelector('.create__title');
    let description = document.querySelector('.create__description');
    console.log(title, description)
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
    lists.appendChild(list);
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
        modal.classList.remove("modal--show")
        console.log('hi')
    });


})

