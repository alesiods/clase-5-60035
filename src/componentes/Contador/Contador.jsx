import { useState, useEffect } from "react"
//1)importamos el useEffect

//El efecto primario de React es renderizar componentes, manipulando el DOM
// Una aplicacion  web tiene hacer mucho mas que solo mostrarse, tiene que realizar operaciones, cponsumir datos de servidores, usar eventos, consumir APIS, etc.
//Para poder manipular los efecto secundarios de los cambios de estado vmaos a usar un nuevo HOOK que se llama useEffect.



const Contador = () => {
 const [contador, setContador] = useState(1)

 //A useEffect le pasamos dos parametros, el primero es una funcion callback con el componrtamento deseado, y el segundo es un array de dependecias en donde colocamos el estado que queremos estar vigilando. Cuando ese estado cambia se ejecuta nuevamente la funcion que pasamos en el primer parametro.

 useEffect(()=>{
    document.title=`Contador: ${contador}`
 },[contador])



    const sumarContador = () => {
        setContador(contador + 1)
    }

    const restarContador = () => {
        setContador (contador - 1)
    }
  return (
    <div>
        <button onClick={restarContador}> - </button>
        <strong> {contador}  </strong>
        <button onClick={sumarContador}> + </button>

    </div>
  )
}

export default Contador