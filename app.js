
function loadpk() {
      let numero = prompt("Digite um numero");
      let url = `https://pokeapi.co/api/v2/pokemon/${numero}`;
      fetch(url)
            .then(response => response.json())
            .then(data => {
                  console.log(data);
                  document.getElementById('nome').innerHTML = data.name;
                  document.getElementById('numero').innerHTML = data.id;
                  let img = data.sprites.front_default;
                  document.getElementById('pic').setAttribute('src', img);
                  document.getElementById('exp').innerHTML = data.base_experience;
            })
            .catch(erro => console.log("Erro: " + erro));


}

document.getElementById('btn1').onclick = loadpk;