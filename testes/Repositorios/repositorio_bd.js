const bd = require('../../bd/bd_utils');

module.exports = {
  async recuperar_todas_perguntas() {
    return await bd.queryAll("SELECT * FROM perguntas", []);
  },

  async recuperar_pergunta(id_pergunta) {
    return await bd.query("SELECT * FROM perguntas WHERE id = ?", [id_pergunta]);
  },

  async recuperar_todas_respostas(id_pergunta) {
    return await bd.queryAll("SELECT * FROM respostas WHERE id_pergunta = ?", [id_pergunta]);
  },

  async recuperar_num_respostas(id_pergunta) {
    const r = await bd.query("SELECT COUNT(*) as total FROM respostas WHERE id_pergunta = ?", [id_pergunta]);
    return r.total;
  },

  async criar_pergunta(texto) {
    await bd.exec("INSERT INTO perguntas (texto) VALUES (?)", [texto]);
  },

  async criar_resposta(id_pergunta, texto) {
    await bd.exec("INSERT INTO respostas (id_pergunta, texto) VALUES (?, ?)", [id_pergunta, texto]);
  }
};
