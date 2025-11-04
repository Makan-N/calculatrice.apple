let un = document.getElementById("un");
let deux = document.getElementById("deux");
let trois = document.getElementById("trois");
let quatre = document.getElementById("quatre");
let cinq = document.getElementById("cinq");
let six = document.getElementById("six");
let sept = document.getElementById("sept");
let huit = document.getElementById("huit");
let neuf = document.getElementById("neuf");
let zero = document.getElementById("zero");
let efface = document.getElementById("efface");
let pourcent = document.getElementById("pourcent");
let diviser = document.getElementById("diviser");
let multiplier = document.getElementById("multiplier");
let moins = document.getElementById("moins");
let plus = document.getElementById("plus");
let egale = document.getElementById("egale");
let afficheNombre = document.getElementById("afficheNombre");
let afficheSigne = document.getElementById("afficheSigne");
let autreNombre = document.getElementById("autreNombre");
let resultat = document.getElementById("resultat");
let remiseaZero = document.getElementById("raz");
let virgule = document.getElementById("virgule");

let affichage = afficheNombre;

// Aficcher les nombres 
un.addEventListener("click", function () {
    affichage.innerText += 1;

});

deux.addEventListener("click", function () {

    if (affichage.innerHTML == "0") {
        affichage.innerHTML = 2;

    } else if (affichage.innerText != "0") {
        affichage.innerText += 2;
    }




});

trois.addEventListener("click", function () {


    if (affichage.innerHTML == "0") {
        affichage.innerHTML = 3;

    } else if (affichage.innerText != "0") {
        affichage.innerText += 3;
    }




});

quatre.addEventListener("click", function () {
    if (affichage.innerHTML == "0") {
        affichage.innerHTML = 4;

    } else if (affichage.innerText != "0") {
        affichage.innerText += 4;
    }





});

cinq.addEventListener("click", function () {
    if (affichage.innerHTML == "0") {
        affichage.innerHTML = 5;

    } else if (affichage.innerText != "0") {
        affichage.innerText += 5;
    }





});

six.addEventListener("click", function () {

    if (affichage.innerHTML == "0") {
        affichage.innerHTML = 6;

    } else if (affichage.innerText != "0") {
        affichage.innerText += 6;
    }




});

sept.addEventListener("click", function () {
    if (affichage.innerHTML == "0") {
        affichage.innerHTML = 7;

    } else if (affichage.innerText != "0") {
        affichage.innerText += 7;
    }





});

huit.addEventListener("click", function () {
    if (affichage.innerHTML == "0") {
        affichage.innerHTML = 8;

    } else if (affichage.innerText != "0") {
        affichage.innerText += 8;
    }




});

neuf.addEventListener("click", function () {

    if (affichage.innerHTML == "0") {
        affichage.innerHTML = 9;

    } else if (affichage.innerText != "0") {
        affichage.innerText += 9;
    }




});

zero.addEventListener("click", function () {

    if (affichage.innerText == "") {
        affichage.innerText = "0";

    } else {
        affichage.innerText += "0";
    }

});


// Afficher les signes
plus.addEventListener("click", function () {

    afficheSigne.innerText = "+";


    if (afficheNombre.innerText == "") {
        affichage = afficheNombre;
    } else {
        affichage = autreNombre;
    }

});

moins.addEventListener("click", function () {
    afficheSigne.innerText = "-";

    if (afficheNombre.innerText == "") {
        affichage = afficheNombre;
    } else {
        affichage = autreNombre;
    }
});

diviser.addEventListener("click", function () {
    afficheSigne.innerText = "/";

    if (afficheNombre.innerText == "") {
        affichage = afficheNombre;
    } else {
        affichage = autreNombre;
    }
});

multiplier.addEventListener("click", function () {
    afficheSigne.innerText = "x";

    if (afficheNombre.innerText == "") {
        affichage = afficheNombre;
    } else {
        affichage = autreNombre;
    }
});

virgule.addEventListener("click", function () {

    // regex d'un point dans la chaine de caractère
    let regexPoint = /\./g;

    if (affichage.innerText == "") {
        affichage.innerText = "0.";
    } else if (affichage.innerText != "0." && affichage.innerText.search(regexPoint) < 0) {
        affichage.innerText += ".";
    }







});



// Supprime tout 
remiseaZero.addEventListener("click", function () {

    afficheNombre.innerText = "";
    afficheSigne.innerText = "";
    autreNombre.innerText = "";
    resultat.innerText = "";
    affichage = afficheNombre;
});


efface.addEventListener("click", function () {

   affichage.innerText = affichage.innerText.slice(0,-1);
});



//Les oparations 

egale.addEventListener("click", function () {
    let operation = afficheSigne.innerText

    switch (operation) {
        case "+":
            resultat.innerText = Number(afficheNombre.innerText) + Number(autreNombre.innerText);
            break;

        case "-":
            resultat.innerText = Number(afficheNombre.innerText) - Number(autreNombre.innerText);
            break;

        case "/":
            if (autreNombre.innerText == "0") {
                resultat.innerText = " Pas possible";
            } else {
                resultat.innerText = Number(afficheNombre.innerText) / Number(autreNombre.innerText);
            }

            break;

        case "x":
            resultat.innerText = Number(afficheNombre.innerText) * Number(autreNombre.innerText);
            break;
    }


});









