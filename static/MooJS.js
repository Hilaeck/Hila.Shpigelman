function changeImage() {
    var image = document.getElementById('woman');
    if (image.src.match("../static/womanMoney.jpg")) {
        image.src = "../static/MoneyCow.jpg";

    }
    else {
        image.src = "../static/womanMoney.jpg";
    }
}

function sayThankU() {
    var input = document.getElementById("firstName");
    alert(`Thank you!
     we've got your details and we will contact you ASAP :)`);
    }
