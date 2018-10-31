perso = document.getElementById("perso");
coordPerso = 0;
taille = 50;
bonbon1 = 34;
compteur = 0;
incre = parseInt($('#val1').val());
maxSize = parseInt($('#val2').val());

$(document).ready(function () {
    $('#next').hide();
    $('#victory').hide();
})

$(document).keydown(function(e) {
    if(e.which == 37) //gauche
    {
        coordPerso -= 1;
        $("#"+coordPerso).append('<img class="perso" id="perso" src="assets/images/citrouilleMoche2.png" alt="">');
        $(perso).remove();
        perso = document.getElementById("perso");


        if (document.getElementById(coordPerso).children.length  == 2)
        {
            bonb = document.getElementById(coordPerso).firstChild;
            if ($(bonb).hasClass("legumes"))
            {
                taille -= incre;
            } else
            {
                taille += incre;
            }

            bonb.remove();

            var audio1 = new Audio('assets/sons/wreee.mp3');
            var audio2 = new Audio('assets/sons/ofarm.mp3');
            var audio3 = new Audio('assets/sons/Pigpissd.mp3');
            var audio4 = new Audio('assets/sons/squeal3.mp3');
            var audio5 = new Audio('assets/sons/sons_pig.mp3');
            var table = [audio1, audio2, audio3, audio4, audio5];
            table[Math.floor(Math.random() * 4)].play();
            compteur++;

            if (compteur == 14)
            {
                $('#next').show();
            }
        }

        $(perso).css({'width' : ""+taille+"px", 'height' : ""+taille+"px"});


    }else if (e.which == 39) // droite
    {
        coordPerso += 1;
        $("#"+coordPerso).append('<img class="perso" id="perso" src="assets/images/citrouilleMoche2.png" alt="">');
        $(perso).remove();
        perso = document.getElementById("perso");

        if (document.getElementById(coordPerso).children.length  == 2)
        {
            bonb = document.getElementById(coordPerso).firstChild;
            if ($(bonb).hasClass("legumes"))
            {
                taille -= incre;
            } else
            {
                taille += incre;
            }

            bonb.remove();

            var audio1 = new Audio('assets/sons/wreee.mp3');
            var audio2 = new Audio('assets/sons/ofarm.mp3');
            var audio3 = new Audio('assets/sons/Pigpissd.mp3');
            var audio4 = new Audio('assets/sons/squeal3.mp3');
            var audio5 = new Audio('assets/sons/sons_pig.mp3');
            var table = [audio1, audio2, audio3, audio4, audio5];
            table[Math.floor(Math.random() * 4)].play();
            compteur++;

            if (compteur == 14)
            {
                $('#next').show();
            }
        }

        $(perso).css({'width' : ""+taille+"px", 'height' : ""+taille+"px"});

    }else if (e.which == 38) // haut
    {
        coordPerso += 10;
        $("#"+coordPerso).append('<img class="perso" id="perso" src="assets/images/citrouilleMoche2.png" alt="">');
        $(perso).remove();
        perso = document.getElementById("perso");

        if (document.getElementById(coordPerso).children.length  == 2)
        {
            bonb = document.getElementById(coordPerso).firstChild;
            if ($(bonb).hasClass("legumes"))
            {
                taille -= incre;
            } else
            {
                taille += incre;
            }

            bonb.remove();

            var audio1 = new Audio('assets/sons/wreee.mp3');
            var audio2 = new Audio('assets/sons/ofarm.mp3');
            var audio3 = new Audio('assets/sons/Pigpissd.mp3');
            var audio4 = new Audio('assets/sons/squeal3.mp3');
            var audio5 = new Audio('assets/sons/sons_pig.mp3');
            var table = [audio1, audio2, audio3, audio4, audio5];
            table[Math.floor(Math.random() * 4)].play();
            compteur++;

            if (compteur == 14)
            {
                $('#next').show();
            }
        }

        $(perso).css({'width' : ""+taille+"px", 'height' : ""+taille+"px"});

    }else if (e.which == 40)// bas
    {
        coordPerso -=10;
        $("#"+coordPerso).append('<img class="perso" id="perso" src="assets/images/citrouilleMoche2.png" alt="">');
        $(perso).remove();
        perso = document.getElementById("perso");

        if (document.getElementById(coordPerso).children.length  == 2)
        {
            bonb = document.getElementById(coordPerso).firstChild;
            if ($(bonb).hasClass("legumes"))
            {
                taille -= incre;
            } else
            {
                taille += incre;
            }

            bonb.remove();

            var audio1 = new Audio('assets/sons/wreee.mp3');
            var audio2 = new Audio('assets/sons/ofarm.mp3');
            var audio3 = new Audio('assets/sons/Pigpissd.mp3');
            var audio4 = new Audio('assets/sons/squeal3.mp3');
            var audio5 = new Audio('assets/sons/sons_pig.mp3');
            var table = [audio1, audio2, audio3, audio4, audio5];
            table[Math.floor(Math.random() * 4)].play();
            compteur++;

            if (compteur == 14)
            {
                $('#next').show();
            }
        }

        $(perso).css({'width' : ""+taille+"px", 'height' : ""+taille+"px"});
    }

    if (taille > maxSize)
    {
        setTimeout(explo1, 100)
        explo = new Audio('assets/sons/explo.mp3')
        explo.play();
        setTimeout(explo2, 200)
        setTimeout(explo3, 400)
        setTimeout(explo4, 600)
        setTimeout(explo5, 800)
        setTimeout(redir, 4000)

    }

    if (compteur == 15)
    {
        $('#victory').show();
        setTimeout(redirV, 4000);
    }
});


function explo1() {
    $("#"+coordPerso).append('<img class="perso" id="perso" src="assets/images/citrouilleMort1.png" alt="">');
    $(perso).remove();
    perso = document.getElementById("perso");
    $(perso).css({'width' : ""+taille+"px", 'height' : ""+taille+"px"});

}
function explo2() {
    $("#"+coordPerso).append('<img class="perso" id="perso" src="assets/images/citrouilleMort2.png" alt="">');
    $(perso).remove();
    perso = document.getElementById("perso");
    $(perso).css({'width' : ""+taille+"px", 'height' : ""+taille+"px"});

}
function explo3() {
    $("#"+coordPerso).append('<img class="perso" id="perso" src="assets/images/citrouilleMort3.png" alt="">');
    $(perso).remove();
    perso = document.getElementById("perso");
    $(perso).css({'width' : ""+taille+"px", 'height' : ""+taille+"px"});

}

function explo4() {
    $("#"+coordPerso).append('<img class="perso" id="perso" src="assets/images/citrouilleMort4.png" alt="">');
    $(perso).remove();
    perso = document.getElementById("perso");
    $(perso).css({'width' : ""+taille+"px", 'height' : ""+taille+"px"});

}
function explo5() {
    $("#"+coordPerso).append('<img class="perso" id="perso" src="assets/images/citrouilleMort5.png" alt="">');
    $(perso).remove();
    perso = document.getElementById("perso");
    $(perso).css({'width' : ""+taille+"px", 'height' : ""+taille+"px"});

}

function redir()
{
    window.location="http://localhost:8000/gameover.html";
}

function redirV()
{
    window.location="http://localhost:8000/apiProducts.php";
}