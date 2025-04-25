const Listas = ({ peliculas, eliminarPelicula, editarPelicula }) => {
    return (
      <div className="lista">
        <h2>Películas Registradas</h2>
        {peliculas.length === 0 ? (
          <p>No hay películas registradas.</p>
        ) : (
          peliculas.map(p => (
            <div key={p.id} className="tarjeta">
              <h3>{p.titulo}</h3>
              <p><strong>Descripción:</strong> {p.descripcion}</p>
              <p><strong>Género:</strong> {p.genero}</p>
              <button onClick={() => editarPelicula(p)}>Editar</button>
              <button onClick={() => eliminarPelicula(p.id)} className="eliminar">Eliminar</button>
            </div>
          ))
        )}
      </div>
    );
  };
  
  export default Listas;
  