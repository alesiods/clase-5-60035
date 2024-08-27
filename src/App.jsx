import React from 'react'
import Articulos from './componentes/Articulos/Articulos'
import Contador from './componentes/Contador/Contador'
import Categorias from './componentes/Categorias/Categorias'
import { UseRef } from './componentes/Referencia/useRef'



//componentes 2

//recordemos.. ¿que es un componete?
//cnjunto de elementos que cumplen una misma funcion en la interfaz del usuario

//tienen 3 caracteristicas:

//1) van a renderizar un unico elemento
//2) ppueden pasar props
//las props son objetos, con informacion que le pasan los componentes padres a los componentes hijos.
//importante aclarar que el flujo  de informacion es UNIDIRECCIONAL, salmente los padres le pueden pasar indo a los hijitos

//¿¿que tipo de datos?
// datos primitivos
//obejtos y arreglos
//funciones

//Y ahora se suman los CHILDREN

//Los children es una forma de pasar otro elementos o componetnes como props


//CICLOS DE VIDA DE LOS COMPONENTES: es una seria de estados por los cuales pasa todo componente a lo largo de su existencia

//-montaje(ingresa el componete al DOM)
//-Actualizacion (Actualiza el valor del estado. ej: el contaador su valor)
//-Desmontaje(desaparece el contador y me voy carrito)

const App = () => {

  return (
    <>
      {/* <Articulos img="https://picsum.photos/200/300" titulo="Alimentos para gatos"> 
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quae ipsa, recusandae delectus ad vel hic nisi quidem deserunt nesciunt fugiat aspernatur facilis quia itaque totam, corrupti maxime sequi? Non.</p>
      </Articulos>
      <Articulos img="https://picsum.photos/200/300" titulo="Vacunas para gatos"/>
      <Articulos img="https://picsum.photos/200/300" titulo="Jueguetes para gatos">
      <p>DESCUENTO. 10% PAGANDO EN EFECTIVO</p>
      <>100</>
      </Articulos> */}
      {/* <Contador/> */}
      {/* <Categorias/> */}
      <UseRef/>
    </>
  )
}

export default App
