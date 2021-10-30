class DisciplinaService {
  getAll() {
    const disciplinas = localStorage.getItem('dataDisciplinas');
    return disciplinas ? JSON.parse(disciplinas) : [];
  }
  get() {}
  create(dados) {
    const disciplinas = this.getAll();
    disciplinas.push(dados);
    localStorage.setItem('dataDisciplinas', JSON.stringify(disciplinas));
  }
  update() {}
  delete() {}
}

export default new DisciplinaService();
