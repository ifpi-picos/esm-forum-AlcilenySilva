const perguntas = [
    { id: 1, texto: "Qual a capital de MG?" },
    { id: 2, texto: "Qual a capital de RJ?" },
    { id: 3, texto: "Qual a capital de SP?" }
  ];
  
  const respostas = [
  
    { id_pergunta: 1, texto: "Belo Horizonte" },
    { id_pergunta: 1, texto: "BH" },
    { id_pergunta: 1, texto: "B. Horizonte" },
    { id_pergunta: 1, texto: "Beagá" },
    { id_pergunta: 1, texto: "BH mesmo" },
  
   
    { id_pergunta: 2, texto: "Rio de Janeiro" },
    { id_pergunta: 2, texto: "Rio" },
    { id_pergunta: 2, texto: "RJ" },
    { id_pergunta: 2, texto: "Cidade Maravilhosa" },
    { id_pergunta: 2, texto: "Riodejaneiro" },
    { id_pergunta: 2, texto: "R.J." },
    { id_pergunta: 2, texto: "R.J" },
    { id_pergunta: 2, texto: "Riô" },
    { id_pergunta: 2, texto: "R" },
    { id_pergunta: 2, texto: "Riozin" }, 
  
    
    { id_pergunta: 3, texto: "São Paulo" },
    { id_pergunta: 3, texto: "Sampa" },
    { id_pergunta: 3, texto: "SP" },
    { id_pergunta: 3, texto: "Paulicéia" },
    { id_pergunta: 3, texto: "Cidade da Garoa" },
    { id_pergunta: 3, texto: "Sãu Paulo" },
    { id_pergunta: 3, texto: "SPzão" },
    { id_pergunta: 3, texto: "S.P." },
    { id_pergunta: 3, texto: "Samper" },
    { id_pergunta: 3, texto: "Sampa City" },
    { id_pergunta: 3, texto: "Paulista" },
    { id_pergunta: 3, texto: "SP city" },
    { id_pergunta: 3, texto: "Paulistana" },
    { id_pergunta: 3, texto: "S. Paulo" },
    { id_pergunta: 3, texto: "Sampa linda" }
  ];
  module.exports = {
    async recuperar_todas_perguntas() {
      return perguntas.map(p => ({
        ...p,
        num_respostas: respostas.filter(r => r.id_pergunta === p.id).length
      }));
    },
  
    async recuperar_pergunta(id) {
      return perguntas.find(p => p.id === id);
    },
  
    async recuperar_todas_respostas(id_pergunta) {
      return respostas.filter(r => r.id_pergunta === id_pergunta);
    },
  
    async recuperar_num_respostas(id_pergunta) {
      return respostas.filter(r => r.id_pergunta === id_pergunta).length;
    },
  
    async criar_pergunta(texto) {
      // opcional no teste
    },
  
    async criar_resposta(id_pergunta, texto) {
      // opcional no teste
    }
  };
  
  