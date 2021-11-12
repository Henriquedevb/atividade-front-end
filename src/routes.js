import { BrowserRouter, Switch, Route } from 'react-router-dom';

// components
import Home from './pages/Home';

import NavBar from './components/NavBar';

import './App.css';
import Modelo from './pages/Modelos/Modelo';
import ModelosForm from './pages/Modelos/ModeloForm';
import MaisVendidas from './pages/MaisVendidas/MaisVendidas';
import MaisVendidasForm from './pages/MaisVendidas/MaisVendidasForm';
import Consumo from './pages/Consumo/Consumo';
import ConsumoForm from './pages/Consumo/ConsumoForm';
import Precos from './pages/Precos/Precos';
import PrecosForm from './pages/Precos/PrecosForm';
import Avaliacoes from './pages/Avaliacoes/Avaliacoes';
import AvaliacoesForm from './pages/Avaliacoes/AvaliacoesForm';

const routes = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/modelos" component={Modelo} />
          <Route exact path="/modelosForm" component={ModelosForm} />
          <Route exact path="/modelosForm/:id" component={ModelosForm} />
          <Route exact path="/maisVendidas" component={MaisVendidas} />
          <Route exact path="/maisVendidasForm" component={MaisVendidasForm} />
          <Route
            exact
            path="/maisVendidasForm/:id"
            component={MaisVendidasForm}
          />
          <Route exact path="/consumo" component={Consumo} />
          <Route exact path="/consumoForm" component={ConsumoForm} />
          <Route exact path="/consumoForm/:id" component={ConsumoForm} />
          <Route exact path="/precos" component={Precos} />
          <Route exact path="/precosForm" component={PrecosForm} />
          <Route exact path="/precosForm/:id" component={PrecosForm} />
          <Route exact path="/avaliacao" component={Avaliacoes} />
          <Route exact path="/avaliacaoForm" component={AvaliacoesForm} />
          <Route exact path="/avaliacaoForm/:id" component={AvaliacoesForm} />
        </Switch>
      </BrowserRouter>
    </>
  );
};
export default routes;
