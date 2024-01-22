let box = document.querySelectorAll(".box")
let body = document.querySelector("body")

box.forEach(function(box) {
    console.log(box)
    box.addEventListener("click", function (e) {
        console.log(e)
        if(e.target.id === "red") {
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === "yellow") {
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === "pink") {
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === "purple") {
            body.style.backgroundColor = e.target.id;
        }
    })
})