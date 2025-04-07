//const modelo = require('../../modelo');
//const repositorioMemoria = require('./repositorio_memoria');

import * as modelo from '../../modelo.js';
import repositorioMemoria from './repositorio_memoria.js';
beforeEach(() => {
  // Troca o repositório padrão pelo de memória
  modelo.reconfig_repositorio(repositorioMemoria);
});

test('Testando listar três perguntas do repositório de memória', async () => {
  const perguntas = await modelo.listar_perguntas();
 // Adiciona as respostas a cada pergunta
 for (const pergunta of perguntas) {
  pergunta.respostas = await modelo.get_respostas(pergunta.id);
}

// Imprime perguntas com respostas no terminal
//console.log("Perguntas e suas respostas:");
//console.log(JSON.stringify(perguntas, null, 2));//
//console.log("Perguntas com contagem de respostas:");//
//console.log(perguntas);//
for (const pergunta of perguntas) {
  pergunta.respostas = await modelo.get_respostas(pergunta.id);
}

// Mostra tudo com profundidade total
console.dir(perguntas, { depth: null });
  expect(perguntas.length).toBe(3);
  expect(perguntas[0].texto).toBe('Qual a capital de MG?');
  expect(perguntas[1].texto).toBe('Qual a capital de RJ?');
  expect(perguntas[2].texto).toBe('Qual a capital de SP?');
  expect(perguntas[0].num_respostas).toBe(5);
  expect(perguntas[1].num_respostas).toBe(10);
  expect(perguntas[2].num_respostas).toBe(15);
});
