let repositorio = require('./testes/Repositorios/repositorio_bd');



function reconfig_repositorio(novo_repositorio) {
  repositorio = novo_repositorio;
}

async function listar_perguntas() {
  return await repositorio.recuperar_todas_perguntas();
}

async function cadastrar_pergunta(texto) {
  await repositorio.criar_pergunta(texto);
}

async function cadastrar_resposta(id_pergunta, texto) {
  await repositorio.criar_resposta(id_pergunta, texto);
}

async function get_pergunta(id) {
  return await repositorio.recuperar_pergunta(id);
}

async function get_respostas(id) {
  return await repositorio.recuperar_todas_respostas(id);
}

async function get_num_respostas(id) {
  return await repositorio.recuperar_num_respostas(id);
}

module.exports = {
  reconfig_repositorio,
  listar_perguntas,
  cadastrar_pergunta,
  cadastrar_resposta,
  get_pergunta,
  get_respostas,
  get_num_respostas
};
