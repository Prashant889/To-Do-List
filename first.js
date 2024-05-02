let input = document.querySelector("input");
let btn = document.querySelector("button");
let list = document.querySelector(".list");

btn.addEventListener("click", ()=> {
    if (input.value === "") {
        alert("You must write something!");
    } else {
        let listItem = document.createElement("li");
        listItem.innerHTML = input.value;
        list.appendChild(listItem);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // Adding Cross icon
        listItem.appendChild(span); //adding append element in listitem
    }
    input.value = ""; //Input area will be blank after click add button
    saveData();
})


list.addEventListener("click", (e)=> {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("cross"); //removeing task in to do list cross button function
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove(); //removing whole li element
        saveData();
    }
}, false)

//For saving in local storage
function saveData() {
    localStorage.setItem("data", list.innerHTML);
}
function showTask() {
    list.innerHTML = localStorage.getItem("data");
}
showTask();


