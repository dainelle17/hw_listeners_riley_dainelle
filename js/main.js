
//upon double click on the image it will display Andy Warhol Rocks//

function myFunction() {
    document.getElementById("img").innerHTML = "Andy Warhol Rocks!";
}

//will change h2 color //
var pageHeading = document.getElementById('h2');

pageHeading.addEventListener('click', function () {
    pageHeading.className = 'blue';
});

//will change screen on mouse over //
function over() {
   document.write ("Basquiat Yay");
    }

    function out() {
    document.write ("Warhol Yay");
    }


