class ModeloService {
  getAll() {
    const modelos = localStorage.getItem('dataModelos');
    return modelos ? JSON.parse(modelos) : [];
  }
  get(id) {
    const modelos = this.getAll();
    return modelos[id];
  }
  create(dados) {
    const modelos = this.getAll();
    modelos.push(dados);
    localStorage.setItem('dataModelos', JSON.stringify(modelos));
  }
  update(id, dados) {
    const modelos = this.getAll();
    modelos.splice(id, 1, dados);
    localStorage.setItem('dataModelos', JSON.stringify(modelos));
  }
  delete(id) {
    const modelos = this.getAll();
    modelos.splice(id, 1);
    localStorage.setItem('dataModelos', JSON.stringify(modelos));
  }
}

export default new ModeloService();
