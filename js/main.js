const createButton = document.querySelector('.note__button');
const lists = document.querySelector('.note__lists');
createButton.addEventListener("click", ()=> {
    const list = document.createElement("div");
    list.classList.add('note__list')
    list.innerHTML = `
                <div class="note__list-close">
                </div>
                <div class="note__list-title">
                    Домашнее задание по математике
                </div>
                <div class="note__list-description">
                    Теория параграф 2.3. Домашняя работа 1.2
                </div>
    `
    const closeButton = list.querySelector('.note__list-close');
    closeButton.addEventListener("click", ()=>{
        list.remove();
    })
    lists.appendChild(list);
})

