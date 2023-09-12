import {useRoutes, Navigate, HashRouter} from 'react-router-dom';
import { rutas } from './utilities/rutas';
import { Home } from './pages/Home';
import { Message } from './pages/Message';
import { Login } from './pages/Login';
import { Perfil } from './pages/Perfil';
import { Header } from './components/Header';

function App() {

  const Rutas = () => useRoutes([
    {
      path:'/',
      element:<Navigate to={rutas.login}/>
    },
    {
      path:rutas.home,
      element:<Home/>
    },
    {
      path:`${rutas.message}/:id_pueblic`,
      element:<Message/>
    },
    {
      path:rutas.login,
      element:<Login/>
    },
    {
      path:`${rutas.perfil}/:id_user`,
      element:<Perfil/>
    },
    {
      path:'*',
      element:<p>Not found 404</p>
    }
  ]);

  return (
    <HashRouter>
      <Header/>
      <Rutas/>
    </HashRouter>
  );
}

export default App
