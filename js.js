const inserir = document.querySelector("#inserir-dados");

fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
      .then(inserir.append(json));


