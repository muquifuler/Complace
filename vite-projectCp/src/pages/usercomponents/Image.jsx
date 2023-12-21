import { useState } from 'react'

function Image() {

    const [url, setUrl] = useState("BUTTTTTON");
    const [styles, setStyles] = useState({
        // Essentials
        backgroundImage: 'url("'+url+'")',
    
        // Medidas
        width: '100%',
        height: '10%',
        padding: '0',
        margin: '0',
    
        // Estilos
        backgroundColor: 'var(--color-d-bg)',
        boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
        cursor: 'pointer',
    
        // Bordes
        borderRadius: '3px',
        border: 'solid 5px yellow',
    });
    
    return (
      <div style={styles}>
        <h1>sfsdhfu</h1>
      </div>
    );
}

export default Image