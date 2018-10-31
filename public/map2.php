<?php
/**
 * Created by PhpStorm.
 * User: ikows
 * Date: 30/10/18
 * Time: 18:15
 */
?>

<!doctype html>
<html lang="en">
<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <link rel="stylesheet" href="assets/css/grille.css">
    <style>
        body {
            background-image: url("assets/images/bg4.jpg");
            background-size: cover;
        }
    </style>
    <title>The Very Noisy Fatty</title>
</head>
<body>
<input type="hidden" id="val1" value="15">
<input type="hidden" id="val2" value="110">

<div class="container-fluid gridHolder">
    <div class="row" id="toto">
        <div class="col zones" id="40"><img class="bonbons" id="b40" src="assets/images/schokobon.png" alt=""></div>
        <div class="col zones" id="41"></div>
        <div class="col zones" id="42"><img class="bonbons" id="b42" src="assets/images/bonbonzizi.png" alt=""></div>
        <div class="col zones" id="43"></div>
        <div class="col zones" id="44"></div>
        <div class="col zones" id="45"><img class="bonbons legumes" id="b45" src="assets/images/chou.png" alt=""></div>
        <div class="col zones" id="46"></div>
    </div>
    <div class="row">
        <div class="col zones" id="30"><img class="bonbons" id="b30" src="assets/images/reglisse.png" alt=""></div>
        <div class="col zones" id="31"><img class="bonbons" id="b31" src="assets/images/dragibus.png" alt=""></div>
        <div class="col zones" id="32"><img class="bonbons legumes" id="b32" src="assets/images/brocoli.png" alt=""></div>
        <div class="col zones" id="33"></div>
        <div class="col zones" id="34"></div>
        <div class="col zones" id="35"></div>
        <div class="col zones" id="36"></div>
    </div>
    <div class="row">
        <div class="col zones" id="20"><img class="bonbons legumes" id="b20" src="assets/images/courgette.png" alt=""></div>
        <div class="col zones" id="21"><img class="bonbons" id="b21" src="assets/images/maomam.png" alt=""></div>
        <div class="col zones" id="22"></div>
        <div class="col zones" id="23"><img class="bonbons" id="b23" src="assets/images/tagada.png" alt=""></div>
        <div class="col zones" id="24"></div>
        <div class="col zones" id="25"></div>
        <div class="col zones" id="26"></div>
    </div>
    <div class="row">
        <div class="col zones" id="10"></div>
        <div class="col zones" id="11"></div>
        <div class="col zones" id="12"></div>
        <div class="col zones" id="13"><img class="bonbons" id="b31" src="assets/images/ours.png" alt=""></div>
        <div class="col zones" id="14"></div>
        <div class="col zones" id="15"></div>
        <div class="col zones" id="16"><img class="bonbons legumes" id="b16" src="assets/images/chou.png" alt=""></div>
    </div>
    <div class="row">
        <div class="col zones" id="0"><img class="perso" id="perso" src="assets/images/citrouilleMoche2.png" alt=""></div>
        <div class="col zones" id="1"></div>
        <div class="col zones" id="2"></div>
        <div class="col zones" id="3"><img class="bonbons legumes" id="b3" src="assets/images/courgette.png" alt=""></div>
        <div class="col zones" id="4"><img class="bonbons" id="b4" src="assets/images/skittles.png" alt=""></div>
        <div class="col zones" id="5"></div>
        <div class="col zones" id="6"><img class="bonbons" id="b6" src="assets/images/schtroumpf.png" alt=""></div>
    </div>


</div>
<div><a href="map3.php" role="button" class="btn-lg" id="next">Aller au niveau 3</a></div>

<!-- Optional JavaScript -->
<!-- jQuery first, then Popper.js, then Bootstrap JS -->
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
<script src="assets/js/grille.js"></script>
<script>
    $(document).ready(function () {
        horror = new Audio('assets/sons/horror.mp3')
        horror.play();
    })
</script>
</body>
</html>
