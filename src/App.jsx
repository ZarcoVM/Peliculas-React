import './App.css';
import FormularioPeliculas from './components/Formulario';
import ListaPeliculas from './components/Listas';
import { usePeliculas } from './hooks/usePeliculas';

function App() {
  const {
    peliculas,
    peliculaEditando,
    agregarPelicula,
    eliminarPelicula,
    editarPelicula
  } = usePeliculas('peliculas');

  return (
    <div className="contenedor">
      <h1>Admin Peliculas</h1>
      <FormularioPeliculas
        agregarPelicula={agregarPelicula}
        peliculaEditando={peliculaEditando}
      />
      <ListaPeliculas
        peliculas={peliculas}
        eliminarPelicula={eliminarPelicula}
        editarPelicula={editarPelicula}
      />
    </div>
  );
}

export default App;
