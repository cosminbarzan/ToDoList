const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector("ul");

var id = 1;

button.addEventListener("click", () => {
    const textValue = input.value;

    const listElement = document.createElement("li");
    listElement.setAttribute("id", "id" + id);

    listElement.innerHTML = textValue + ' <button class="remove'+ id +'">Done</button>';

    list.appendChild(listElement);

    input.value = "";

    const newButton = document.querySelector("."+"remove"+id);
    console.log(newButton);

    const idToFind = "#id" + id;
    
    newButton.addEventListener("click", (event) => {
        const liElem = document.querySelector(idToFind);

        list.removeChild(liElem);
    })
    
    id += 1;
})
