<!doctype html>
<html lang="fr">
<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <link rel="stylesheet" href="assets/css/accueil.css">
    <link href="https://fonts.googleapis.com/css?family=Nosifer" rel="stylesheet">


    <title>The Very Noisy Fatty</title>
</head>

<header>
    <div id="mainTitle">
        <h1>The Very Noisy Fatty</h1>
    </div>
</header>

<body>

<?php

require '../config/db.php';

$pdo = new PDO(DSN, USER, PASS);
$query = "SELECT * FROM products";
$res = $pdo->query($query);
$resAll = $res->fetchAll();

?>

    <div class="row">
        <div class="col-12">
            <p class="congrats">Congratulations, here's what you ate! </p>
        </div>
<?php
foreach ($resAll as $card)
{?>
        <div class="col-5 offset-1">
            <div class="card" style="width:400px">
                <img class="card-img-top center-block" id="image" src="<?php echo $card['image'];?>" alt="Card image">
                <div class="card-body">
                    <h3 class="col-12 card-name" id="card"><?php echo $card['name'];?></h3>
                    <h2 class="col-12 card-brand" id="card"><?php echo $card['brand'];?></h2>
                    <a href="<?php echo $card['website'];?>" class="col-12 btn btn-danger">See more</a>
                </div>
            </div>
        </div>
<?php }
?>
    </div>
        <div class="row">
            <div class="col-6 container-fluid text-center" id="startButton">
                <a href="accueil.html" role="button" class="btn-lg btn-danger">HOME</a>
            </div>
        </div>
        <img class="container-fluid" src="assets/images/fog.png" alt="fog">

<!-- Optional JavaScript -->
<!-- jQuery first, then Popper.js, then Bootstrap JS -->
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
<script>
    $(document).ready(function () {
        music = new Audio('assets/sons/music.mp3')
        music.play();
    })
</script>
</body>

</html>