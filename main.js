const handlePhone = (event) => {
  let input = event.target
  input.value = phoneMask(input.value)
}

const phoneMask = (value) => {
  if (!value) return ""
  value = value.replace(/\D/g,'')
  value = value.replace(/(\d{2})(\d)/,"($1) $2")
  value = value.replace(/(\d)(\d{4})$/,"$1-$2")
  return value
}

const form = document.getElementById('formulario');
const nomes = [];
const telefones = [];
const emails = [];

let linhas ='';

form.addEventListener('submit', function(e) {
  e.preventDefault();
  adicionaLinha();
  atualizaTabela();
});

function adicionaLinha() {
  const inputNome = document.getElementById('nome');
  const inputTelefone = document.getElementById('telefone');
  const inputEmail = document.getElementById('email');

  if (nomes.includes(inputNome.value)) {
    alert(`O contato ${inputNome.value} já existe. Escolha outro nome.`);
  } else {
    nomes.push(inputNome.value);
    telefones.push(inputTelefone.value);
    emails.push(inputEmail.value);

    let linha = '<tr>';
    linha += `<td>${inputNome.value}</td>`;
    linha += `<td>${inputTelefone.value}</td>`;
    linha += `<td>${inputEmail.value}</td>`;
    linha += `</tr>`;

    linhas += linha;
  }

  inputNome.value = '';
  inputTelefone.value = '';
  inputEmail.value = '';
}

function atualizaTabela() {
  const corpoTabela = document.querySelector('tbody');
  corpoTabela.innerHTML = linhas;
}