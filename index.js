var listaProdutos = [
  { nome: "Milho", preco: 3.56, quantidade: 15 },
  { nome: "Feijão", preco: 9.24, quantidade: 56 },
  { nome: "Arroz", preco: 8.78, quantidade: 4 }
];

function salvarProduto() {
  var campos = validacoes.validarCampos();

  if (campos === null) {
    return;
  }

  var existeProduto = validacoes.verificarDuplicidade(campos.nomeProduto);

  if (existeProduto) {
    alert("O produto " + campos.nomeProduto + " já existe na lista");
    return;
  }

  var produto = criarProduto(
    campos.nomeProduto,
    campos.precoProduto,
    campos.quantidadeProduto);

  listaProdutos.push(produto);

  exibirProdutos();
}

function exibirProdutos() {
  tabela.limpar("corpoTabelaProdutos");

  for (var produto of listaProdutos) {
    var valores = [ produto.nome, produto.preco, produto.quantidade ];

    tabela.atualizarCorpoTabela("corpoTabelaProdutos", valores);
  }
}

function criarProduto(nomeProduto, precoProduto, quantidadeProduto) {
  var produto = {
    nome: primeiraLetraMaiuscula(nomeProduto),
    preco: precoProduto,
    quantidade: quantidadeProduto
  };

  return produto;
}

function primeiraLetraMaiuscula(texto) {
  return texto[0].toUpperCase() + texto.substring(1);
}

function somenteNumeroDecimal(objTextBox, e) {
  var sep = 0;
  var key = '';
  var i = j = 0;
  var len = len2 = 0;
  var strCheck = '0123456789';
  var aux = aux2 = '';
  if (e.which) {
      var whichCode = e.which;
  } else {
      var whichCode = e.keyCode;
  }
  if ((whichCode == 13) || (whichCode == 0) || (whichCode == 8)) return true;
  key = String.fromCharCode(whichCode); // Valor para o código da Chave
  if (strCheck.indexOf(key) == -1) return false; // Chave inválida
  len = objTextBox.value.length;
  for (i = 0; i < len; i++)
      if ((objTextBox.value.charAt(i) != '0') && (objTextBox.value.charAt(i) != ",")) break;
  aux = '';
  for (; i < len; i++)
      if (strCheck.indexOf(objTextBox.value.charAt(i)) != -1) aux += objTextBox.value.charAt(i);
  aux += key;
  len = aux.length;
  if (len == 0) objTextBox.value = '';
  if (len == 1) objTextBox.value = '0' + "," + '0' + aux;
  if (len == 2) objTextBox.value = '0' + "," + aux;
  if (len > 2 && len < 13) {
      aux2 = '';
      for (j = 0, i = len - 3; i >= 0; i--) {
          if (j == 3) {
              aux2 += ".";
              j = 0;
          }
          aux2 += aux.charAt(i);
          j++;
      }
      objTextBox.value = '';
      len2 = aux2.length;
      for (i = len2 - 1; i >= 0; i--)
          objTextBox.value += aux2.charAt(i);
      objTextBox.value += "," + aux.substr(len - 2, len);
  }
  return false;
}