//variável do botão
let button = document.querySelector("#send");

//função das variáveis necessárias para calcular o imc
function imc(){
  let weight = document.querySelector('#weight').value;
  let size = document.querySelector('#size').value;
  let name = document.querySelector('#name').value;
  let res = document.querySelector('#result');
  //este if é para confirmar que os campos estão preenchidos
  if(weight !== '' && size !== '' && name !== '') {
    //variável do valor do imc 
    let valorImc = weight / (size * size);
    //variável para poder classifcar seu imc
    let classification = '';
    //este if é para determinar qual a classificação do imc digitado
    if (valorImc < 18.5){
      classification = 'abaixo do peso.'
    } else if (valorImc <= 24.9){
      classification = 'peso normal, parabéns!'
    } else if (valorImc <= 29.9){
      classification = 'com sobrepeso.'
    } else if (valorImc <= 34.9){
      classification ='com obesidade grau I.'
    } else if (valorImc <= 39.9){
      classification ='com obesidade grau II.'
    } else {
      classification ='com obesidade grau III.'
    };
    res.textContent = `${name}, seu IMC é ${valorImc.toFixed(1)} e você está ${classification}`;
  } else {
    res.textContent = "Preencha todos os campos!";
  }
};

//evento para o botão
button.addEventListener('click', imc);







