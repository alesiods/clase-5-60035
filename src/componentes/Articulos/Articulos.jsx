import React from 'react'

const Articulos = ({img,titulo, children}) => {
    
    console.log(children)

  return (
    <article>
        <img src={img} alt={titulo} />
        {children}
        <h2>{titulo}</h2>
        {children}
        
        <button>Leer Articulo</button>
    </article>
  )
}

export default Articulos