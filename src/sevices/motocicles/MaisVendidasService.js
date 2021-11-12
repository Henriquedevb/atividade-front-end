class MaisVendidasService {
  getAll() {
    const maisVendidas = localStorage.getItem('datamaisVendidas');
    return maisVendidas ? JSON.parse(maisVendidas) : [];
  }
  get(id) {
    const maisVendidas = this.getAll();
    return maisVendidas[id];
  }
  create(dados) {
    const maisVendidas = this.getAll();
    maisVendidas.push(dados);
    localStorage.setItem('datamaisVendidas', JSON.stringify(maisVendidas));
  }
  update(id, dados) {
    const maisVendidas = this.getAll();
    maisVendidas.splice(id, 1, dados);
    localStorage.setItem('datamaisVendidas', JSON.stringify(maisVendidas));
  }
  delete(id) {
    const maisVendidas = this.getAll();
    maisVendidas.splice(id, 1);
    localStorage.setItem('datamaisVendidas', JSON.stringify(maisVendidas));
  }
}

export default new MaisVendidasService();
