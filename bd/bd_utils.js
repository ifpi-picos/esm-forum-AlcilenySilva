const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./bd/esmforum.db');

// Função para reconectar (opcional, pois o sqlite3 não suporta reconfiguração direta)
function reconfig(nome) {
  db.close(); // Fecha a conexão antiga
  db = new sqlite3.Database(nome); // Cria nova conexão
}

// Função para consultas que retornam UM resultado
function query(query, params) {
  return new Promise((resolve, reject) => {
    db.get(query, params, (err, row) => {
      if (err) reject(err);
      else resolve(row);
    });
  });
}

// Função para consultas que retornam VÁRIOS resultados
function queryAll(query, params) {
  return new Promise((resolve, reject) => {
    db.all(query, params, (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
  });
}

// Função para execução de comandos (INSERT, UPDATE, DELETE)
function exec(statement, params) {
  return new Promise((resolve, reject) => {
    db.run(statement, params, function (err) {
      if (err) reject(err);
      else resolve({ lastID: this.lastID, changes: this.changes });
    });
  });
}

// Inicializa o banco de dados (exemplo)
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS perguntas (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      texto TEXT
    )
  `);
});

exports.reconfig = reconfig;
exports.query = query;
exports.queryAll = queryAll;
exports.exec = exec;