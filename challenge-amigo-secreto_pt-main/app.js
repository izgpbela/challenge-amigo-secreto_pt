// Array para armazenar os amigos
let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    const inputField = document.getElementById("inputfield");
    const nome = inputField.value.trim(); // Captura e remove espaços extras

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
    const lista = document.getElementById("lista");
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
    const sorteado = document.getElementById("sorteado");
    sorteado.textContent = `O amigo secreto sorteado é: ${amigoSecreto}`;

    // Limpa a lista de amigos
    amigos = [];
    updateAmigos();
}
