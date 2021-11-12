class AvaliacoesService {
  getAll() {
    const avaliacoes = localStorage.getItem('dataAvaliacoes');
    return avaliacoes ? JSON.parse(avaliacoes) : [];
  }
  get(id) {
    const avaliacoes = this.getAll();
    return avaliacoes[id];
  }
  create(dados) {
    const avaliacoes = this.getAll();
    avaliacoes.push(dados);
    localStorage.setItem('dataAvaliacoes', JSON.stringify(avaliacoes));
  }
  update(id, dados) {
    const avaliacoes = this.getAll();
    avaliacoes.splice(id, 1, dados);
    localStorage.setItem('dataAvaliacoes', JSON.stringify(avaliacoes));
  }
  delete(id) {
    const avaliacoes = this.getAll();
    avaliacoes.splice(id, 1);
    localStorage.setItem('dataAvaliacoes', JSON.stringify(avaliacoes));
  }
}

export default new AvaliacoesService();
