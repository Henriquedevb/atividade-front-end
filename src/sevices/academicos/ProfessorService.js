class ProfessorService {
  getAll() {
    const professores = localStorage.getItem('dataProfessores');
    return professores ? JSON.parse(professores) : [];
  }
  get() {}
  create(dados) {
    const professores = this.getAll();
    professores.push(dados);
    localStorage.setItem('dataProfessores', JSON.stringify(professores));
  }
  update() {}
  delete() {}
}

export default new ProfessorService();
