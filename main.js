/*
Fluxo com 10 estados
teste inicial 02 estados, alternando JSON
*/

const http = require('http');

\\Primeiro estado
var e01 = { "Qual seu nome?":"teste", "Quanto tempo empresa atua no mercado?":"teste", "estado":"01"};
var e01JSON = JSON.stringify(e01);


\\Segundo estado
var e02 = { "Qual valor médio das obras?":"teste", "Qual a forma de controle?":"teste", "estado":"02"};
var e02JSON2 = JSON.stringify(e02);
