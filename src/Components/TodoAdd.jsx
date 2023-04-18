export const TodoAdd = ({ onNewTodo }) => {
   
    const onFormSubmit = (event) => {
        event.preventDefault()

        const newTodo = {
            id: new Date().getTime(),
            description: "Hacer el proyecto",
            done: false
        }

        onNewTodo(newTodo)
    }

    return (
        <form onSubmit = { (event) => onFormSubmit(event)}>
            < input type="text"
                placeholder='Tarea'
                className="form-control"
            />
            <button
                type='submit'
                className='btn btn-outline-primary mt-1'
            > Agregar
            </button>




        </form>

    )

}


