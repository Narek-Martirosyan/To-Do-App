import { useState } from 'react';
import './style.scss';
import EditDelete from '../EditDelete';
import AddTodo from '../AddTodo';
import SearchTodo from '../SearchTodo';
import Counter from '../Counter';
import Checkbox from '../Checkbox';

let initialTodos = [
    {
        title: 'Learn JS',
        completed: false
    },
    {
        title: 'Learn CSS',
        completed: false
    },
    {
        title: 'Learn HTML',
        completed: false
    },
    {
        title: 'Learn React',
        completed: false
    },
]

export default function TodoList() {
    let [count, setCount] = useState(0);
    let [todo, setTodo] = useState(initialTodos);
    return(
        <div className='todo'>
            <div className='search-add-todo-block'>
            <SearchTodo initialTodos={initialTodos} todo={todo} setTodo={setTodo}/>
            <AddTodo initialTodos={initialTodos} todo={todo} setTodo={setTodo}/>
            </div>
            
            {todo.map((item, index) => {
                return (
                    <div key={item.title + '-' + index} className='todo-item'>
                        <div>
                            <Checkbox initialTodos={initialTodos} count={count} setCount={setCount} todo={todo} setTodo={setTodo} index={index} />
                            {item.completed ? <del>{item.title}</del> : item.title}
                        </div>  
                        <EditDelete initialTodos={initialTodos} setTodo={setTodo} index={index} setCount={setCount} count={count} />
                    </div>
                )
            })}
            <Counter initialTodos={initialTodos} setCount={setCount} count={count} todo={todo} setTodo={setTodo}/>
        </div>
    )
}