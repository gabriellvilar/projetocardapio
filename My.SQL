CREATE TABLE reservations (
    -- Criação do campo 'id' como chave primária. O 'AUTO_INCREMENT' faz com que o valor
    -- desse campo seja gerado automaticamente, incrementando a cada nova reserva.
    id INT AUTO_INCREMENT PRIMARY KEY,

    -- Criação do campo 'name' para armazenar o nome do cliente.
    -- O tipo 'VARCHAR(100)' permite armazenar até 100 caracteres.
    -- 'NOT NULL' significa que o campo não pode ser deixado vazio.
    name VARCHAR(100) NOT NULL, 

    -- Criação do campo 'date' para armazenar a data da reserva.
    -- O tipo 'DATE' é adequado para armazenar valores de data no formato 'YYYY-MM-DD'.
    -- 'NOT NULL' significa que o campo é obrigatório.
    date DATE NOT NULL,

    -- Criação do campo 'time' para armazenar a hora da reserva.
    -- O tipo 'TIME' é adequado para armazenar valores de hora no formato 'HH:MM:SS'.
    -- 'NOT NULL' significa que o campo é obrigatório.
    time TIME NOT NULL,

    -- Criação do campo 'guests' para armazenar o número de convidados.
    -- O tipo 'INT' é usado para armazenar valores inteiros.
    -- 'NOT NULL' significa que o campo é obrigatório.
    guests INT NOT NULL,

    -- Criação do campo 'created_at' para armazenar o timestamp (data e hora) da criação da reserva.
    -- O tipo 'TIMESTAMP' armazena data e hora no formato 'YYYY-MM-DD HH:MM:SS'.
    -- 'DEFAULT CURRENT_TIMESTAMP' atribui automaticamente o timestamp atual no momento da inserção.
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

