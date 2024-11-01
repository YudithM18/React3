async function postTarea(Tarea,Fecha ) {
    try {
     
     const datosTarea = { 
        Tarea,
        Fecha
        
        
        };

        const response = await fetch("http://localhost:3001/Tareas", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datosTarea)
        });

     
        return await response.json();

        
    } catch (error) {
        console.error('Error posting user:', error);
        throw error;
    }
}

export default postTarea