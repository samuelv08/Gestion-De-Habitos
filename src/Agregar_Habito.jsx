import { useState } from 'react';
import GraficaHabito from './graficas_habitos';

export default function AgregarHabito() {
  const [habito, setHabito] = useState('');
  // [{ nombre: string, datos: [{fecha, veces}] }]
  const [habitos, setHabitos] = useState([]);
  const [fecha, setFecha] = useState('');
  const [veces, setVeces] = useState('');
  const [habitoActivo, setHabitoActivo] = useState(null); // índice del hábito seleccionado

  function BotonAgregarHabito() {
    if (!habito) {
      alert('Por favor ingresa un habito');
      return;
    }
    setHabitos([...habitos, { nombre: habito, datos: [] }]);
    setHabito('');
  }

  function BotonAgregarDato() {
    if (habitoActivo === null) {
      alert('Selecciona un hábito para agregar datos');
      return;
    }
    if (!fecha || !veces) {
      alert('Ingresa fecha y veces');
      return;
    }
    const nuevosHabitos = habitos.map((h, i) =>
      i === habitoActivo
        ? { ...h, datos: [...h.datos, { fecha, veces: Number(veces) }] }
        : h
    );
    setHabitos(nuevosHabitos);
    setFecha('');
    setVeces('');
  }

  function eliminarHabito(index) {
    setHabitos(habitos.filter((_, i) => i !== index));
    if (habitoActivo === index) setHabitoActivo(null);
    else if (habitoActivo > index) setHabitoActivo(habitoActivo - 1);
  }

  return (
    <div>

      <input
        type="text"
        placeholder="Ingresa un habito"
        value={habito}
        onChange={(e) => setHabito(e.target.value)}
      />
      <button onClick={BotonAgregarHabito}>Agregar hábito</button>
      <div>
        <h2>Tus hábitos</h2>
        {habitos.length === 0 ? (
          <p>No tienes hábitos registrados.</p>
        ) : (
          habitos.map((h, i) => (
            <div key={i} style={{ marginBottom: '2rem', border: '1px solid #444', padding: '1rem' }}>
              <h4>
                - {h.nombre}
                <button onClick={() => eliminarHabito(i)} style={{ marginLeft: '1rem' }}>Eliminar</button>
                <button onClick={() => setHabitoActivo(i)} style={{ marginLeft: '1rem' }}>
                  {habitoActivo === i ? 'Activo' : 'Seleccionar'}
                </button>
              </h4>
              {/* Inputs y gráfica solo si este hábito está activo */}
              {habitoActivo === i && (
                <>
                  <div>
                    <h3>Agregar datos a la gráfica</h3>
                    <input
                      type="date"
                      placeholder="Fecha"
                      value={fecha}
                      onChange={(e) => setFecha(e.target.value)}
                    />
                    <input
                      type="number"
                      placeholder="Veces"
                      value={veces}
                      onChange={(e) => setVeces(e.target.value)}
                    />
                    <button onClick={BotonAgregarDato}>Agregar dato</button>
                  </div>
                  {h.datos.length > 0 && <GraficaHabito habitos={h.datos} />}
                </>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}