import { useRoutes, Navigate, HashRouter } from 'react-router-dom';
import { rutas } from './utilities/rutas';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Perfil } from './pages/Perfil';
import { Header } from './components/Header';
import { UseContexto } from './Context';
import { Editar } from './components/Editar';
import { Loading } from './components/Loading';

function App() {
  const { loading } = UseContexto();
  const Rutas = () => useRoutes([
    {
      path: '/',
      element: <Navigate to={rutas.login} />
    },
    {
      path: rutas.home,
      element: <Home />
    },
    {
      path: rutas.login,
      element: <Login />
    },
    {
      path: `${rutas.perfil}/:id_user`,
      element: <Perfil />
    },
    {
      path: '*',
      element: <p>Not found 404</p>
    }
  ]);

  const { mostrarEditar } = UseContexto();

  return (
    <HashRouter>
      {!loading ? (
        <>
          <Header />
          <Rutas />
          {mostrarEditar ? <Editar /> : null}
        </>
      ) : <Loading />}
    </HashRouter>
  );
}

export default App
