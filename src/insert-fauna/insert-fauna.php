<?php
require('../common/php/simple-connect.php');
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../common/css/style.page.css">
    <link rel="stylesheet" href="../common/css/style-font.css">
    <link rel="stylesheet" href="./css/style-insert-fauna.css">
    <link rel="stylesheet" href="../common/css/style-media.css">
    <title>Insert fauna</title>
</head>

<body>
    <div class="background">

        <div class="wrapper-header-main-content">
            <div class="wrapper-logo">
                <p class="logo">Aggiungere nuovo esemplare di fauna</p>
            </div>
            <div class="wrapper-insert-form">

                <form method="post" action="./php/create.php">


                    <div class="wrapper-insert-data">

                        <div class="wrapper-input">
                            <div class="insert-text">Tipo:</div>
                            <?php
                            $data_supporto = mysqli_query($connect, "SELECT * FROM `KindFauna`;");
                            $data_supporto = mysqli_fetch_all($data_supporto);

                            ?>
                            <select name="idTipo" id="idSupporto" required>
                                <?php
                                foreach ($data_supporto as $data) { ?>
                                    <option>
                                        <?= $data[0] ?>
                                        <p class="small-data">
                                             <?= $data[1] ?> 
                                        </p>
                                    </option>
                                <?php
                                }
                                ?>
                            </select>

                        </div>

                        <div class="wrapper-input">
                            <div class="insert-text">Specie:</div>
                            <?php
                            $data_supporto = mysqli_query($connect, "SELECT * FROM `TypeFauna`;");
                            $data_supporto = mysqli_fetch_all($data_supporto);

                            ?>
                            <select name="idSpecie" id="idSupporto" required>
                                <?php
                                foreach ($data_supporto as $data) { ?>
                                    <option>
                                        <?= $data[0] ?>
                                        <p class="small-data">
                                             <?= $data[1] ?> 
                                        </p>
                                    </option>
                                <?php
                                }
                                ?>
                            </select>
                        </div>

                        <div class="wrapper-input">
                            <div class="insert-text">Sesso:</div>
                            <?php
                            $data_supporto = mysqli_query($connect, "SELECT * FROM `Sex`;");
                            $data_supporto = mysqli_fetch_all($data_supporto);

                            ?>
                            <select name="idSesso" id="idSupporto" required>
                                <?php
                                foreach ($data_supporto as $data) { ?>
                                    <option>
                                        <?= $data[0] ?>
                                        <p class="small-data">
                                              <?= $data[1] ?> 
                                        </p>
                                    </option>
                                <?php
                                }
                                ?>
                            </select>
                        </div>

                        <div class="wrapper-input">
                            <div class="insert-text">Età:</div>
                            <?php
                            $data_supporto = mysqli_query($connect, "SELECT * FROM `Age`;");
                            $data_supporto = mysqli_fetch_all($data_supporto);

                            ?>
                            <select name="idEta" id="idSupporto" required>
                                <?php
                                foreach ($data_supporto as $data) { ?>
                                    <option>
                                        <?= $data[0] ?>
                                        <p class="small-data">
                                              <?= $data[1] ?> 
                                        </p>
                                    </option>
                                <?php
                                }
                                ?>
                            </select>
                        </div>

                        <div class="wrapper-input">
                            <div class="insert-text">Salute:</div>

                            <?php
                            $data_supporto = mysqli_query($connect, "SELECT * FROM `Health`;");
                            $data_supporto = mysqli_fetch_all($data_supporto);

                            ?>
                            <select name="idSalute" id="idSupporto" required>
                                <?php
                                foreach ($data_supporto as $data) { ?>
                                    <option>
                                        <?= $data[0] ?>
                                        <p class="small-data">
                                             <?= $data[1] ?> 
                                        </p>
                                    </option>
                                <?php
                                }
                                ?>
                            </select>
                        </div>

                        <div class="wrapper-input">
                            <div class="insert-text">Quantità:</div>
                            <input type="text" class="input-data" name="input-data-quantità" required>
                        </div>

                        <div class="wrapper-input">
                            <div class="insert-text">Nome:</div>
                            <textarea type="text" class="input-data" name="input-data-nome" required></textarea>
                        </div>
                    </div>

                    <div class="wrapper-button">
                        <button type="submit" class="aggiungere-eseplare">Aggiungere</button>
                    </div>
            </div>

            </form>

        </div>


    </div>

</body>

<script src="./js/view-fauna-element.js" type="module"></script>

</html>