const bouton = document.getElementById("btnSouvenir");
const souvenir = document.getElementById("souvenir");

const texte = "Les souvenirs de l’école sont inoubliables💕";
let index = 0;

bouton.addEventListener("click", function () {
    souvenir.classList.add("visible");
    souvenir.textContent = "";
    index = 0;

    function ecrire() {
        if (index < texte.length) {
            souvenir.textContent += texte.charAt(index);
            index++;
            setTimeout(ecrire, 80);
        }
    }

    ecrire();
});
