import { useState, useEffect } from 'react';

const Formulario = ({ agregarPelicula, peliculaEditando }) => {
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [genero, setGenero] = useState('');

  useEffect(() => {
    if (peliculaEditando) {
      setTitulo(peliculaEditando.titulo);
      setDescripcion(peliculaEditando.descripcion);
      setGenero(peliculaEditando.genero);
    }
  }, [peliculaEditando]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!titulo || !descripcion || !genero) return;

    const nuevaPelicula = {
      id: peliculaEditando ? peliculaEditando.id : null,
      titulo,
      descripcion,
      genero
    };

    agregarPelicula(nuevaPelicula);
    setTitulo('');
    setDescripcion('');
    setGenero('');
  };

  return (
    <form onSubmit={handleSubmit} className="formulario">
      <input 
        type="text" 
        placeholder="Título" 
        value={titulo} 
        onChange={(e) => setTitulo(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Descripción" 
        value={descripcion} 
        onChange={(e) => setDescripcion(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Género" 
        value={genero} 
        onChange={(e) => setGenero(e.target.value)} 
      />
      <button type="submit">{peliculaEditando ? "Actualizar" : "Agregar"}</button>
    </form>
  );
};

export default Formulario;
