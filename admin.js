// Seleciona o formulário de adição de notícias
const newsForm = document.getElementById('newsForm');

// Função para salvar a notícia no LocalStorage
newsForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtém os valores dos campos do formulário
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    const date = new Date().toLocaleString(); // Data e hora da publicação

    // Cria um objeto de notícia
    const newsItem = { title, content, date };

    // Obtém a lista de notícias do LocalStorage ou cria uma nova
    let newsList = JSON.parse(localStorage.getItem('newsList')) || [];

    // Adiciona a nova notícia à lista
    newsList.push(newsItem);

    // Armazena a lista de notícias atualizada no LocalStorage
    localStorage.setItem('newsList', JSON.stringify(newsList));

    // Limpa os campos do formulário
    newsForm.reset();

    // Alerta o usuário
    alert('Notícia publicada com sucesso!');
});
