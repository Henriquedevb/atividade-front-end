class CursoService {
  getAll() {
    const cursos = localStorage.getItem('dataCursos');
    return cursos ? JSON.parse(cursos) : [];
  }
  get() {}
  create(dados) {
    const cursos = this.getAll();
    cursos.push(dados);
    localStorage.setItem('dataCursos', JSON.stringify(cursos));
  }
  update() {}
  delete() {}
}

export default new CursoService();
