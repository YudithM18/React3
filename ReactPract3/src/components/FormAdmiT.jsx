import React, { useState, useEffect} from 'react'
import '../styles/FormAdmidT.css'
import postTarea from '../services/PostTareas';
import getTarea from '../services/GetTareas';
import deleteTarea from '../services/DeleteTareas';
import updateTarea from '../services/UpDateTareas';



function FormAdmiT() {

  const [Tarea, setTarea] = useState('');
  const [Fecha, setFecha] = useState ('');
  const [datosT, setTareas] = useState([]);
  const [EditarT, setEditarT] = useState(false);
  const [EditarF, setEditarF] = useState(false);
  const [ValorT, setValorT] = useState('');
  const [ValorF, setValorF] = useState('');


  useEffect(() => {
    const fetchTareas = async () => {
      const data = await getTarea();
     
      setTareas(data);
 
    };
    fetchTareas();
  }, []);


  const cargaEdicionT = () =>{
    setEditarT(true)
  }


  const cargaEdicionF = () =>{
    setEditarF(true)
  }

  function valorEditableT(e) {
    setValorT(e.target.innerText);
  }

  function ValorEditableF(e) {
    setValorF(e.target.innerText);
  }


  function  cargatarea(event) {
    setTarea(event.target.value);
  }

  function  cargafecha(event) {
    setFecha(event.target.value);
  }


  function cargarEdicion(tarea) {

  
     console.log(tarea,ValorT,ValorF);
     if (ValorT === '' && ValorF === '') {
              
      }else{
       if (ValorT !== '' || ValorF !== '') {
        
        const datosEditados = {
          Tarea: ValorT,
          Fecha: ValorF
        }

        updateTarea(datosEditados,tarea.id)
      }
    
    }
  
  }

  function cargarDelete(id) {
   deleteTarea(id)
  }


  
  const cargar = () => {
    postTarea(Tarea, Fecha)
  }
  return (
    <div>
      <div className='ContenedorAgregar'>
        <p>Agregar Tareas</p>
        <input className='inpu' type="text" value={Tarea} onChange={cargatarea} />
        <p>Agregar Estado</p>
        <input className='inpu' type="text" value={Fecha} onChange={cargafecha} />
        <br />
        <br />
        <button onClick={cargar}>Agregar</button>
      </div>
      <br />
      <br />

      <div className='ContenedorTareas'>
        <h1 className='TituloT'>Lista De Tareas</h1>
        <ul>
          {datosT.map((tarea) => (
            <li key={tarea.id}> 
            
          <h2 onClick={cargaEdicionT} suppressContentEditableWarning={true} contentEditable ={EditarT} value={ValorT} onInput={e=>{valorEditableT(e)}}>{tarea.Tarea}</h2>
        
           <h3 onClick={cargaEdicionF} suppressContentEditableWarning={true}  contentEditable= {EditarF} value={ValorF} onInput={e=>{ValorEditableF(e)}}>{tarea.Fecha}</h3>
             

             <button onClick={e=>cargarEdicion(tarea)}>Guardar</button>
             <button onClick={e => cargarDelete(tarea.id)}>Eliminar</button>
             </li>
          ))}
        </ul>
      </div>

    </div>
  )
}

export default FormAdmiT