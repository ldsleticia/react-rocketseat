import { useState } from "react";

export function Counter() {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
  }

  return (
    <div>
      <h2>{counter}</h2>
      <button type="button" onClick={increment}>
        Increment
      </button>
    </div>
  );
}

// sempre que usamos um estado, precisamos de duas
// variáveis e a segunda sempre será set seguido pelo
// nome da primeira. No código acima ficou
// [counter, setCounter]

// imutabilidade no react.js
// usuarios = ['j', 's', 'x']
// novoUsuario = [...usuarios, 'r']
// Os ...acima, representam o spreed operator do React para copiar
// O que está no array "pai" para o array "filho"
