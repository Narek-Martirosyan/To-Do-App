import './style.scss';
import Button from '@mui/material/Button';
import ClearAllIcon from '@mui/icons-material/ClearAll';

export default function Counter({initialTodos, setCount, count, todo, setTodo}) {

    function clearCompleted() {
        let i = 0;
        while(i < initialTodos.length) {
            if(initialTodos[i].completed) {
                console.log(initialTodos[i]);
                initialTodos.splice(i,1);
                i = 0;
                continue;
            }
            i++
        }
        
        initialTodos = initialTodos.filter((item) => !item.completed);
        
        setCount(0); 
        setTodo([...initialTodos]);
    }
    return(
        <div className='counter'>
            <span>Completed {count}/{todo.length}</span>
            <Button variant="standart" startIcon={<ClearAllIcon />} onClick={() => clearCompleted()}>
                Clear
            </Button>
        </div>
    )
}