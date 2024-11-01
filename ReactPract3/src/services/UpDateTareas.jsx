async function updateTarea( TareaData,id) {
    try {
    
        const response = await fetch("http://localhost:3001/Tareas/"+id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(TareaData)
        });

     
        return await response.json();
    } catch (error) {
        console.error('Error update user:', error);
        throw error;
    }
}

export default updateTarea