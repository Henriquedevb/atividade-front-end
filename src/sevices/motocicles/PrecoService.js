class PrecoService {
  getAll() {
    const preco = localStorage.getItem('dataPreco');
    return preco ? JSON.parse(preco) : [];
  }
  get(id) {
    const preco = this.getAll();
    return preco[id];
  }
  create(dados) {
    const preco = this.getAll();
    preco.push(dados);
    localStorage.setItem('dataPreco', JSON.stringify(preco));
  }
  update(id, dados) {
    const preco = this.getAll();
    preco.splice(id, 1, dados);
    localStorage.setItem('dataPreco', JSON.stringify(preco));
  }
  delete(id) {
    const preco = this.getAll();
    preco.splice(id, 1);
    localStorage.setItem('dataPreco', JSON.stringify(preco));
  }
}

export default new PrecoService();
