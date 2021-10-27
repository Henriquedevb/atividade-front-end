import { BrowserRouter, Switch, Route } from 'react-router-dom';

// components
import Home from './pages/Home';
import Cursos from './pages/Atividade5/Cursos';
import Disciplinas from './pages/Atividade5/Disciplinas';
import Professor from './pages/Atividade5/Professor';
import Alunosa from './pages/Atividade5/Alunosa';

const routes = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/atividade-cursos" component={Cursos} />
          <Route exact path="/atividade-disciplinas" component={Disciplinas} />
          <Route exact path="/atividade-professor" component={Professor} />
          <Route exact path="/atividade-alunos" component={Alunosa} />
        </Switch>
      </BrowserRouter>
    </>
  );
};
export default routes;
