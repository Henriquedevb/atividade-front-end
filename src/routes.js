import { BrowserRouter, Switch, Route } from 'react-router-dom';

// components
import Home from './pages/Home';

import Aluno from './pages/Alunos/Alunos';
import AlunosForm from './pages/Alunos/AlunosForm';

import Cursos from './pages/Cursos/Cursos';
import CursosForm from './pages/Cursos/CursosForm';

import Disciplina from './pages/Disciplinas/Disciplinas';
import DisciplinasForm from './pages/Disciplinas/DisciplinasForm';

import Professor from './pages/Professor/Professor';
import ProfessorForm from './pages/Professor/ProfessorForm';

import NavBar from './components/NavBar';

import './App.css';

const routes = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Aluno" component={Aluno} />
          <Route exact path="/AlunoForm" component={AlunosForm} />
          <Route exact path="/curso" component={Cursos} />
          <Route exact path="/cursoForm" component={CursosForm} />
          <Route exact path="/disciplina" component={Disciplina} />
          <Route exact path="/disciplinaForm" component={DisciplinasForm} />
          <Route exact path="/professor" component={Professor} />
          <Route exact path="/professorForm" component={ProfessorForm} />
        </Switch>
      </BrowserRouter>
    </>
  );
};
export default routes;
