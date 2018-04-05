/*
Fluxo com 10 estados
teste inicial 02 estados, alternando JSON
*/

const http = require('http');

//Variável que define estados

var descompata = JSON.parse('{"estado":"01", , }');

var estado = var descompacta[01]

//Primeiro estado
if (var estado == 01)
{
var e01 = { "Qual seu nome?":"teste", "Quanto tempo empresa atua no mercado?":"teste", "estado":"01"};
var e01JSON = JSON.stringify(e01);
}

//Segundo estado
else if (var estado == 02) {
  var e02 = { "Qual valor médio das obras?":"teste", "Qual a forma de controle?":"teste", "estado":"02"};
  var e02JSON2 = JSON.stringify(e02);
}

//necessário importar json com o estado correto por usuário
//muda usuário de estado de acordo com a resposta

/*
  Dúvidas
como leio o JSON que recebo e faço a troca de estados?

como deixar o fluxo do usuário salvo? Informações já preenchidas para utilizar no fim do ciclo

*/
