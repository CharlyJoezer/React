import React from 'react';

function Todo(){
    const [activity, setActivity] = React.useState('')
    const [todos, setTodos] = React.useState([])
    const [edit, setEdit] = React.useState({})
    const [message, setMessage] = React.useState('')

    function generateId(){
        return Date.now()
    }

    function saveTodoHandler(event){
        event.preventDefault()
        if(!activity){
            return setMessage('Aktifitas tidak boleh kosong!')
        }
        
        setMessage('');

        if(edit.id){
            const editTodoIndex = todos.findIndex(function(todo){
                return todo.id === edit.id
            });
            const updatedTodo = {
                ...edit,
                activity
            }
            const updatedTodos = [...todos]
            updatedTodos[editTodoIndex] = updatedTodo
            setTodos(updatedTodos)
            return cancelEditHandler()

        }

        setTodos([...todos, {
            id : generateId(),
            activity,
            done : false
        }])
        setActivity('')
    }

    function removeTodoHandler(todoId){
        const filterTodos = todos.filter(function(todo){
            return todo.id !== todoId;
        })

        setTodos(filterTodos)

        edit.id && cancelEditHandler()
    }

    function editTodoHandler(todo){
        setActivity(todo.activity)
        setEdit(todo)
    }

    function cancelEditHandler(){
        setEdit({})
        setActivity('')
    }

    function doneTodoHandler(todo){
        const doneTodo = {
            ...todo,
            done : todo.done ? false : true
        } 
        const doneTodoIndex = todos.findIndex(function(currenTodo){
            return currenTodo.id === todo.id;
        });
        

        const updatedTodos = [...todos];
        updatedTodos[doneTodoIndex] = doneTodo;
    
        setTodos(updatedTodos)
    }

    return (
        <>
            <h1>Simple Todo List</h1>
            {message && <div style={{color:'red'}}>{message}</div>}
            <form onSubmit={saveTodoHandler}>
                <input type="text" value={activity} placholder="Aktifitas" onChange={function(event){
                    setActivity(event.target.value);
                }}/>
                <button>
                    {edit.id ? 'Simpan Perubahan' : 'Simpan'}
                </button>
                {edit.id && <button onClick={cancelEditHandler}>Batal</button>}
            </form>
            {todos.length > 0 ? 
            <ul>
                {todos.map(function(todo){
                    return <li key={todo.id}>
                            <input type="checkbox" checked={todo.done} onChange={doneTodoHandler.bind(this, todo)}/>
                            {todo.activity}
                            {todo.done ? '(Selesai)' : '(Belum Selesai) '}
                            <button onClick={editTodoHandler.bind(this, todo)}>Edit</button>
                            <button onClick={removeTodoHandler.bind(this, todo.id)}>Hapus</button>
                           </li>
                })}
            </ul>
            : <i>Tidak ada Aktifitas</i>
            }
        </>
    )
}

export default Todo;