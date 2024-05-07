const inserir = document.querySelector("#inserir-dados");

fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => {
            if (!response.ok) {
                  throw new Error('Erro ao obter os dados');
            }
            return response.json();
      })
      .then(data => {
            data.forEach(item => {
                  const p = document.createElement('p');
                  p.textContent = `ID: ${item.id}`;
                  //inserir.appendChild(p);
            });
      })
      .catch(error => {
            console.error("ERRO: " + error);
      });

function pesquisaId(){
      const pesquisa = document.querySelector("#pesquisar-teste");
      const conteudo = pesquisa.value;
      console.log(conteudo);
}