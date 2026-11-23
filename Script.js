var form = document.getElementById("regForm");
var result = document.getElementById("result");


form.addEventListener("submit", function (event) {
    event.preventDefault(); // stop the page from reloading

    var name = document.getElementById("name").value;

    result.textContent = "Thank you, " + name + "! You are registered.";

    form.reset(); // clear the form
});