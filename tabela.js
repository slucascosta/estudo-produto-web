const tabela = {
  criarCelula(conteudo) {
    var celula = document.createElement("td");
    celula.innerHTML = conteudo;
    return celula;
  },
  criarLinha(valores) {
    var linhaTabela = document.createElement("tr");

    // for (var i = 0; i < valores.length; i++) {
    //   linhaTabela.appendChild(tabela.criarCelula(valores[i]));
    // }

    for (var valor of valores) {
      linhaTabela.appendChild(tabela.criarCelula(valor));
    }
  
    // for (var i in valores) {
    //   linhaTabela.appendChild(tabela.criarCelula(valores[i]));  
    // }

    return linhaTabela;
  },
  atualizarCorpoTabela(idCorpoTabela, valores) {
    var corpoTabela = campos.obterElementoPeloId(idCorpoTabela);
    var linhaTabela = tabela.criarLinha(valores);

    corpoTabela.appendChild(linhaTabela);
  },
  limpar(idCorpoTabela) {
    var corpoTabela = campos.obterElementoPeloId(idCorpoTabela);
    var tabela = corpoTabela.parentElement;

    corpoTabela.remove();

    var novoCorpoTabela = document.createElement("tbody");
    novoCorpoTabela.id = idCorpoTabela;

    tabela.appendChild(novoCorpoTabela);
  }
};