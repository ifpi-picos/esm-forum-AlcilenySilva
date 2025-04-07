import repositorioMemoria from './testes/Repositorios/repositorio_memoria.js';

let repositorio = repositorioMemoria;

function reconfig_repositorio(novo_repositorio) {
  repositorio = novo_repositorio;
}

async function cadastrar_pergunta(texto) {
  if (!texto || texto.trim() === '') {
    throw new Error('Texto da pergunta não pode ser vazio.');
  }
  return await repositorio.criar_pergunta(texto);
}

async function cadastrar_resposta(id_pergunta, texto) {
  if (!texto || texto.trim() === '') {
    throw new Error('Texto da resposta não pode ser vazio.');
  }
  return await repositorio.criar_resposta(id_pergunta, texto);
}

async function listar_perguntas() {
  return await repositorio.recuperar_todas_perguntas();
}

async function get_respostas(id_pergunta) {
  return await repositorio.recuperar_todas_respostas(id_pergunta);
}

reconfig_repositorio(repositorioMemoria);

export {
  reconfig_repositorio,
  cadastrar_pergunta,
  cadastrar_resposta,
  listar_perguntas,
  get_respostas
};
