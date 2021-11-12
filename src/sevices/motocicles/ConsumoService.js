class ConsumoService {
  getAll() {
    const consumo = localStorage.getItem('dataConsumo');
    return consumo ? JSON.parse(consumo) : [];
  }
  get(id) {
    const consumo = this.getAll();
    return consumo[id];
  }
  create(dados) {
    const consumo = this.getAll();
    consumo.push(dados);
    localStorage.setItem('dataConsumo', JSON.stringify(consumo));
  }
  update(id, dados) {
    const consumo = this.getAll();
    consumo.splice(id, 1, dados);
    localStorage.setItem('dataConsumo', JSON.stringify(consumo));
  }
  delete(id) {
    const consumo = this.getAll();
    consumo.splice(id, 1);
    localStorage.setItem('dataConsumo', JSON.stringify(consumo));
  }
}

export default new ConsumoService();
