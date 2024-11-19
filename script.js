// Função associada ao envio do formulário de reserva
document.getElementById("reservationForm").onsubmit = async function(event) {
    // Previne o comportamento padrão de envio do formulário (que recarregaria a página)
    event.preventDefault();

    // Cria um objeto FormData que contém todos os dados do formulário
    const formData = new FormData(this);

    // Obtém a referência para a caixa de mensagens que será usada para mostrar feedback ao usuário
    const messageBox = document.getElementById("message");

    // Obtém os valores de data e hora inseridos pelo usuário
    const dateInput = document.getElementById("date").value;
    const timeInput = document.getElementById("time").value;

    // Combina a data e a hora em um único objeto Date
    const selectedDateTime = new Date(`${dateInput}T${timeInput}`);
    
    // Cria um objeto Date representando o momento atual (data e hora atuais)
    const currentDateTime = new Date();

    // Limpa qualquer classe de sucesso ou erro anterior da caixa de mensagem
    messageBox.classList.remove("success", "error");

    // Verifica se a data e hora selecionadas são no futuro, em comparação com a data e hora atuais
    if (selectedDateTime <= currentDateTime) {
        // Se a data/hora não for no futuro, exibe uma mensagem de erro
        messageBox.innerText = "Por favor, escolha uma data e hora futura.";
        messageBox.classList.add("error"); // Adiciona a classe de erro para estilizar a mensagem
        messageBox.style.display = "block"; // Exibe a caixa de mensagem
        return; // Interrompe a execução para não enviar o formulário
    }

    // Caso a data e hora sejam válidas, exibe uma mensagem de "Enviando..."
    messageBox.innerText = "Enviando...";
    messageBox.style.display = "block"; // Exibe a caixa de mensagem enquanto aguarda a resposta

    // Envia os dados do formulário para o servidor de forma assíncrona (sem recarregar a página)
    try {
        const response = await fetch("reservation.php", {
            method: "POST", // Define o método de envio como POST
            body: formData // Envia os dados do formulário como corpo da requisição
        });

        // Obtém a resposta do servidor em formato de texto
        const result = await response.text();

        // Verifica se a resposta do servidor contém a palavra "confirmada"
        if (result.includes("confirmada")) {
            // Se a reserva for confirmada, exibe uma mensagem de sucesso
            messageBox.classList.add("success"); // Adiciona a classe de sucesso para estilizar a mensagem
            messageBox.innerText = result; // Exibe a mensagem de confirmação
            this.reset(); // Reseta os campos do formulário
        } else {
            // Se houver algum erro, exibe uma mensagem de erro
            messageBox.classList.add("error"); // Adiciona a classe de erro para estilizar a mensagem
            messageBox.innerText = result || "Erro ao fazer a reserva. Tente novamente."; // Exibe a mensagem de erro ou um erro genérico
        }
    } catch (error) {
        // Se ocorrer um erro de conexão com o servidor, exibe uma mensagem de erro
        messageBox.classList.add("error");
        messageBox.innerText = "Erro na conexão. Tente novamente."; // Exibe uma mensagem genérica de erro
    }
};
