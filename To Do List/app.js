const input = document.querySelector("#input");
const toDoBox = document.querySelector("#to-do-box");

input.addEventListener("keyup", function (event) {
    if(event.key == "Enter"){
        addToDo(input.value);
        input.value = "";
    }
})

const addToDo = (input) => {
    let listItem = document.createElement("li");
    listItem.innerHTML = `${input} <i class="fas fa-times"></i>`;

    listItem.addEventListener("click", function(){
        this.classList.toggle("done")
    })

    listItem.querySelector("i")
    .addEventListener("click", function(){
        listItem.remove()
    })

    toDoBox.appendChild(listItem);
}

