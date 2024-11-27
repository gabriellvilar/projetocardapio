<?php

$host = 'localhost';
$dbname = 'pedidos'; 
$username = 'root'; 
$password = ''; 


try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo 'Erro de conexão: ' . $e->getMessage();
    exit();
}


if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  
    $nome = trim($_POST['nome']);
    $email = trim($_POST['email']);
    $endereco = trim($_POST['endereco']);
    $telefone = trim($_POST['telefone']);
    $pedido = trim($_POST['pedido']);

   
    if (empty($nome) || empty($email) || empty($endereco) || empty($telefone) || empty($pedido)) {
        echo 'Todos os campos obrigatórios devem ser preenchidos.';
        exit();
    }

    
    try {
        $sql = "INSERT INTO pedidos (nome, email, endereco, telefone, pedido) VALUES (?, ?, ?, ?, ?)";
        $stmt = $pdo->prepare($sql);
        $stmt->execute([$nome, $email, $endereco, $telefone, $pedido]);

        echo 'Pedido enviado com sucesso!';
    } catch (PDOException $e) {
        
        echo 'Erro ao salvar o pedido: ' . $e->getMessage();
    }
}
?>
