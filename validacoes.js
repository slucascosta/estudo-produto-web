var validacoes = {
  verificarDuplicidade(nomeAProcurar) {
    var existeProduto = listaProdutos.filter((produto) =>
      produto.nome.toUpperCase() === nomeAProcurar.toUpperCase());

    return existeProduto.length > 0;
  },
  validarCampos() {
    var nomeProduto = campos.obterValorPeloId("nomeProduto");
    var precoProduto = campos.obterNumeroDoCampo("precoProduto");
    var quantidadeProduto = campos.obterNumeroDoCampo("quantidadeProduto");

    if (nomeProduto === "") {
      alert("Campo Nome obrigatorio");
      return null;
    }
    else if (precoProduto === "") {
      alert("Campo Preço obrigatorio");
      return null;
    }
    else if (quantidadeProduto === "") {
      alert("Campo Quantidade obrigatorio");
      return null;
    }

    return {
      nomeProduto: nomeProduto,
      precoProduto: precoProduto,
      quantidadeProduto: quantidadeProduto
    };
  }
};