import { jest } from '@jest/globals';
import * as modelo from '../modelo.js';

// Mock de um repositório com a interface esperada
const mock_repositorio = {
  recuperar_todas_perguntas: jest.fn().mockResolvedValue([
    {
      id: 1,
      texto: 'Qual a capital de MG?',
      num_respostas: 5,
      respostas: []
    },
    {
      id: 2,
      texto: 'Qual a capital de RJ?',
      num_respostas: 10,
      respostas: []
    },
    {
      id: 3,
      texto: 'Qual a capital de SP?',
      num_respostas: 15,
      respostas: []
    }
  ])
};

// Reconfigura o modelo para usar o mock acima
modelo.reconfig_repositorio(mock_repositorio);

test('Testando listar três perguntas', async () => {
  const perguntas = await modelo.listar_perguntas();
  expect(perguntas.length).toBe(3);
  expect(perguntas[0].texto).toBe('Qual a capital de MG?');
  expect(perguntas[1].texto).toBe('Qual a capital de RJ?');
  expect(perguntas[2].texto).toBe('Qual a capital de SP?');
  expect(perguntas[0].num_respostas).toBe(5);
  expect(perguntas[1].num_respostas).toBe(10);
  expect(perguntas[2].num_respostas).toBe(15);

  console.dir(perguntas, { depth: null });
});
