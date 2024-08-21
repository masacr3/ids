import { useEffect, useState } from "react"
import Logoids from "./Logoids"
import Mensaje from "./Mensaje"

function Pantalla({setPresionoPrompt, op, setOp}) {
  // eslint-disable-next-line no-unused-vars
  const [cuestionario, setCuestionario] = useState( ["1- Indique el comando que muestra su directorio acutal",
    "2- Cómo accede a la ayuda de Linux",
    "3- Muestre por pantalla el contenido del archivo /etc/gdbinit",
    "4- Genere un directorio que se llame /home/usuario",
    "5- Borre el directorio que generó en el pto.4",
    "6- Cambie su password",
    "7- Muestre el contenido del archivo /etc/passwd por pantalla de manera que pueda desplazarse hacia adelante y hacia atrás en el mismo.",
    "8- Diga cuántos usuarios pueden hay definidos en el sistema (tip: consultar archivos passwd)",
    "9- Genere un archivo lines.txt con 100 líneas donde cada una de ellas debe estar el nro de línea",
    "10- Listar los archivos del directorio donde se encuentre que comiencen con la letra “D”. Del resultado obtenido, seleccione las líneas que contienen el texto “top” y el resultado grábelo en un archivo de texto llamado salida.txt",
    "11- Listar por pantalla el primer campo del archivo passwd y luego grabar esa misma información en una archivo de texto.",
    "12- Fin"])

  
  const [preguntas, setPreguntas] = useState([])
  const [iter, setIter] = useState(0)
  const [sig, setSig] = useState(false)

  const eligioSiguiente = () =>{
      if (iter + 3 <=12 ){
        let lista = []
        for(let i = iter; i<iter+3 ; i++){
          lista.push(cuestionario[i])
        }
        lista.push("[  +  ] elija opcion o mostrar mas preguntas ...")
        lista.push("[ Ids prompt ] > ")
        setIter(iter + 3);
        setPreguntas(lista);
      } else{
        setIter(0)
      }
  }

  useEffect( () => {
    if (iter === 0 || op === true){
      eligioSiguiente();
      if(op){
        setOp(false)
      }
    }
    
  },[op])

  const factoryLinea = (op, i) => {
    if ( i === 4 ){
      return (
      <div className="flex-row prompt" onClick={() => setPresionoPrompt(true)}>
        <Mensaje texto={op} key={i} />
        <div className="caret"></div>
      </div>
      )
    } else{
      return ( <Mensaje texto={op} key={i}/>)
    }
  }

  return (
    <div className='pantalla'>
      <Logoids />
      { preguntas && preguntas.map((op, i) =>( factoryLinea(op, i) ))}
    </div>
  )
}

export default Pantalla