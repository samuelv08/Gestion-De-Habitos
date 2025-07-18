import { useState } from 'react';
import AgregarHabito from './Agregar_Habito'; 

export default function Body () {
  const [habitos, setHabitos] = useState([]);

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
      <AgregarHabito habitos={habitos} setHabitos={setHabitos} />
    </div>
  );
}

export function Titulo () {
  return <h1>Gestiona tus habitos</h1>
}

export function Texto1 () {
  return <p>Gestiona tus habitos de una manera facil y rapida</p>
}

export function Texto2 () {
  return <h3>Ingresa tus habitos</h3>
}

