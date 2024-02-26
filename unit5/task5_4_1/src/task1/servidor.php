<?php 
$usuarios = [
    "1" => "usuario1",
    "2" => "usuario2"
];


if($_POST['user']){
    echo "El nombre se ha recibido";
    echo $usuarios[2];
}else{
    echo "El nombre no se ha recibido";
}

?>