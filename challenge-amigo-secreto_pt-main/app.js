// Array para armazenar os amigos
let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    const inputField = document.getElementById("amigo"); // Alinhado ao ID do input no HTML
    const nome = inputField.value.trim(); // Remove espaços extras

    if (nome === "") {
        alert("Digite o nome dos seus amigos.");
        return;
    }

    // Adiciona o nome ao array
    amigos.push(nome);

    // Atualiza a lista de amigos exibida
    updateAmigos();

    // Limpa o campo de entrada
    inputField.value = "";
}

// Função para atualizar a lista de amigos na interface
function updateAmigos() {
    const lista = document.getElementById("listaAmigos"); // Alinhado ao ID da lista no HTML
    lista.innerHTML = ""; // Limpa a lista existente para evitar duplicados

    // Adiciona cada amigo como um <li>
    for (let amigo of amigos) {
        const listItem = document.createElement("li");
        listItem.textContent = amigo;
        lista.appendChild(listItem);
    }
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("A lista está vazia. Adicione amigos antes de sortear.");
        return;
    }

    // Seleciona um nome aleatório da lista
    const amigoSecreto = amigos[Math.floor(Math.random() * amigos.length)];

    // Exibe o nome sorteado
    const resultado = document.getElementById("resultado"); // Alinhado ao ID da lista de resultados no HTML
    resultado.innerHTML = `<li>O amigo secreto sorteado é: ${amigoSecreto}</li>`;
}
