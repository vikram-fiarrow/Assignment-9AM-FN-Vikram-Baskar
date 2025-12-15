const box = document.getElementById('box');

box.addEventListener("click", function() {
    box.textContent = "Clicked!";
    box.style.color = "red";

})

box.addEventListener("dblclick", function() {
    box.textContent = "Double Clicked!";
    box.style.color = "green";
})


box.addEventListener("mouseover", function() {
    box.textContent = "Mouse Over!";
    box.style.backgroundColor = "pink";
})


box.addEventListener("mouseout", function() {
    box.textContent = "Mouse Out!";
    box.style.backgroundColor = "lightgreen";
})

// box.addEventListener("keydown", function(event) {
//     box.textContent = `Key Down: ${event.key}`;
//     box.style.backgroundColor = "lightblue";
// })