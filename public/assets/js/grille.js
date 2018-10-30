perso = document.getElementById("perso");
coordPerso = 3;

$(document).keydown(function(e) {
    if(e.which == 37) //gauche
    {
        coordPerso -= 1;
        $("#"+coordPerso).append('<img class="perso" id="perso" src="assets/images/bonbonzizi.png" alt="">');
        $(perso).remove();
        perso = document.getElementById("perso");

    }else if (e.which == 39) // droite
    {
        coordPerso += 1;
        $("#"+coordPerso).append('<img class="perso" id="perso" src="assets/images/bonbonzizi.png" alt="">');
        $(perso).remove();
        perso = document.getElementById("perso");

    }else if (e.which == 38) // haut
    {
        coordPerso += 10;
        $("#"+coordPerso).append('<img class="perso" id="perso" src="assets/images/bonbonzizi.png" alt="">');
        $(perso).remove();
        perso = document.getElementById("perso");

    }else if (e.which == 40)// bas
    {
        coordPerso -=10;
        $("#"+coordPerso).append('<img class="perso" id="perso" src="assets/images/bonbonzizi.png" alt="">');
        $(perso).remove();
        perso = document.getElementById("perso");
    }
});