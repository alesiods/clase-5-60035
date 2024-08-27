import React from 'react'

//useRef es un hook que nos permite crear una referencia mutable que puede ser actualziada sin provocar una nueva renderizacion del componente.

//Ejemplo alamcenamos la cantidad de productos comprados pero no lo mostramos por pantalla

//1) Lo voy a importar
import {useRef} from "react";


//2) hacemos uso
export const UseRef = () => {
    
    const cantidadProdcutos = useRef(0)

    //Este Hook siempre me retorna un objeto que tiene una propiedad llamada "current" la cual vamos mutando informacion

    function agregarAlCarrito () {
        cantidadProdcutos.current = cantidadProdcutos.current + 1
        console.log(cantidadProdcutos.current)
    }

  return (
    <div>
        <p>Productos Marolio comprados:{cantidadProdcutos.current}</p>
        <button onClick= {agregarAlCarrito}>Comprar</button>
    </div>
  )
}

