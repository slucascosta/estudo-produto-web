var campos = {
  obterElementoPeloId(idElemento) {
    var elemento = document.getElementById(idElemento);
    return elemento;
  },  
  obterValorPeloId(idCampo) {
    var valor = document.getElementById(idCampo).value;
    return valor;
  },  
  obterNumeroDoCampo(idCampo) {
    var valorString = campos.obterValorPeloId(idCampo);
    var valorNumero = valorString;
  
    if (valorNumero != "") {
      valorNumero = Number(valorString.replaceAll(".", "").replace(",", "."));
    }
  
    return valorNumero;
  }
};