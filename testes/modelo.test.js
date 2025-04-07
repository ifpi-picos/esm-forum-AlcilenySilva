import * as modelo from '../modelo.js';
import repositorioMemoria from './Repositorios/repositorio_memoria.js';

beforeEach(() => {
  modelo.reconfig_repositorio(repositorioMemoria);
});

describe('Testes adicionais para 100% de cobertura', () => {
  test('Erro ao cadastrar pergunta vazia', async () => {
    await expect(modelo.cadastrar_pergunta('')).rejects.toThrow('Texto da pergunta não pode ser vazio.');
    await expect(modelo.cadastrar_pergunta('    ')).rejects.toThrow('Texto da pergunta não pode ser vazio.');
    await expect(modelo.cadastrar_pergunta(null)).rejects.toThrow();
  });

  test('Erro ao cadastrar resposta vazia', async () => {
    await modelo.cadastrar_pergunta('Qual a capital de MG?');
    await expect(modelo.cadastrar_resposta(1, '')).rejects.toThrow('Texto da resposta não pode ser vazio.');
    await expect(modelo.cadastrar_resposta(1, '     ')).rejects.toThrow('Texto da resposta não pode ser vazio.');
    await expect(modelo.cadastrar_resposta(1, null)).rejects.toThrow();
  });

  test('Cadastrar pergunta e resposta corretamente', async () => {
    const pergunta = await modelo.cadastrar_pergunta('Quanto é 2+2?');
    expect(pergunta.id).toBeGreaterThan(0);

    const resposta = await modelo.cadastrar_resposta(pergunta.id, '4');
    expect(resposta.id_pergunta).toBe(pergunta.id);
  });

  test('Listar perguntas retorna as perguntas com respostas', async () => {
    await modelo.cadastrar_pergunta('Qual a capital de SP?');
    await modelo.cadastrar_resposta(4, 'São Paulo');
    const perguntas = await modelo.listar_perguntas();
    expect(perguntas.length).toBeGreaterThan(0);
    expect(perguntas[perguntas.length - 1].texto).toBe('Qual a capital de SP?');
  });

  test('Recuperar respostas de uma pergunta', async () => {
    const pergunta = await modelo.cadastrar_pergunta('Qual é a cor do céu?');
    await modelo.cadastrar_resposta(pergunta.id, 'Azul');
    const respostas = await modelo.get_respostas(pergunta.id);
    expect(respostas.length).toBeGreaterThan(0);
    expect(respostas[0].texto).toBe('Azul');
  });
});
