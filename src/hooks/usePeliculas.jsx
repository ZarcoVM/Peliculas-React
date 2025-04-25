import { useState, useEffect } from 'react';

export function usePeliculas(key = 'peliculas', initialValue = []) {
  const [peliculas, setPeliculas] = useState(() => {
    const guardadas = localStorage.getItem(key);
    return guardadas ? JSON.parse(guardadas) : initialValue;
  });

  const [peliculaEditando, setPeliculaEditando] = useState(null);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(peliculas));
  }, [peliculas, key]);

  const agregarPelicula = (pelicula) => {
    if (peliculaEditando) {
      setPeliculas(prev =>
        prev.map(p => p.id === pelicula.id ? pelicula : p)
      );
      setPeliculaEditando(null);
    } else {
      setPeliculas(prev => [...prev, { ...pelicula, id: Date.now() }]);
    }
  };

  const eliminarPelicula = (id) => {
    setPeliculas(prev => prev.filter(p => p.id !== id));
  };

  const editarPelicula = (pelicula) => {
    setPeliculaEditando(pelicula);
  };

  return {
    peliculas,
    peliculaEditando,
    agregarPelicula,
    eliminarPelicula,
    editarPelicula
  };
}
