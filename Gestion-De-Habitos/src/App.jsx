import { useState } from 'react'

export function Body () {
  return (
    <div style={{
      backgroundColor:'black',
      color:'white',
      minHeight: '100vh',
      padding: '2rem'
    }}>
      <Titulo />
      <Texto1 />
      <Texto2 />
      <AgregarHabito />
    </div>
  );
};

export function Titulo () {
  return <h1>Gestiona tus habitos</h1>
};

export function Texto1 () {
  return <p>Gestiona tus habitos de una manera facil y rapida</p>
}

export function Texto2 () {
  return <h3>Ingresa tus habitos</h3>
}

export function AgregarHabito () {
  const [habito, setHabito] = useState('');
  const [habitos, setHabitos] = useState([]);

  function BotonAgregar () {
    if (!habito) {
      alert('Por favor ingresa un habito');
      return;
    }
    setHabitos([...habitos, habito]);
    setHabito('');
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
      <h2>Tus habitos</h2>
      <div>
        {habitos.map((h, i) => (
          <div key={i}>
            <h4>- {h}</h4>
          </div>
        ))}
      </div>
    </div>
  )
}





