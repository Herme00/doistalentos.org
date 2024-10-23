let ul = document.querySelector(`ul`)
function openmenu(){
   ul.classList.add(`open`)
}
function closemenu(){
   ul.classList.remove(`open`)
}



// Função para exibir a notícia publicada (apenas a mais recente)
function exibirNoticias() {
    let novalista = JSON.parse(localStorage.getItem('novalista')) || [];
    const newsSection = document.getElementById('news-section');
    newsSection.innerHTML = ''; // Limpa a seção antes de exibir a nova notícia

    if (novalista.length > 0) {
        const newsItem = novalista[0]; // Exibe apenas a primeira (única) notícia

        const newsDiv = document.createElement('div');
        newsDiv.classList.add('news-item');

        // Monta o HTML da notícia
        let newsHTML = `<h3>${newsItem.title}</h3><p>${newsItem.content}</p><small>Publicado em: ${newsItem.date}</small>`;
        if (newsItem.image) {
            newsHTML += `<img src="${newsItem.image}" class="news-image" alt="Imagem da notícia">`;
        }

        newsDiv.innerHTML = newsHTML;
        newsSection.appendChild(newsDiv);
    }
}

// Exibir a notícia ao carregar a página
document.addEventListener('DOMContentLoaded', exibirNoticias);
