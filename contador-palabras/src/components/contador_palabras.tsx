import React, { useEffect, useState } from 'react'

export default function ContadorPalabras() {
  const [text, setTexto] = useState<string>('');
  const [contadorLetras, setContadorLetras] = useState<number>(0);
  const [color, setColor] = useState<string>('black');

  useEffect(() => {
    const contador = text.length;
    setContadorLetras(contador);

    if (contador < 10) {
      setColor('yellow');
    } else if (contador >= 10 && contador < 50) {
      setColor('green');
    } else {
      setColor('red');
    }
  }, [text]);

  function manejarTexto(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setTexto(e.target.value);
  }

  return (
    <div style={{ padding: '20px' }}>
      <textarea
        rows={10}
        cols={40}
        onChange={manejarTexto}
        placeholder="Escribe aquí..."
      />
      <h2 style={{ color: color }}>
        La cantidad de letras es: {contadorLetras}
      </h2>
    </div>
  );
}
