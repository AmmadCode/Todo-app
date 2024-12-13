let button = document.querySelector("button");
let ul = document.querySelector("ul");
let input = document.querySelector("input");




button.addEventListener("click", function () {
    if (input.value.trim() === "") {
        alert("Please Enter your task");
        return
    };

    let item = document.createElement("li");
    item.innerText = input.value;
    item.style.borderBottom = " 1px solid #ccc";
    ul.appendChild(item);

    let dltbtn = document.createElement("button");
    dltbtn.innerText = "Delete";
    dltbtn.classList.add("delete");
    item.appendChild(dltbtn);
    input.value = "";
});

ul.addEventListener("click", function (event) {
    if (event.target.nodeName == "BUTTON") {
        let listName = event.target.parentElement;
        listName.remove();
    }

});