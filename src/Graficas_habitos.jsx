import React, { useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';


export default function GraficaHabito ({ habitos }) {
  // Usa habitos como datos para la gráfica
  // Ejemplo:
  // const datosHabito = habitos.map((h, i) => ({ fecha: `Día ${i+1}`, veces: 1 }));

  return (
    <div style={{ width: '100%', height: 350 }}>
      <h2>Seguimiento del Hábito</h2>
      <ResponsiveContainer>
        <LineChart data={habitos} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="fecha" />
          <YAxis allowDecimals={false} label={{ value: 'Veces', angle: -90, position: 'insideLeft' }} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="veces" stroke="#00C49F" strokeWidth={3} dot={{ r: 4 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

