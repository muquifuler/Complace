import { useState } from 'react'

function Button() {

  const [contenido, setContenido] = useState("BUTTTTTON");

  return (
    <button>{contenido}</button>
  )
}

export default Button