// const botao = document.getElementById('botao')
// const catImages = document.getElementById('catIMages')

// botao.addEventListener('click', fetchCatImages)

// function fetchCatImages() {
//     fetch('https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=10')
//      .then(response => {
//         if(!response.ok){
//             throw new Error("A solicitaçao nao foi bem-sucedida")
//         }
//         return response.json();

//     })
//     .then(data => {
//         catImages.innerHTML = '';
//         data.forEach(cat => {
//             const catImage = document.createElement('img')
//             catImage.src = cat.url;
//             catImage.alt = 'imagem de gato';
//             catImages.appendChild(catImage)
//         })
//     })
//     .catch(error => {
//         console.error('Erro: ' , error)
//     })
// };



const botao = document.querySelector('#botao')
const result = document.querySelector('#result')

botao.addEventListener('click', recuperarDados)

function recuperarDados() {

    const input = document.querySelector('#userGit').value

    fetch("https://api.github.com/users/${userInput}")
    .then(response => {
        if(!response.ok) {
            throw new Error('a solicitaçao ano foi bem-sucedida')
        }
        return response.json();
    })
    .then(data => {
        result.innerHTNL = '';

            const infoGit = document.createElement('h2')
            infoGit.textContent = `usuario: ${data.login}`;
            result.appendChild(infoGit);

            const profileLink = document.createElement('a');
            profileLink.href = data.html_url;
            profileLink.textContent = 'Perfil do GitHub';
            profileLink.target = '_blank'; // Abre o link em uma nova aba
            result.appendChild(profileLink);

        })
        .catch(error => {
            console.error('Erro:', error);
            result.innerHTML = 'Erro ao recuperar dados.';
        });
    
    }