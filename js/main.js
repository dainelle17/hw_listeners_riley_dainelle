var clickCount = 1;
document.getElementById("click");

clicker.addEventListener("Click", function counter () {
    var myElement = document.createElement ("p");
    myElement.innerHTML = "This is click number" +
    clickCount++;

document.body.appendChild(myElement);
}
