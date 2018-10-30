perso = document.getElementById("perso");
coordPerso = 0;
taille = 50;
bonbon1 = 34;
compteur = 0;
incre = parseInt($('#val1').val());

$(document).ready(function () {
    $('#next').hide();
})

$(document).keydown(function(e) {
    if(e.which == 37) //gauche
    {
        coordPerso -= 1;
        $("#"+coordPerso).append('<img class="perso" id="perso" src="assets/images/moche2.png" alt="">');
        $(perso).remove();
        perso = document.getElementById("perso");


        if (document.getElementById(coordPerso).children.length  == 2)
        {
            bonb = document.getElementById(coordPerso).firstChild;
            bonb.remove();
            taille += incre;
            var audio1 = new Audio('assets/sons/wreee.mp3');
            var audio2 = new Audio('assets/sons/ofarm.mp3');
            var audio3 = new Audio('assets/sons/Pigpissd.mp3');
            var audio4 = new Audio('assets/sons/squeal.mp3');
            var audio5 = new Audio('assets/sons/sons_pig.mp3');
            var table = [audio1, audio2, audio3, audio4, audio5];
            table[Math.floor(Math.random() * 4)].play();
            compteur++;

            if (compteur == 10)
            {
                $('#next').show();
            }
        }

        $(perso).css({'width' : ""+taille+"px", 'height' : ""+taille+"px"});


    }else if (e.which == 39) // droite
    {
        coordPerso += 1;
        $("#"+coordPerso).append('<img class="perso" id="perso" src="assets/images/moche2.png" alt="">');
        $(perso).remove();
        perso = document.getElementById("perso");

        if (document.getElementById(coordPerso).children.length  == 2)
        {
            bonb = document.getElementById(coordPerso).firstChild;
            bonb.remove();
            taille += incre;
            var audio1 = new Audio('assets/sons/wreee.mp3');
            var audio2 = new Audio('assets/sons/ofarm.mp3');
            var audio3 = new Audio('assets/sons/Pigpissd.mp3');
            var audio4 = new Audio('assets/sons/squeal.mp3');
            var audio5 = new Audio('assets/sons/sons_pig.mp3');
            var table = [audio1, audio2, audio3, audio4, audio5];
            table[Math.floor(Math.random() * 4)].play();
            compteur++;

            if (compteur == 10)
            {
                $('#next').show();
            }
        }

        $(perso).css({'width' : ""+taille+"px", 'height' : ""+taille+"px"});

    }else if (e.which == 38) // haut
    {
        coordPerso += 10;
        $("#"+coordPerso).append('<img class="perso" id="perso" src="assets/images/moche2.png" alt="">');
        $(perso).remove();
        perso = document.getElementById("perso");

        if (document.getElementById(coordPerso).children.length  == 2)
        {
            bonb = document.getElementById(coordPerso).firstChild;
            bonb.remove();
            taille += incre;
            var audio1 = new Audio('assets/sons/wreee.mp3');
            var audio2 = new Audio('assets/sons/ofarm.mp3');
            var audio3 = new Audio('assets/sons/Pigpissd.mp3');
            var audio4 = new Audio('assets/sons/squeal.mp3');
            var audio5 = new Audio('assets/sons/sons_pig.mp3');
            var table = [audio1, audio2, audio3, audio4, audio5];
            table[Math.floor(Math.random() * 4)].play();
            compteur++;

            if (compteur == 10)
            {
                $('#next').show();
            }
        }

        $(perso).css({'width' : ""+taille+"px", 'height' : ""+taille+"px"});

    }else if (e.which == 40)// bas
    {
        coordPerso -=10;
        $("#"+coordPerso).append('<img class="perso" id="perso" src="assets/images/moche2.png" alt="">');
        $(perso).remove();
        perso = document.getElementById("perso");

        if (document.getElementById(coordPerso).children.length  == 2)
        {
            bonb = document.getElementById(coordPerso).firstChild;
            bonb.remove();
            taille += incre;
            var audio1 = new Audio('assets/sons/wreee.mp3');
            var audio2 = new Audio('assets/sons/ofarm.mp3');
            var audio3 = new Audio('assets/sons/Pigpissd.mp3');
            var audio4 = new Audio('assets/sons/squeal.mp3');
            var audio5 = new Audio('assets/sons/sons_pig.mp3');
            var table = [audio1, audio2, audio3, audio4, audio5];
            table[Math.floor(Math.random() * 4)].play();
            compteur++;

            if (compteur == 10)
            {
                $('#next').show();
            }
        }

        $(perso).css({'width' : ""+taille+"px", 'height' : ""+taille+"px"});
    }
});


