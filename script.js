const imagens = document.querySelectorAll('img.imagem-personagem');
const nomes = document.querySelectorAll('p.nome-personagem');
const botao = document.querySelector('button#novo-personagem');

gerarValorAleatorio = () => {
  return Math.floor(Math.random() * 671);
};

const personagens = function pegarPersonagem() {
  let numeroAleatorio = new Array(4);

  for (let i = 0; i < numeroAleatorio.length; i ++) {
    numeroAleatorio[i] = gerarValorAleatorio();
  }

  return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      
      for(let i = 0; i < data.length; i++) {
        imagens[i].src = data[i].image;
        imagens[i].alt = data[i].name;
        nomes[i].innerHTML = data[i].name;
      }
    });
}

personagens();

botao.onclick = personagens;