import { useState } from 'react';

export default function AgregarHabito() {
  const [habito, setHabito] = useState('');
  const [habitos, setHabitos] = useState([]);

  function BotonAgregar() {
    if (!habito) {
      alert('Por favor ingresa un habito');
      return;
    }
    setHabitos([...habitos, habito]);
    setHabito('');
  }

  function eliminarHabito(index) {
    setHabitos(habitos.filter((_, i) => i !== index));
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Ingresa un habito"
        value={habito}
        onChange={(e) => setHabito(e.target.value)}
      />
      <button onClick={BotonAgregar}>Agregar</button>
      <div>
        <h2>Tus hábitos</h2>
        {habitos.length === 0 ? (
          <p>No tienes hábitos registrados.</p>
        ) : (
          habitos.map((h, i) => (
            <div key={i}>
              <h4>
                - {h}
                <button onClick={() => eliminarHabito(i)}>Eliminar</button>
              </h4>
            </div>
          ))
        )}
      </div>
    </div>
  );
}