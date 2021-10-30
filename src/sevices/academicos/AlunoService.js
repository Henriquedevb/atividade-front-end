class AlunoService {
  getAll() {
    const alunos = localStorage.getItem('dataAlunos');
    return alunos ? JSON.parse(alunos) : [];
  }
  get() {}
  create(dados) {
    const alunos = this.getAll();
    alunos.push(dados);
    localStorage.setItem('dataAlunos', JSON.stringify(alunos));
  }
  update() {}
  delete() {}
}

export default new AlunoService();
