<?php
// Habilita o reporte de erros para facilitar o diagnóstico de problemas
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Definindo as variáveis de conexão com o banco de dados
$dbHost = "localhost";   // Endereço do servidor de banco de dados
$dbUser = "root";        // Nome de usuário para conectar ao banco de dados
$dbPass = "";            // Senha para o banco de dados
$dbName = "restaurant_db";  // Nome do banco de dados onde as reservas são armazenadas

// Verifica se a requisição foi feita via método POST (envio do formulário)
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // Conectando ao banco de dados
    // O objeto mysqli é usado para estabelecer uma conexão com o banco
    $conn = new mysqli($dbHost, $dbUser, $dbPass, $dbName);
    
    // Verifica se houve algum erro ao tentar se conectar ao banco de dados
    if ($conn->connect_errno) {
        // Se houve erro na conexão, exibe a mensagem de erro e interrompe o script
        die("Falha na conexão: " . $conn->connect_error);
    }

    // Coleta os dados enviados pelo formulário usando o método POST
    // O operador ?? é usado para verificar se a variável está definida, se não, atribui um valor padrão
    $name = trim($_POST["name"] ?? '');   // Nome do cliente (remoção de espaços em branco extras)
    $date = $_POST["date"] ?? '';         // Data da reserva
    $time = $_POST["time"] ?? '';         // Hora da reserva
    $guests = intval($_POST["guests"] ?? 0);  // Número de pessoas (convertido para inteiro)

    // Validação: Verifica se todos os campos necessários estão preenchidos
    if (empty($name) || empty($date) || empty($time) || $guests <= 0) {
        // Se algum campo estiver vazio ou o número de convidados for inválido, exibe uma mensagem de erro
        echo "Por favor, preencha todos os campos corretamente.";
        exit;  // Interrompe a execução do script
    }

    // Prepara a consulta SQL para inserir a reserva no banco de dados
    // O comando SQL utiliza placeholders (?) para valores que serão vinculados posteriormente
    $stmt = $conn->prepare("INSERT INTO reservations (name, date, time, guests) VALUES (?, ?, ?, ?)");

    // Verifica se houve erro na preparação da consulta SQL
    if (!$stmt) {
        // Se houve erro, exibe a mensagem de erro e interrompe a execução
        die("Erro na preparação da consulta: " . $conn->error);
    }

    // Vincula os parâmetros para a consulta preparada
    // "sssi" indica os tipos de dados a serem passados: 
    // 's' para string (nome, data, hora), 'i' para inteiro (número de convidados)
    $stmt->bind_param("sssi", $name, $date, $time, $guests);

    // Executa a consulta SQL
    if ($stmt->execute()) {
        // Se a execução for bem-sucedida, exibe uma mensagem de confirmação
        echo "Reserva confirmada para $name em $date às $time para $guests pessoa(s).";
    } else {
        // Se ocorrer erro na execução da consulta, exibe a mensagem de erro
        echo "Erro ao fazer a reserva: " . $stmt->error;
    }

    // Fecha a consulta preparada (libera recursos)
    $stmt->close();

    // Fecha a conexão com o banco de dados
    $conn->close();
}
?>
